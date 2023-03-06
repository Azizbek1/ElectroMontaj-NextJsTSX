import React from 'react'
import SpinnerStyled from './Style'
export default function Spinner() {
  return (
    <SpinnerStyled>
      <div className="lds-hourglass"></div>
    </SpinnerStyled>
  )
}
