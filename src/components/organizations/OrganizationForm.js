import React from 'react';
import {TextField} from 'material-ui';

const OrganizationForm = ({handleText, organization}) => {
    return (
        <div>
            <TextField
                fullWidth={true}
            floatingLabelFixed={true}
            floatingLabelText="Nombre"
            onChange={handleText}
            value={organization.name}
            name="name"/>
        </div>
    )
};

export default OrganizationForm;