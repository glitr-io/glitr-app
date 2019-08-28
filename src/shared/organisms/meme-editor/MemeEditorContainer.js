import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MemeEditor from './MemeEditor';
import {
    updateMemeItems,
    addMemeItem,
    resetCanvas,
    updateMetadata
} from '../../../redux/meme-editor/memeEditorActions';

const mapStateToProps = ({
    memeEditor: {
        id,
        metadata,
        memeItems
    },
}) => ({
    id,
    metadata,
    memeItems
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMemeItems,
    addMemeItem,
    resetCanvas,
    updateMetadata
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MemeEditor);
