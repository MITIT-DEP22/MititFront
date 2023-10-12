import React, {FC} from 'react';
import css from "./SuperiorCard.module.scss";
import {Superior} from "../../../entities/superior";


interface ChiefCardData {
    superior: Superior;
    positionRight?: boolean;
}

const SuperiorCard: FC<ChiefCardData> = ({superior, positionRight}) => {
    return (
        <div className={css.chiefCard}>
            {positionRight ? (
                <>
                    <img src={superior.img?.href} alt=""/>
                    <div className={`${css.chiefCardText} ${css.leftAlign}`}>
                        <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                            <h4 className={css.chiefCardPosition}>{superior.position}</h4>
                        </div>
                        <h6 className={css.chiefCardRangAndName}>
                            {superior.rang} {superior.name}
                        </h6>
                        <span className={css.chiefCardDescription}>{superior.achievements}</span>
                        <span className={css.chiefCardPhone}>{superior.telephone}</span>
                    </div>
                </>
            ) : (
                <>
                    <div className={`${css.chiefCardText} ${css.rightAlign}`}>
                        <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                            <h4 className={css.chiefCardPosition}>{superior.position}</h4>
                        </div>
                        <h6 className={css.chiefCardRangAndName}>
                            {superior.rang} {superior.name}
                        </h6>
                        <span className={css.chiefCardDescription}>{superior.achievements}</span>
                        <span className={css.chiefCardPhone}>{superior.telephone}</span>
                    </div>
                    <img src={superior.img?.href} alt=""/>
                </>
            )}
        </div>
    );
};

export default SuperiorCard;