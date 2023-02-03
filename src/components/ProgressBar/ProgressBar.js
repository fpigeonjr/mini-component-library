/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper>
      <progress id="loadinglabel" max="100" value={value}>
        {value}
      </progress>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  // box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

export default ProgressBar
