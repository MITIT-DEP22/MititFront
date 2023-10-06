import React, {FC} from "react";
import css from "./FooterCheckbox.module.scss"

const FooterCheckbox: FC = () => {
    return (
        <label className={css.footerCheckboxContainer}>
            <input className={css.footerCheckbox} type="checkbox" name="checkbox"/>
            <label>Я прочитав і приймаю
                <label className={css.checkboxText}> умови використання </label>
                та
                <label className={css.checkboxText}> Політику конфіденційності</label>
            </label>
        </label>
    );
};

export default FooterCheckbox;