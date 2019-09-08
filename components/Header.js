import React from 'react'
import Link from 'next/link'
import Logo from './shared/Logo'
import styled from 'styled-components'
import BurgerMenu from './shared/BurgerMenu'

// Styles at bottom

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleOpen = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    console.log(isOpen)
    return (
      <StyledSection>
        <nav>
          <div>
            <Logo width={40} height={40} fill='red' />
          </div>
          <MenuBox>
            <div
              className={`open ${isOpen ? 'oppenned' : ''}`}
              onClick={this.handleOpen}
            >
              <span className='cls'></span>
              <span>
                <ul className='sub-menu '>
                  <li>
                    <Link href='/about'>
                      <LinkStyle>About</LinkStyle>
                    </Link>
                  </li>
                  <li>
                    <Link href='/skills'>
                      <LinkStyle>Skills</LinkStyle>
                    </Link>
                  </li>
                  <li>
                    <Link href='/projects'>
                      <LinkStyle>Projects</LinkStyle>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <LinkStyle>Contact</LinkStyle>
                    </Link>
                  </li>
                </ul>
              </span>
              <span className='cls'></span>
            </div>
          </MenuBox>
        </nav>
      </StyledSection>
    )
  }
}
export default Header

const LinkStyle = styled.a`
  margin-right: 15px;
  text-decoration: none;
`

const StyledSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`

const MenuBox = styled.div`
  .open {
    position: fixed;
    top: 0px;
    right: 40px;
    width: 40px;
    height: 40px;
    display: block;
    cursor: pointer;
    transition: opacity 0.2s linear;
  }
  .open:hover {
    opacity: 0.8;
  }
  .open span {
    display: block;
    float: left;
    clear: both;
    height: 4px;
    width: 40px;
    border-radius: 40px;
    background: ${props =>
      props.children._self.props.btnColor
        ? props.children._self.props.btnColor
        : `#333333`};
    position: absolute;
    top: 10px;
    overflow: hidden;
    transition: all 0.4s ease;
  }
  .open span:nth-child(1) {
    margin-top: 10px;
    z-index: 9;
  }
  .open span:nth-child(2) {
    margin-top: 25px;
  }
  .open span:nth-child(3) {
    margin-top: 40px;
  }

  .sub-menu {
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    height: 0;
    width: 0;
    right: 0;
    top: 0;
    position: absolute;
    background-color: rgba(38, 84, 133, 0.54);
    border-radius: 50%;
    z-index: 18;
    overflow: hidden;
  }
  .sub-menu li {
    display: block;
    float: right;
    clear: both;
    height: auto;
    margin-right: -160px;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .sub-menu li:first-child {
    margin-top: 180px;
  }
  .sub-menu li:nth-child(1) {
    -webkit-transition-delay: 0.05s;
  }
  .sub-menu li:nth-child(2) {
    -webkit-transition-delay: 0.1s;
  }
  .sub-menu li:nth-child(3) {
    -webkit-transition-delay: 0.15s;
  }
  .sub-menu li:nth-child(4) {
    -webkit-transition-delay: 0.2s;
  }
  .sub-menu li:nth-child(5) {
    -webkit-transition-delay: 0.25s;
  }
  .sub-menu li a {
    color: #fff;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    display: block;
    float: left;
    line-height: 40px;
  }

  .oppenned .sub-menu {
    opacity: 1;
    height: 400px;
    width: 400px;
  }
  .oppenned span:nth-child(2) {
    overflow: visible;
  }
  .oppenned span:nth-child(1),
  .oppenned span:nth-child(3) {
    z-index: 100;
    transform: rotate(45deg);
  }
  .oppenned span:nth-child(1) {
    transform: rotate(45deg) translateY(12px) translateX(12px);
  }
  .oppenned span:nth-child(2) {
    height: 400px;
    width: 400px;
    right: -160px;
    top: -160px;
    border-radius: 50%;
    background-color: rgba(38, 84, 133, 0.54);
  }
  .oppenned span:nth-child(3) {
    transform: rotate(-45deg) translateY(-10px) translateX(10px);
  }
  .oppenned li {
    margin-right: 168px;
  }

  .button {
    display: block;
    float: left;
    clear: both;
    padding: 20px 40px;
    background: #fff;
    border-radius: 3px;
    border: 2px solid #10a1ea;
    overflow: hidden;
    position: relative;
  }
  .button:after {
    transition: transform 0.3s ease;
    content: '';
    position: absolute;
    height: 200px;
    width: 400px;
    transform: rotate(45deg) translateX(-540px) translateY(-100px);
    background: #10a1ea;
    z-index: 1;
  }
  .button:before {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: attr(title);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    z-index: 2;
    text-align: center;
    padding: 20px 40px;
    transform: translateY(200px);
  }
  .button:hover {
    text-decoration: none;
  }
  .button:hover:after {
    transform: translateX(-300px) translateY(-100px);
  }
  .button:hover:before {
    transform: translateY(0);
  }

  .container {
    display: flex;
    max-width: 80%;
    justify-content: center;
    margin: 0 auto;
  }

  .card {
    position: relative;
    z-index: 10;
    width: 280px;
    border-radius: 4px;
    padding-bottom: 40px;
    background: #131e32;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card figcaption {
    position: absolute;
    bottom: 0;
    padding: 10px;
    color: #fff;
  }
  .card img {
    max-width: 100%;
    border: 1px solid #222;
    transition: 0.4s;
  }
  .card:hover img {
    transform: scale(1.1);
  }
`
