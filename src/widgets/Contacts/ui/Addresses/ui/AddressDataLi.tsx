import React, {FC} from 'react';
import css from "./AddressData.module.scss"


interface AddressDataLiProps {
    emails: any[];
    emailTitle: string;
}

const AddressDataLi:FC<AddressDataLiProps> = ({emails,emailTitle}) => {
    return (
        <li>
            <p className={css.emailTitle}>Електронна пошта:</p>
            <ul>
                {emails.map(item => (
                    <li className={css.emails}>{item}</li>
                ))}
            </ul>
        </li>
    );
};

export default AddressDataLi;