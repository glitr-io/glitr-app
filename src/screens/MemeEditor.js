import MemeEditor from '../shared/templates/MemeEditor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMemeItems } from '../redux/meme-editor/memeEditorActions';
import { saveMeme } from '../redux/library/libraryActions';

const mapStateToProps = ({
    memeEditor: {
        id,
        metadata,
        memeItems
    }
}) => ({
    id,
    metadata,
    memeItems
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMemeItems,
    saveMeme
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MemeEditor);
