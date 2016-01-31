import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { register } from '../modules/auth'

/* Components */
import RegisterForm from '../components/register'

class Register extends Component {
  onSubmit(credentials) {
    return this.props.register(credentials)  
  }
  render() {
    return (
      <RegisterForm onSubmit={this.onSubmit.bind(this)} />
    )  
  }  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ register }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)
