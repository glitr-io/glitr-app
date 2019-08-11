import MemeEditor from '../shared/templates/MemeEditor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMemeItems } from '../redux/meme-editor/memeEditorActions';

const mapStateToProps = ({
    memeEditor: {
        memeItems
    }
}) => ({
    memeItems
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMemeItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MemeEditor);
