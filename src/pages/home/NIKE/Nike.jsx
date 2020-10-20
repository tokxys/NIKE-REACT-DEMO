import React, { Component } from 'react';
import Header from './Header'
import Swiper from './Swiper'
import Search from '@/search/Search'
import Classify from './Classify'
class Nike extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Swiper/>
        <Search/>
        <Classify/>
      </div>
    );
  }
}

export default Nike;