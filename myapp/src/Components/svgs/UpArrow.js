// icon:arrow-up-short | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react";

const ArrowUpShortIcon=(props)=> {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 5.707 5.354 8.354a.5.5 0 11-.708-.708l3-3z"
      />
    </svg>
  );
}

export default ArrowUpShortIcon;
