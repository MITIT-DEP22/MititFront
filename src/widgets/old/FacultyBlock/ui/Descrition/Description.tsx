import React, {FC} from 'react';
import css from "./Description.module.scss"
import HTMLReactParser from "html-react-parser";

interface DescriptionProps {
    value: string;
}

const Description: FC<DescriptionProps> = ({value}) => {
    return (
        <div className={css.container}>
            {value && HTMLReactParser(value)}
        </div>
    );
};

export default Description;