import React, {FC} from 'react';
import css from "./Skeleton.module.scss"

interface SkeletonProps extends React.HTMLProps<HTMLElement> {
}

const Skeleton: FC<SkeletonProps> = ({className}) => {
    return (
        <div className={`${css.skeleton}`}>
            <div className={className}></div>
        </div>
    );
};

export default Skeleton;