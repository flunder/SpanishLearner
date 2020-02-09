import React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

export const BubbleCorner = (props) => (
    <Svg width={24} height={10} viewBox="0 0 24 10" {...props}>
        <Path
            d="M0 0h23.843v10H9.737C9.807 3.902 6.562.568 0 0z"
            fill="#FFF"
            fillRule="evenodd"
        />
    </Svg>
)
