import React from 'react'
import HeaderButton from './components/HeaderButton'
import Container from './styled'
/* global HTMLButtonElement */

interface HeaderProps {
  title: string;
  buttonClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonDisabled?: boolean;
  rightComponent?: React.ReactNode;
  buttonLabel?:string

}

const Header: React.FC<HeaderProps> = ({
  title,
  buttonDisabled,
  buttonClick,
  rightComponent,
  buttonLabel
}) => (
  <Container>
    <div className='button_header_container'>
      <HeaderButton type="button" disabled={buttonDisabled} onClick={buttonClick}>
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 12L1 6.5L7 1"
            stroke="#DFDBD2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </HeaderButton>
      <p>{buttonLabel}</p>
    </div>
    <p>{title}</p>
    <div>{rightComponent}</div>
  </Container>
)

export default Header
