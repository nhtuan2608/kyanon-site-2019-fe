import { connect } from 'react-redux';
import { testChange } from '../redux/actions/index';

const About = props => <div>{props.test}</div>;
const mapState = state => ({
  test: state.test
});
export default connect(mapState)(About);
