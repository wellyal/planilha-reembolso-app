import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUserExpenses } from 'reducers/expenses'

import Stylesheet from './Stylesheet'

const mapStateToProps = ({ expenses }) => ({ expenses })

const mapDispatchToProps = dispatch => bindActionCreators({ getUserExpenses }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Stylesheet)