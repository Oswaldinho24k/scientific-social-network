import React, {Component} from 'react';
import EventsList from './EventsList';
import {GridList, GridTile, FlatButton, Dialog} from 'material-ui';
import './EventosStyles.css'
import FiltrarEventos from "./FiltrarEventos";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {FloatingActionButton, CircularProgress} from 'material-ui';
import NuevoEvento from "./NuevoEvento";
import * as eventsActions from '../../redux/actions/eventosActions';
import moment from 'moment';
import toastr from 'toastr';


const today = new Date();
let aux = new Date();
aux.setMonth(aux.getMonth() + 1);
let todayMs = today.getTime();
let oneMonthAfterMs = aux.getTime();

export const TODAY = 'TODAY';
export const TOMORROW = 'TOMORROW';
export const THIS_WEEK = 'THIS_WEEK';

class EventosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newEvent: {
                name:       '',
                owner:      '',
                image:      '',
                place:      '',
                time:       today,
                date:       today,
                isPrivate: false,
                description: ''
            },
            imagePreview: {
                src: '',
                file: ''
            },
            rangeFilter: {
                start: todayMs,
                end: oneMonthAfterMs
            }
        };
    }

    ///////////////////////////////////////////////////

    handleNewEventChange = (e) => {
        let {newEvent} = this.state;
        const name = e.target.name;
        newEvent[name] = e.target.value;
        this.setState({newEvent})
    };

    handleNewEventDate = (e, date) => {
        let {newEvent} = this.state;
        newEvent.date = date;
        this.setState({newEvent})
    };

    handleNewEventTime = (event, date) => {
        let {newEvent} = this.state;
        newEvent.time = date;
        this.setState({newEvent})
    };

    handleNewEventPrivate = (event, isInputChecked) =>{
        let {newEvent} = this.state;
        newEvent.isPrivate = isInputChecked;
        this.setState({newEvent})
    };

    ///////////////////////////////////////////////////
    handleOpen = () => {
        const {usuario} = this.props;
        const {newEvent} = this.state;
        newEvent.owner = usuario.id;
        this.setState({open: true, newEvent});
    };

    handleClose = () => {
        let {newEvent} = this.state;

        newEvent = {
            name: '',
            owner: '',
            image: '',
            place: '',
            time: today,
            date: today,
            isPrivate: false
        };

        this.setState({open: false, newEvent});

    };

    uploadPhoto=(e)=>{
        let {imagePreview} = this.state;
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onload =  (e) => {
            imagePreview.src = e.target.result;
            imagePreview.file = file;
            this.setState({imagePreview});
        };

        reader.readAsDataURL(file);
    };

    formatDateAndTime = () => {
        let momentTime = moment(this.state.newEvent.time);
        let momentDate = moment(this.state.newEvent.date);
        return  moment({
            year: momentDate.year(),
            month: momentDate.month(),
            day: momentDate.date(),
            hour: momentTime.hours(),
            minute: momentTime.minutes()
        }).format('x');

    };
    saveNewEvent = ( e) => {
        e.preventDefault();
        const {newEvent, imagePreview : {file}} = this.state;
        if (file !== '') {
            this.props.eventsActions.uploadPhoto(newEvent.name, file)
                .then(r => {
                    console.log('Image upload successfully');
                    newEvent.image = r.downloadURL;
                    newEvent.date = this.formatDateAndTime();
                    newEvent.time = null;
                    this.setState({newEvent});
                    this.props.eventsActions.saveEvent(newEvent)
                        .then(r => {
                            toastr.success('Guardado')
                        })
                        .catch(e => {
                            toastr.error(e)
                        });
                    this.handleClose();
                }).catch(e => {
                console.log(e.message);
            });
        }else{
            this.props.eventsActions.saveEvent(newEvent)
                .then(r => {
                    toastr.success('Guardado')
                })
                .catch(e => {
                    toastr.error(e)
                });
            this.handleClose();
        }
    };

    ///////////////////// Filter Event ///////////////////////////////////////////////

    filterEvents = ( filter ) => {
        let rangeFilter = {...this.state.rangeFilter};
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();
        let day = today.getDate();
        let startAux;
        let endAux;
        switch (filter){
            case TODAY:
                startAux = new Date(
                    year,
                    month,
                    day,
                    0, 0, 0, 0
                );
                endAux = new Date(
                    year,
                    month,
                    day,
                    23, 59, 59, 59
                );
                break;
            case TOMORROW:
                today.setDate( today.getDate() + 1);
                year = today.getFullYear();
                month = today.getMonth();
                day = today.getDate();
                startAux = new Date(
                    year,
                    month,
                    day,
                    0, 0, 0, 0
                );
                endAux = new Date(
                    year,
                    month,
                    day,
                    23, 59, 59, 59
                );
                break;
            case THIS_WEEK:
                today.setDate( today.getDate() + 7);
                year = today.getFullYear();
                month = today.getMonth();
                day = today.getDate();
                startAux = new Date();
                endAux = new Date(
                    year,
                    month,
                    day,
                    23, 59, 59, 59
                );

        }
        rangeFilter.start = startAux;
        rangeFilter.end = endAux;
        this.setState({rangeFilter});
    };

    //////////////////////////////////////////////////////////////////////////////////
    render() {
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                type="submit"
                label="Agregar"
                form="nuevoevento"
                primary={true}
                keyboardFocused={true}
            />,
        ];
        const {fetched, eventos = [], usuario, logged, history} = this.props;
        const {newEvent, imagePreview, rangeFilter: {start, end}} = this.state;
        const filteredEvents = eventos.filter( (event,key) => event.date > start && event.date < end );
        if(fetched){
            console.log(eventos);
        }
        console.log(newEvent);
        return (
            <div style={{backgroundColor:"#eceff1"}}>
                { !fetched ? <CircularProgress className="loading-progress" size={80} thickness={7}/> :
                    <div className="root-eventos">
                        <GridList cellHeight={'auto'} cols={3}>
                            <GridTile cols={1} className="left-side">
                                <FiltrarEventos
                                    filterEvents={this.filterEvents}
                                />
                            </GridTile>
                            <GridTile cols={2} className="right-side">
                                <h3>
                                    Rango de fechas:
                                    { " " + moment(start).format('DD MMM YYYY HH:mm') + " "}
                                    a
                                    { " " + moment(end).format('DD MMM YYYY HH:mm')   + " " }
                                </h3>
                                <br/>
                                <EventsList history={history} events={filteredEvents}/>
                            </GridTile>
                        </GridList>
                        <Dialog
                            title="Crear nuevo evento"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            autoScrollBodyContent={true}
                        >
                            <NuevoEvento
                                onChange={this.handleNewEventChange}
                                onChangeDate={this.handleNewEventDate}
                                onChangeTime={this.handleNewEventTime}
                                onChangePrivate={this.handleNewEventPrivate}
                                imagePreview={imagePreview}
                                uploadPhoto={this.uploadPhoto}
                                newEvent={newEvent}
                                onSubmit={this.saveNewEvent}
                            />
                        </Dialog>
                        {
                            logged &&
                            <FloatingActionButton
                                onClick={this.handleOpen}
                                className="fab-button">
                                <ContentAdd/>
                            </FloatingActionButton>
                        }

                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        eventos: state.eventos,
        fetched: state.eventos !== undefined,
        usuario: state.usuario,
        logged: state.usuario !== null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        eventsActions: bindActionCreators(eventsActions, dispatch)
    }
}

EventosContainer = connect(mapStateToProps, mapDispatchToProps)(EventosContainer);
export default EventosContainer;