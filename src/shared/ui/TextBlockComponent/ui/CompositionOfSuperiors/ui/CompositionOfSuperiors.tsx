import {observer} from "mobx-react";
import SuperiorCard from './SuperiorCard/SuperiorCard'
import css from "./CompositionOfSuperiors.module.scss"
import {Superior} from "entities/superior";
import {FC} from "react";


interface SuperiorsCompositionProps {
    superior: Superior
    id?: number;
}

export const CompositionOfSuperiors: FC<SuperiorsCompositionProps> = ({superior, id}) => {
    return (
        <div className={css.compositionCards}>
            {superior.imgLeft?
                <SuperiorCard key={`superior-card_${id}`} superior={superior} positionRight={false}/>
                :
                <SuperiorCard key={`superior-card_${id}`} superior={superior} positionRight={true}/>
            }
        </div>
    )
}