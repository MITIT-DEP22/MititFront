import React, {FC} from 'react';

interface BranchesProps {
    branches: string[];
}

const Branches: FC<BranchesProps> = ({branches}) => {
    return (
        <div>
            <p>ФАКУЛЬТЕТ ГОТУЄ ФАХІВЦІВ В ГАЛУЗІ ЗНАНЬ:</p>
            {branches?.map(item => (
                <p>{item}</p>
            ))}
        </div>
    );
};

export default Branches;