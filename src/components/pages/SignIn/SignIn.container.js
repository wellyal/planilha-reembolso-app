import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signin } from 'reducers/auth'

import SignIn from './SignIn'

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)