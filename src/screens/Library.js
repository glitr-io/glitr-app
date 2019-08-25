import Library from '../shared/templates/Library';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveMeme, removeMeme } from '../redux/library/libraryActions';

const mapStateToProps = ({
    library: {
        memes
    }
}) => ({
    memes
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveMeme,
    removeMeme
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Library);
