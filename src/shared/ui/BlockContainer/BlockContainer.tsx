import React, {FC} from 'react';
import css from "./BlockContainer.module.scss"
interface BlockContainerProps extends React.HTMLProps<HTMLElement> {
    children?:React.ReactNode;
}

const BlockContainer:FC<BlockContainerProps> = ({children, className}) => {
    return (
        <div className={`${className ? className : css.container}`}>
            {children}
        </div>
    );
};

export default BlockContainer;