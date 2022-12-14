import BottomBar from "./BottomBar/BottomBar"
import RoomContent from "./RoomContent/RoomContent"
import {useSelector} from "react-redux"
import GameContainer from "./RoomContent/GameRoom/GameContainer"
import { useEffect } from "react"
import { MySocketContext } from "../Store/Context/SocketContext"
import { useContext } from "react"
import { useDispatch } from "react-redux"
import GameActions from "../Store/Actions/GameActions"

const Room = () => {
    const is_game_running = useSelector(state => state.selected_room_reducer.room_object.game_running)
    const game_state = useSelector(state=>state.game_reducer)

    const socket_context = useContext(MySocketContext)

    const show_end_screen = useSelector(state => state.end_screen_reducer.show_end_screen)

    const dispatch = useDispatch()

    useEffect( ()=>{
        socket_context.on("game-update",(game_data)=>{
            dispatch(GameActions.update_game(game_data))
        })

        return () =>{
            socket_context.off("game-update")
        }

    },[])

    useEffect ( () =>{
        socket_context.on("end-screen",(data)=>{
            if(data.value===true){
                dispatch(
                    {
                        type:"SHOW_END_SCREEN"
                    }
                )
            }
            else{

                dispatch(
                    {
                        type:"HIDE_END_SCREEN"
                    }
                )
            }
        })

    })
    return (
        <div className=" w-full h-full">
            {(is_game_running || show_end_screen)?
            <GameContainer></GameContainer>:
            <div className="w-full  text-black  flex flex-col justify-center items-center"
                style={
                    {height: "100vh"}
            }>


                <div className="w-3/4 h-3/4  bg-gray-500 text-white flex flex-col justify-between">

                    <RoomContent></RoomContent>

                    <BottomBar></BottomBar>
                </div>
            </div>
            }
        </div>
    

    )
}
export default Room
