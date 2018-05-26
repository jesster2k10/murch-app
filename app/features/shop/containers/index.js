import { connect } from 'react-redux';
import Shop from '../components/shop';

const mapStateToProps = state => ({
  mappedProp: {},
})

export default connect(mapStateToProps, {})(Shop);