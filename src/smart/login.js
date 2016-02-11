import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../modules/auth'

/* Components */
import LoginForm from '../components/login'

class Login extends Component {
  handleSubmit(credentials) {
    return this.props.login(credentials)  
  }
  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit.bind(this)} />
    )  
  }  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
