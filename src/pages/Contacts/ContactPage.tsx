import React from 'react';
import {PageHead} from "widgets/PageHead";
import {Contacts} from "widgets/Contacts";

 const ContactPage = () => {
    return (
        <>
            <PageHead title={"Контакти"} imgId={1}/>
            <Contacts/>
        </>
    );
};

export default ContactPage