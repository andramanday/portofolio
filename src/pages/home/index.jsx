import { getAboutbyID } from '../../redux/action/aboutAction'
import { connect } from 'react-redux'
import home from './home'
const mapStoreToProps = state => ({
  about: state.about.about,
  loading:state.about.loading
})
const mapDispatchToProps = dispatch => ({
  getAboutbyID:(id)=>dispatch(getAboutbyID(id))
})

export default connect(mapStoreToProps, mapDispatchToProps)(home)