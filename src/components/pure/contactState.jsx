import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactState = ({contact}) => {
    return (
        <div>
            <p>Nombre: { contact.firstName }</p>
            <p>Nombre: { contact.lastName }</p>
            <p>Nombre: { contact.email }</p>
            <p>Nombre: { contact.connected ? 'CONECTADO' : 'DESCONECTADO'}</p>
        </div>
    );
};


ContactState.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactState;
