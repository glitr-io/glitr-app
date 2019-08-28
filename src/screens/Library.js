import Library from '../shared/templates/Library';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeMeme } from '../redux/library/libraryActions';
import { loadCanvas } from '../redux/meme-editor/memeEditorActions';

const mapStateToProps = ({
    library: {
        memes
    }
}) => ({
    memes
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadCanvas,
    removeMeme
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Library);
