import React from "react";
import Svg, { Path, Rect } from "react-native-svg";


export default function SearchIcon() {
  return (
    <Svg
      width={29}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={29} height={29} rx={6} fill="#DE5865" />
      <Path
        d="M14.75 19.75c1.553 0 3.061-.52 4.285-1.477l3.846 3.846 1.238-1.237-3.847-3.846a6.958 6.958 0 0 0 1.478-4.286c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7Zm0-12.25A5.255 5.255 0 0 1 20 12.75 5.255 5.255 0 0 1 14.75 18a5.255 5.255 0 0 1-5.25-5.25 5.255 5.255 0 0 1 5.25-5.25Z"
        fill="#fff"
      />
    </Svg>
  )
}