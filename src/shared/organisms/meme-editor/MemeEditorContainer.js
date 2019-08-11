import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MemeEditor from './MemeEditor';
import { updateMemeItems, addMemeItem } from '../../../redux/meme-editor/memeEditorActions';

const mapStateToProps = ({
    memeEditor: {
        memeItems
    }
}) => ({
    memeItems
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMemeItems,
    addMemeItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MemeEditor);
