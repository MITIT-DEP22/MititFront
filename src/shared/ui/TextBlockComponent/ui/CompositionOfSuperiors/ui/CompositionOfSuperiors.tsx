import {observer} from "mobx-react";
import SuperiorCard from '../../SuperiorCard/SuperiorCard'
import css from "./CompositionOfSuperiors.module.scss"
import {Superior} from "entities/superior";
import {FC} from "react";


interface SuperiorsCompositionProps {
    superiors: Superior[]
}

export const CompositionOfSuperiors: FC<SuperiorsCompositionProps> = observer(({superiors}) => {
    return (
        <div className={css.compositionCards}>
            {superiors?.map((item, index) => (
                index % 2 ?
                    <SuperiorCard key={index} superior={item} positionRight={false}/>
                    :
                    <SuperiorCard key={index} superior={item} positionRight={true}/>
            ))}
        </div>
    )
})