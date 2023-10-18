import React from 'react';
import {PageHead} from "../../../shared/ui/PageHead";
import {ContactsBlock} from "../../../widgets/old/ContactsBlock";

const ContactPage = () => {
    return (
        <>
            <PageHead title={"Контакти"} imgId={1}/>
            <ContactsBlock/>
        </>
    );
};

export default ContactPage