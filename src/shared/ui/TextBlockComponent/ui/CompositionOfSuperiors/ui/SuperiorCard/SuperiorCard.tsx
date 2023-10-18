import React, {FC} from 'react';
import css from "./SuperiorCard.module.scss";
import {Superior} from "../../../../../../../entities/superior";
import {ImageComponent} from "../../../../../../../features/ImageComponent";
import HTMLReactParser from "html-react-parser";


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
                    <div className={css.chiefCardTextContainer}>
                        <div className={`${css.chiefCardText} ${css.leftAlign}`}>
                            <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                                <h4 className={css.chiefCardPosition}>{HTMLReactParser(superior.position)}</h4>
                            </div>
                            <h6 className={css.chiefCardRangAndName}>
                                {superior.militaryRank} {superior.fullName}
                            </h6>
                            {superior.achievements?.map(item => (
                                <p>{item}</p>
                            ))
                            }
                            <span className={css.chiefCardDescription}></span>
                            <span className={css.chiefCardPhone}>{superior.phoneNumber}</span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={`${css.chiefCardTextContainer}`}>
                        <div className={css.chiefCardTextAbout}>
                            {superior.textContent}
                        </div>
                        <div className={`${css.chiefCardText} ${css.rightAlign}`}>
                            <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                                <h4 className={css.chiefCardPosition}>{HTMLReactParser(superior.position)}</h4>
                            </div>
                            <h6 className={css.chiefCardRangAndName}>
                                {superior.militaryRank} {superior.fullName}
                            </h6>
                            {superior.achievements?.map(item => (
                                <p>{item}</p>
                            ))
                            }
                            <span className={css.chiefCardDescription}></span>
                            <span className={css.chiefCardPhone}>{superior.phoneNumber}</span>
                        </div>
                    </div>
                    <ImageComponent imgId={superior.image.id}/>
                </>
            )}
        </div>
    );
};

export default SuperiorCard;