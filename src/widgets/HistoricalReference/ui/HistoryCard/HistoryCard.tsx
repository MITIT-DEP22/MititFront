import React, {FC} from 'react';
import css from "./HistoryCard.module.scss";


interface InfoCard {
    imgSource: string,
    value: string,
    positionRight: boolean;
}

const HistoryCard: FC<InfoCard> = ({imgSource, value, positionRight}) => {
    return (
        <div className={css.historyCard}>
            {positionRight ? (
                <>
                    <img src={imgSource} alt="" />
                    <div className={`${positionRight? css.textAlignLeft : css.textAlignLeft}`}>
                        {value}
                    </div>
                </>
            ) : (
                <>
                    <div className={`${positionRight? css.textAlignRight : css.textAlignRight}`}>
                        {value}
                    </div>
                    <img src={imgSource} alt="" />
                </>
            )}
        </div>
    );
};

export default HistoryCard;