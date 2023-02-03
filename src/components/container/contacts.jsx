import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactState from '../pure/contactState';

const Contacts = () => {

    const contactUser = new Contact('Juan', 'Perez', 'juan123@gmail.com', true);

    return (
        <div>
            <h1>Usuarios</h1>

            <ContactState contact={contactUser}></ContactState>
        </div>
    );
}

export default Contacts;


