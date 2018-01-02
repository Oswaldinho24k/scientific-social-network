import React from 'react';
import {DatePicker, TextField} from "material-ui";

const AddNewExperienciaForm = ({experiencia,onChange,onFechaInicioChange, onFechaFinalChange}) => {
    return (
        <div>
            <div className="row-add-new-experiencia">
                <TextField
                    name="cargo"
                    value={experiencia.cargo}
                    floatingLabelText="Cargo"
                    hintText="Ej. Gerente"
                    className="text-field"
                    onChange={onChange}
                />
                <TextField
                    name="empresa"
                    value={experiencia.empresa}
                    floatingLabelText="Empresa"
                    hintText="Ej. Fixter"
                    className="text-field"
                    onChange={onChange}
                />
                <TextField
                    name="ubicacion"
                    value={experiencia.ubicacion}
                    floatingLabelText="Ubicación"
                    hintText="Ej. Pachuca de Soto, Hgo"
                    className="text-field"
                    onChange={onChange}
                />
            </div>
            <div className="row-add-new-experiencia">
                <DatePicker
                    name="fechaInicio"
                    value={experiencia.fechaInicio}
                    floatingLabelText="Desde"
                    autoOk={true}
                    className="date-picker"
                    onChange={onFechaInicioChange}
                />
                <DatePicker
                    name="fechaFinal"
                    value={experiencia.fechaFinal}
                    floatingLabelText="Hasta"
                    autoOk={true}
                    className="date-picker"
                    onChange={onFechaFinalChange}
                />
            </div>
            <div className="row-add-new-experiencia">
                <TextField
                    name="descripcion"
                    value={experiencia.descripcion}
                    floatingLabelText="Descripción"
                    hintText="Desarrollador full stack "
                    className="text-field"
                    onChange={onChange}
                />
            </div>


        </div>
    );
};

export default AddNewExperienciaForm;