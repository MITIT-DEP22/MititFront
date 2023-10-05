import React, {FC} from 'react';
import css from "./AdditionalLink.module.scss"

interface AddLinkProps {
    title: string;
    img: string;
    link: string;
}

const AdditionalLink: FC<AddLinkProps> = ({title, img, link}) => {
    return (
        <a className={css.additionalLink} href={link}>
            <img className={css.img} src={img} alt=""/>
            <pre className={css.title}>{title}</pre>
        </a>
    );
};

export default AdditionalLink;