import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import swiper1 from "assets/nike-just-do-it-1.jpg"
import swiper2 from "assets/nike-just-do-it-2.jpg"
import swiper3 from "assets/nike-just-do-it-3.jpg"
import {SwiperWrap} from "./styledNike"
class Swiper extends Component {
  render() {
    return (
      <SwiperWrap>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}>
            <img src={swiper1} />
            <img src={swiper2} />
            <img src={swiper3} />
        </Carousel>
      </SwiperWrap>
    );
  }
}

export default Swiper;