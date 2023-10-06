import {observer} from "mobx-react";
import ChiefsCard from './ChiefsCard/ChiefsCard'
import {chiefsCardItems} from "../model/model";
import css from "./CompositionOfChiefs.module.scss"

export const CompositionOfChiefs = observer(() => {
    return (
        <div className={css.compositionCards}>
            {chiefsCardItems.map((item, index) => (
                index % 2 ?
                    <ChiefsCard key={index} data={item} positionRight={false}/>
                    :
                    <ChiefsCard key={index} data={item} positionRight={true}/>
            ))}
        </div>
    )
})