import React, { Component } from 'react'
import styled from 'styled-components'

const NotActive = styled.div`
  width: 50%;
`
const Active = styled.div`
  width: 50%;
`

class SignUp extends Component {
  render () {
    if (!this.props.signIn) {
      return (
        <NotActive onClick={this.props.handleChange}>
          <h3>Don't Have an account?</h3>
          <p>Benjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
        </NotActive>
      )
    } else {
      return (
        <Active>
          <h1>
            SIGN UP
          </h1>
          <form>
            <input type="text" placeholder='Full Name' />
            <br/>
            <input type='text' placeholder='Email' />
            <br/>
            <input type='password' placeholder='Password' />
            <div>
              <button>Sign Up</button>
            </div>
          </form>
        </Active>
      )
  }
}
}

export default SignUp;
