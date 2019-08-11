import MemeTypes from '../shared/templates/MemeTypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MemeTypes);
