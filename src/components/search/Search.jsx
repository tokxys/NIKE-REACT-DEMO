import React, { Component } from 'react';
import search from "assets/search.png"
import {SearchWrap} from "./styledSearch"
class Search extends Component {
  render() {
    return (
      <SearchWrap width="0">
        <div>
          <img src={search}/>
          <span>欢 迎 加 入 N I K E</span>
        </div>
      </SearchWrap>
    );
  }
}

export default Search;