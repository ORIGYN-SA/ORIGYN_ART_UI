import React from "react";

const CloseIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 40 40"
      fill={props.white?'white':'black'}
      stroke="white"
      {...props}
    >
      <path d="M20.1744 17.4085L28.117 9.46576L30.1754 11.5241L22.2327 19.4668L21.8791 19.8203L22.2327 20.1739L30.1754 28.1166L28.117 30.1749L20.1744 22.2322L19.8208 21.8786L19.4672 22.2322L11.5246 30.1749L9.46624 28.1166L17.4089 20.1739L17.7625 19.8203L17.4089 19.4668L9.46624 11.5241L11.5246 9.46576L19.4672 17.4085L19.8208 17.762L20.1744 17.4085Z" />
    </svg>
  );
};

export default CloseIcon;
