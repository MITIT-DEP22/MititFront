import React, {FC} from 'react';
import css from "./BlockContainer.module.scss"
interface BlockContainerProps{
    children:React.ReactNode;
}

const BlockContainer:FC<BlockContainerProps> = ({children}) => {
    return (
        <div className={css.container}>
            {children}
        </div>
    );
};

export default BlockContainer;