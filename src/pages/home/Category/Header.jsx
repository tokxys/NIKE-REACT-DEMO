import React, { Component } from 'react';
import {HeaderWrap} from "./styledCategory"
import {withRouter} from "react-router-dom"
class Header extends Component {
  state = {
    dir:"product/man"
  }
  handleClick=dir=>{
    return()=>{
      console.log(dir);
      this.setState({
        dir
      })
      this.props.history.push(`/${dir}`)
    }
  }

  render() {
    return (
      <HeaderWrap>
        <ul>
          <li onClick={this.handleClick("product/man")} className={this.state.dir==="product/man"?"active":""}>男子</li>
          <li onClick={this.handleClick("product/woman")} className={this.state.dir==="product/woman"?"active":""}>女子</li>
        </ul>
      </HeaderWrap>
    );
  }
}

export default withRouter(Header);