import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";



export default function GoBack() {
  return (
    <Svg
      width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#a)">
        <Rect width={35} height={35} rx={8} fill="#A69496" />
        <Path
          d="M19.507 26a1.35 1.35 0 0 1-.556-.117 1.279 1.279 0 0 1-.447-.332l-6.212-7.285a1.173 1.173 0 0 1-.292-.771c0-.282.103-.554.293-.771l6.43-7.285a1.34 1.34 0 0 1 1.813-.158c.262.206.427.502.459.823a1.17 1.17 0 0 1-.292.889L14.954 17.5l5.556 6.508a1.154 1.154 0 0 1 .173 1.299 1.24 1.24 0 0 1-.48.508c-.21.123-.45.187-.696.184Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={35} height={35} rx={8} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}