import React from 'react';
import { Path, Svg } from "react-native-svg"

export default function Eye({ boolEye }) {
  {
    return boolEye == true ?

      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962v0Z"
          stroke="#888"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="#888"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>

      :

      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M2 10s3.5 4 10 4 10-4 10-4M4 11.645 2 14m20 0-1.996-2.352M8.914 13.68 8 16.5m7.063-2.812L16 16.5"
          stroke="#888"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>

  }
}