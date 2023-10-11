import React, {FC} from 'react';
import css from "./Branches.module.scss"
interface BranchesProps {
    branches: string[];
}

const Branches: FC<BranchesProps> = ({branches}) => {
    return (
        <div className={css.container}>
            <p>ФАКУЛЬТЕТ ГОТУЄ ФАХІВЦІВ В ГАЛУЗІ ЗНАНЬ:</p>
            <ul className={css.list}>
                {branches?.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Branches;