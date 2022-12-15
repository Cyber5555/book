import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FontSizeIcon = (props) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 4a1 1 0 0 1 .934.638l4.86 12.5.018.044.34.874-1.054 2.808-.912-2.34H7.814l-1.88 4.84a1 1 0 1 1-1.866-.726L6.19 17.18a1.02 1.02 0 0 1 .016-.042L11.07 4.636A1 1 0 0 1 12 4ZM8.594 16.524h6.816L12.002 7.76l-3.41 8.764h.002Zm16.342-5.88a1 1 0 0 0-1.87.004L14.308 34H13a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-.556l2.25-6H29.44l2.298 6H31a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1.12l-8.948-23.36.004.004ZM28.674 26h-9.23l4.566-12.18L28.674 26Z"
      fill="#000"
    />
  </Svg>
)

export default FontSizeIcon
