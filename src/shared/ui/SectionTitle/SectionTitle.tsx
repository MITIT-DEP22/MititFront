import React, {FC} from 'react';
import css from "./SectionTitle.module.scss";
import HTMLReactParser from "html-react-parser";

interface SectionTitleProps {
    title: string;
    margin?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({title, margin}) => {
    return (
        <div style={{margin: margin}} className={css.titleContainer}>
            <p className={css.title}>
                {title && HTMLReactParser(title)}
            </p>
        </div>
    );
};

export default SectionTitle;