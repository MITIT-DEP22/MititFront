import React, {FC} from 'react';
interface DescriptionProps{
    value:string;
}
const Description:FC<DescriptionProps> = ({value}) => {
    return (
        <div>
            {value}
        </div>
    );
};

export default Description;