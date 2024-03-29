import React, {FC} from 'react';
import css from "./SuperiorCard.module.scss";
import {Superior} from "entities/superior";
import {ImageComponent} from "features/ImageComponent";
import HTMLReactParser from "html-react-parser";

interface ChiefCardData {
    superior: Superior;
    positionRight?: boolean;
    id?: number;
}

const SuperiorCard: FC<ChiefCardData> = ({superior, positionRight, id}) => {
    return (
        <div className={css.chiefCard}>
            {positionRight ? (
                <>
                    <ImageComponent className={css.img} imgId={superior.image.id}/>
                    <div className={css.chiefCardTextContainer}>
                        <div className={`${css.chiefCardTextAbout} ${css.leftAlign}`}>
                            {superior.textContent &&
                                <p key={`superior_text-about_${id}`}>{HTMLReactParser(superior.textContent)}</p>
                            }
                        </div>
                        <div className={`${css.chiefCardText} ${css.leftAlign}`}>
                            <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                                <h4 className={css.chiefCardPosition}>{HTMLReactParser(superior.position)}</h4>
                            </div>
                            <h6 className={css.chiefCardRangAndName}>
                                {HTMLReactParser(superior.militaryRank)} {HTMLReactParser(superior.fullName)}
                            </h6>
                            {superior.achievements?.map((item, index) => (
                                <p key={`superior-card_${id}_achievement_${index}`}>{item}</p>
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
                        <div className={`${css.chiefCardTextAbout} ${css.rightAlign}`}>
                            {superior.textContent &&
                                <p key={`superior_text-about_${id}`}>{HTMLReactParser(superior.textContent)}</p>
                            }
                        </div>
                        <div className={`${css.chiefCardText} ${css.rightAlign}`}>
                            <div className={`${positionRight ? css.borderLeft : css.borderRight}`}>
                                <h4 className={css.chiefCardPosition}>{HTMLReactParser(superior.position)}</h4>
                            </div>
                            <h6 className={css.chiefCardRangAndName}>
                                {HTMLReactParser(superior.militaryRank)} {HTMLReactParser(superior.fullName)}
                            </h6>
                            {superior.achievements?.map((item, index) => (
                                <p key={`superior-card_${id}_achievement_${index}`}>{item}</p>
                            ))
                            }
                            <span className={css.chiefCardDescription}></span>
                            <span className={css.chiefCardPhone}>{superior.phoneNumber}</span>
                        </div>
                    </div>
                    <ImageComponent className={css.img} imgId={superior.image.id}/>
                </>
            )}
        </div>
    );
};

export default SuperiorCard;