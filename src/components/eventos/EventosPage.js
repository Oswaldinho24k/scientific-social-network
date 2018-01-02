import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EventosContainer from './EventosContainer';

function mapStateToProps(state, ownProps) {
    return {
        eventos: state.eventos,
        fetched: state.eventos !== undefined
    }
}

function mapDispatchToProps() {
    return {

    }
}


const EventosPage = connect(mapStateToProps, mapDispatchToProps)(EventosContainer);
export default EventosPage;