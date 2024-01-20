import React, {FC} from 'react';
import css from "./SectionTitle.module.scss";
import HTMLReactParser from "html-react-parser";

interface SectionTitleProps {
    title: string;
    margin?: string;
    id?: number;
}

const SectionTitle: FC<SectionTitleProps> = ({title, margin, id}) => {
    return (
        <>
            <div style={{margin: margin}} className={css.titleContainer}>
                <p className={css.title}>
                    {title && HTMLReactParser(String(title))}
                </p>
            </div>
        </>
    );
};


export default SectionTitle;