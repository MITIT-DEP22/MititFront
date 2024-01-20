import React, {FC} from 'react';
import css from "./RenderElements.module.scss"
import {TextBlock} from "../../entities/text-block";
import {AccordionElement} from "../../entities/accordion-element";
import TextBlockComponent from "../../shared/ui/TextBlockComponent/TextBlockComponent";
import InfoAccordion from "../../shared/ui/InfoAccordion/InfoAccordion";


interface RenderProps {
    elements: (TextBlock | AccordionElement)[]
}

const RenderElements: FC<RenderProps> = ({elements}) => {
    return (
        <div className={css.blockContainer}>
            {elements.map((item, index) => (
                (item.type === "TextBlock")
                    ?
                    <TextBlockComponent
                        key={`render_elements_text_block_component_${item.id}_${index}_${item.orderNumber}`}
                        textBlock={item as TextBlock}/>
                    :
                    <>
                        <InfoAccordion
                            key={`render_elements_info_accordion_component_${item.id}_${index}`}
                            item={item as AccordionElement}/>
                    </>
            ))}
        </div>
    );
};

export default RenderElements;