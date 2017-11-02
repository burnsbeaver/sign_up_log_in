import React, { Component } from 'react'
import styled from 'styled-components'

const NotActive = styled.div`
  width: 50%;
`
const Active = styled.div`
  width: 50%;
`



class SignIn extends Component {
  render () {
    if (this.props.signIn) {
      return (
        <NotActive onClick={this.props.handleChange}>
          <h3>Have an account?</h3>
          <p>Benjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
        </NotActive>
      )
    } else {
      return (
        <Active>
          <h1>
            LOG IN
          </h1>
          <form>
            <input type='text' placeholder='Email' />
            <br/>
            <input type='password' placeholder='Password' />
            <div>
              <p>Forgot Password?</p>
              <button>Log In</button>
            </div>
          </form>
        </Active>
      )
  }
}
}

export default SignIn;
