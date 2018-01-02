import React from 'react';
import {TextField} from "material-ui";

const EditSummary = ({profile, onChange}) => {
    return (
        <div className="row-add-new-experiencia">
            <TextField
                name="nombre"
                value={profile.nombre}
                floatingLabelText="Nombre"
                hintText="Ej Miguel González"
                className="text-field"
                onChange={onChange}
            />
            <TextField
                name="cargoActual"
                value={profile.cargoActual}
                floatingLabelText="Cargo"
                hintText="Ej. Gerente"
                className="text-field"
                onChange={onChange}
            />
            <TextField
                name="titulo"
                value={profile.titulo}
                floatingLabelText="Titulo"
                hintText="Ej. Lic en Ciencias Computacionales"
                className="text-field"
                onChange={onChange}
            />
            <TextField
                name="breveDescripcion"
                value={profile.breveDescripcion}
                floatingLabelText="Ubicación"
                hintText="Ej. Soy ..."
                className="text-field"
                onChange={onChange}
            />
        </div>
    );
};

export default EditSummary;