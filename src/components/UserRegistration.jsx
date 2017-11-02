import React, { Component } from 'react'
import styled from 'styled-components'
import SignUp from './SignUp'
import SignIn from './SignIn'



const BlackBox = styled.div`
  background-color: rgba(0,0,0,.7);
  display: flex;
  background-filter: blur(5px);
  width: 80%;
  height: 40vh;
  margin: 10% auto;
  padding: 5%;
  z-index: 1;
  div {
    z-index: 3;
  }
`
const WhiteBox = styled.div`
  position: absolute;
  height: 40vh;
  width: 40%;
  background-color: white;
  z-index: 2;
  transform: ${props => props.left ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .4s;
  transition-timing-function: cubic-bezier(.31,-0.51,.51,1.5);
`

class UserRegistration extends Component {
  state = {
    signIn: false
  }

  handleChange = () => {
    this.setState({signIn: !this.state.signIn})
  }
  render () {
    return (
        <BlackBox>
            <WhiteBox left={this.state.signIn}/>
            <SignUp handleChange={this.handleChange} signIn= {this.state.signIn}/>
            <SignIn handleChange={this.handleChange} signIn= {this.state.signIn}/>
        </BlackBox>
    )
  }
}

export default UserRegistration;
