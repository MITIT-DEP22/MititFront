import React, {FC} from 'react';


interface SpecialitiesBlock {
    specialities: string[];
}

const Specialities: FC<SpecialitiesBlock> = ({specialities}) => {
    return (
        <div>
            <p>ЗА СПЕЦІАЛЬНІСТЮ:</p>
            {specialities?.map(item => (
                <p>{item}</p>
            ))}
        </div>
    );
};

export default Specialities;