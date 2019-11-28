import { getPersonalbyID } from '../../redux/action/personalAction'
import { connect } from 'react-redux'
import personal from './personal'
const mapStoreToProps = state => ({
  personal: state.personal.personal,
  loading:state.personal.loading
})
const mapDispatchToProps = dispatch => ({
  getPersonalbyID:(id)=>dispatch(getPersonalbyID(id))
})

export default connect(mapStoreToProps, mapDispatchToProps)(personal)