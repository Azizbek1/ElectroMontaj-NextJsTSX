import React from 'react'
import SpinnerStyled from './Style'
export default function Spinner() {
  return (
    <SpinnerStyled>
      <div className='loadingSpinnerContainer'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </SpinnerStyled>
  )
}
