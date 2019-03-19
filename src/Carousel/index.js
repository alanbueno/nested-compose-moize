import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'

const statusFormatter = (current, total) => {
  return current && total && `${current} de ${total}`
}

const CustomCarousel = ({ children }) => (
  <Carousel
    showArrows
    infiniteLoop
    autoPlay
    showStatus
    useKeyboardArrows
    centerMode={false}
    showIndicators={false}
    showThumbs={false}
    statusFormatter={statusFormatter}
  >
    {children}
  </Carousel>
)
export default CustomCarousel

// className?: string;
// showArrows?: boolean;
// showStatus?: boolean;
// showIndicators?: boolean;
// showThumbs?: boolean;
// infiniteLoop?: boolean;
// selectedItem?: number;
// axis?: Axis;
// onChange?: CarouselCallback;
// onClickItem?: CarouselCallback;
// onClickThumb?: CarouselCallback;
// width?: string;
// useKeyboardArrows?: boolean;
// autoPlay?: boolean;
// stopOnHover?: boolean;
// interval?: number;
// transitionTime?: number;
// swipeScrollTolerance?: number;
// dynamicHeight?: boolean;
// emulateTouch?: boolean;
// statusFormatter?: StatusFormatter;
// children?: React.ReactNode;
// centerMode?:boolean;
// centerSlidePercentage?:number;
