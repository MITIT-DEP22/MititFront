import {observer} from "mobx-react";
import css from "./HistoricalReference.module.scss";
import HistoryCard from "./HistoryCard/HistoryCard";
import {
    firstHistoryCardItems,
    secondHistoryCardItems,
    thirdHistoryCardItems,
    firstTextBlock,
    firstMiddleHistoryBlock,
    secondMiddleHistoryBlock,
    thirdMiddleHistoryBlock,
    additionHistory, secondAdditionHistory
} from '../model/model'
import MiddleHistoryBlock from "./MiddleHistoryBlock/MiddleHistoryBlock";
import DecreeBlock from "./DecreeBlock/DecreeBlock";
import AdditionForHistory from "./AdditionForHistory/AdditionForHistory";


export const HistoricalReference = observer(() => {
    return (
        <div className={css.historyContainer}>
            <DecreeBlock array={firstTextBlock}/>
            {firstHistoryCardItems.map((item, index) => (
                index % 2 ?
                    <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={false}/>
                    :
                    <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={true}/>
            ))}
            <MiddleHistoryBlock value={firstMiddleHistoryBlock}/>
            {secondHistoryCardItems.map((item, index) => (
                index % 2 ?
                    <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={false}/>
                    :
                    <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={true}/>
            ))}
            <MiddleHistoryBlock value={secondMiddleHistoryBlock}/>
            {additionHistory.map((value) => (
                <AdditionForHistory value={value}/>
            ))}
            {thirdHistoryCardItems.map((item, index) => (
                index % 2 ?
                    <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={true}/>
                    :
                    <HistoryCard key={index} imgSource={item.imageSrc} value={item.text} positionRight={false}/>
            ))}
            {secondAdditionHistory.map((value) => (
                <AdditionForHistory value={value}/>
            ))}
            <MiddleHistoryBlock value={thirdMiddleHistoryBlock}/>
        </div>
    )
})