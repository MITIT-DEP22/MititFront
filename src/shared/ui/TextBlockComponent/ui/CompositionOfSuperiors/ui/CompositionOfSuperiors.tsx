import {observer} from "mobx-react";
import SuperiorCard from './SuperiorCard/SuperiorCard'
import css from "./CompositionOfSuperiors.module.scss"
import {Superior} from "entities/superior";
import {FC} from "react";


interface SuperiorsCompositionProps {
    superiors: Superior[]
    id?:number;
}

export const CompositionOfSuperiors: FC<SuperiorsCompositionProps> = observer(({superiors,id}) => {
    return (
        <div className={css.compositionCards}>
            {superiors?.map((item, index) => (
                index % 2 ?
                    <SuperiorCard key={`superior-card_${index}_${id}`} superior={item} positionRight={false}/>
                    :
                    <SuperiorCard key={`superior-card_${index}_${id}`} superior={item} positionRight={true}/>
            ))}
        </div>
    )
})