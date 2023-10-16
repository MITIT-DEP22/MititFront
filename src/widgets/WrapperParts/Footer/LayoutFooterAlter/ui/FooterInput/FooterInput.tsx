import React, {FC} from "react";
import css from "./FooterInput.module.scss"

const FooterInput: FC = () => {
    return (
        <div className={css.inputContainer}>
            <input type="email" className={css.inputMain} placeholder="Email" name="email" id='email' required />
            <label htmlFor="email" className={css.inputLabel}>Email</label>
        </div>
    );
};

export default FooterInput;