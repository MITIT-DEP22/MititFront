import React, {FC} from 'react';
import css from "./SectionTitle.module.scss";

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({title}) => {
    return (
        <div className={css.titleContainer}>
            <p className={css.title}>
                {title}
            </p>
        </div>
    );
};

export default SectionTitle;