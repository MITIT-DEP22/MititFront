import React, {FC} from 'react';
import css from "./ChiefsCard.module.scss";
import {IChiefs} from "../../model/model";


interface ChiefCardData {
    data: IChiefs;
    positionRight: boolean;
}

const ChiefsCard: FC<ChiefCardData> = ({data, positionRight}) => {
    return (
        <div className={css.chiefCard}>
            {positionRight ? (
                <>
                    <img src={data.imageSrc} alt="" />
                    <div className={`${css.chiefCardText} ${css.leftAlign}`}>
                        <div className={`${positionRight? css.borderLeft : css.borderRight}`}>
                            <h4 className={css.chiefCardPosition}>{data.position}</h4>
                        </div>
                        <h6 style={{ paddingLeft: 10 }} className={css.chiefCardRangAndName}>
                            {data.rang} {data.name}
                        </h6>
                        <span className={css.chiefCardDescription}>{data.description}</span>
                        <span className={css.chiefCardPhone}>{data.telephone}</span>
                    </div>
                </>
            ) : (
                <>
                    <div className={`${css.chiefCardText} ${css.rightAlign}`}>
                        <div className={`${positionRight? css.borderLeft : css.borderRight}`}>
                            <h4 className={css.chiefCardPosition}>{data.position}</h4>
                        </div>
                        <h6 style={{ paddingRight: 10 }} className={css.chiefCardRangAndName}>
                            {data.rang} {data.name}
                        </h6>
                        <span className={css.chiefCardDescription}>{data.description}</span>
                        <span className={css.chiefCardPhone}>{data.telephone}</span>
                    </div>
                    <img src={data.imageSrc} alt="" />
                </>
            )}
        </div>
    );
};

export default ChiefsCard;