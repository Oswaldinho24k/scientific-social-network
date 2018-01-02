import React from 'react';
import {TextField ,DatePicker, TimePicker} from 'material-ui';
import Toggle from 'material-ui/Toggle';

const toggle = {
    marginBottom: 16,
};

const block = {
    margin: '25px 50px',
    maxWidth: 200,
};

let elInput;

function onClick() {
    elInput.click();
}

const NuevoEvento = ({newEvent,onChange,onChangeDate, onChangeTime, onChangePrivate, uploadPhoto, imagePreview, onSubmit}) => {
    const {name, place, date, time, isPrivate, image, description} = newEvent;
    const {src} = imagePreview;
    return (
        <form id="nuevoevento" onSubmit={onSubmit} className="parent-new-event">
            <div className="root-nuevo-evento">
                <img
                    alt="Subir nueva imagen"
                    src={src}
                    onClick={onClick}
                    className="upload-image"
                />
                <input required name='image' ref={input => elInput = input } type="file" hidden onChange={uploadPhoto}/>
                <TextField
                    required
                    name="name"
                    value={name}
                    onChange={onChange}
                    className="textfield-event"
                    floatingLabelText="Nombre del evento"
                    hintText="TLCAN protecters"
                />
                <TextField
                    required
                    name="place"
                    value={place}
                    onChange={onChange}
                    className="textfield-event"
                    floatingLabelText="Ubicación"
                    hintText="Guadalajara Jalisco"
                />
                <TextField
                    required
                    name="description"
                    value={description}
                    onChange={onChange}
                    className="textfield-event"
                    floatingLabelText="Descripción"
                    hintText="Esto es un evento ..."
                    multiLine={true}
                    rowsMax={6}
                    style={{width:'85%'}}
                />
                <DatePicker
                    required
                    name="date"
                    value={date}
                    onChange={onChangeDate}
                    className="textfield-event"
                    floatingLabelText="Fecha"
                    autoOk={true}
                />
                <TimePicker
                    required
                    name="time"
                    value={time}
                    onChange={onChangeTime}
                    className="textfield-event"
                    floatingLabelText="Hora"
                    autoOk={true}
                />
            </div>
            <div style={block}>
                <Toggle
                    value={isPrivate}
                    label="Evento Privado"
                    style={toggle}
                    onToggle={onChangePrivate}
                />
            </div>
        </form>
    );
};

export default NuevoEvento;