import React, {FC, useEffect, useRef, useState} from 'react';
import {Image} from "../../../../entities/image";
import {ImageComponent} from "../../../../features/ImageComponent";
import css from "./Slider.module.scss"
import {observer} from "mobx-react";

interface SliderProps {
    images: Image[];
}

const Slider: FC<SliderProps> = observer(({images}) => {
    const [currentImage, setCurrentImage] = useState<Image>({} as Image)
    const [onChange, setOnChange] = useState(false)
    useEffect(() => {
        images && setCurrentImage(images[0])
    }, [images]);

    useEffect(() => {
        scrollOnActive()
    }, [currentImage]);

    const animate = () => {
        setOnChange(true)
        setTimeout(() => {
            setOnChange(false)
        }, 400)
    }

    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    const handleMouseDown = (e: any) => {
        setDragging(true);
        // @ts-ignore
        setStartX(e.pageX - containerRef.current.offsetLeft);
        // @ts-ignore
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (e: any) => {
        if (!dragging) return;
        // @ts-ignore
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX;
        // @ts-ignore
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollOnActive = () => {
        if (document.getElementById("preview-container")) {
            // @ts-ignore
            document.getElementById("preview-container").scrollTo({
                left: 150 * images?.indexOf(currentImage),
                behavior: "smooth"
            })
        }
    }

    const prevImg = () => {
        animate()
        setTimeout(() => {
            setCurrentImage(images[
                (images.indexOf(currentImage) - 1) < 0 ? images.length - 1 : (images.indexOf(currentImage) - 1)
                ])
        }, 300)
    }

    const nextImg = () => {
        animate()
        setTimeout(() => {
            setCurrentImage(images[
                (images.indexOf(currentImage) + 1) === images.length ? 0 : (images.indexOf(currentImage) + 1)
                ])
        }, 300)
    }

    return (
        <div className={css.container}>
            <div className={css.sliderContainer}>
                <button className={css.leftArrow} onClick={prevImg}>
                    <i className="bi bi-caret-left"></i>
                </button>

                <ImageComponent className={`${css.currentImg} ${onChange && css.currentImg_change}`}
                                imgId={currentImage?.id}/>

                <button className={css.rightArrow} onClick={nextImg}>
                    <i className="bi bi-caret-right"></i>
                </button>
            </div>
            <div ref={containerRef}
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}
                 onMouseMove={handleMouseMove}
                 id={"preview-container"} className={css.previewContainer}>
                {
                    images?.map(item => (
                        <button onClick={() => {
                            animate()
                            setCurrentImage(item)
                        }} className={css.imgBtn}>
                            <ImageComponent key={`slider-img-news-page_${item.id}`}
                                            className={`${css.previewElement} ${item?.id === currentImage?.id && css.imgBtn_active}`}
                                            imgId={item?.id}/>
                        </button>
                    ))
                }
            </div>
        </div>
    );
});

export default Slider;