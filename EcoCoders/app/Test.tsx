import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props: SvgProps) => (
  <Svg>
    <Path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
  </Svg>
)
export default SvgComponent
