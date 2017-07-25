import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSuccess } from 'reducers/test'

import SignIn from './SignIn'

const mapStateToProps = ({ test }) => ({ test })

const mapDispatchToProps = dispatch => bindActionCreators({ setSuccess }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)