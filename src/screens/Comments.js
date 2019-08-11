import Comments from '../shared/templates/Comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
