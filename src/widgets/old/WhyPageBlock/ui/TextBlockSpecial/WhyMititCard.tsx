import React, {FC} from 'react';
import css from "./TextBlockSpecial.module.scss"
import {WhyMITIT} from "../../../../../entities/why_mitit";
import ImagesContainer from "../../../../../shared/ui/TextBlockComponent/ui/ImagesContainer/ImagesContainer";

interface Props {
    why: WhyMITIT;
}

const WhyMititCard: FC<Props> = ({why}) => {
    return (
        <div className={css.container}>
            <p className={css.titleText}>
                <span className={css.title}>{why.title}</span>
                {why.titleText}
            </p>
            {why.content &&
                why.content.map(item => (
                    <p className={css.contentItem}>
                        {item}
                    </p>
                ))
            }
            <p className={css.finalText}>{why.finalText}</p>
            {
                why.images &&
                <ImagesContainer images={why.images}/>
            }
        </div>
    );
};

export default WhyMititCard;