import React, {FC} from 'react';
import css from "./SuperiorCard.module.scss";
import {Superior} from "entities/superior";
import {ImageComponent} from "features/ImageComponent";


interface ChiefCardData {
    superior: Superior;
    positionRight?: boolean;
}

const SuperiorCard: FC<ChiefCardData> = ({superior, positionRight}) => {
    return (
        <div className={css.chiefCard}>
            {positionRight ? (
                <>
                    <ImageComponent imgId={superior?.image?.id}/>
                    <div className={`${css.chiefCardText} ${css.leftAlign}`}>
                        <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                            <h4 className={css.chiefCardPosition}>{superior.position}</h4>
                        </div>
                        <h6 className={css.chiefCardRangAndName}>
                            {superior.militaryRank} {superior.fullName}
                        </h6>
                        {superior.achievements?.map(item => (
                            <span>{item}</span>
                        ))
                        }
                        <span className={css.chiefCardDescription}></span>
                        <span className={css.chiefCardPhone}>{superior.phoneNumber}</span>
                    </div>
                </>
            ) : (
                <>
                    <div className={`${css.chiefCardText} ${css.rightAlign}`}>
                        <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                            <h4 className={css.chiefCardPosition}>{superior.position}</h4>
                        </div>
                        <h6 className={css.chiefCardRangAndName}>
                            {superior.militaryRank} {superior.fullName}
                        </h6>
                        <span className={css.chiefCardDescription}>{superior.achievements}</span>
                        <span className={css.chiefCardPhone}>{superior.phoneNumber}</span>
                    </div>
                    <ImageComponent imgId={superior.image.id}/>
                </>
            )}
        </div>
    );
};

export default SuperiorCard;