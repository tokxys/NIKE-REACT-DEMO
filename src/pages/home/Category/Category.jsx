import React, { Component } from 'react'
import Header from "./Header.jsx"
import Category1 from "@/category/Category"
import Own from "@/category/Category"
import {CateWrap} from "./styledCategory"
import Search from "@/search/Search"
import {Route,Switch,Redirect} from "react-router-dom"
class Category extends Component {
  render() {
    return (
      <CateWrap>
        <Header/>
        <Search/>
        <Switch>
          <Route path="/product/man" render={()=>(<Category1 defaultItem="男子热门" type="man"/>)}></Route>
          <Route path="/product/woman" render={()=>(<Own  defaultItem="女子热门" type="woman"/>)}></Route>
          <Redirect from="/product" to="/product/man"/>
        </Switch>
        
        
      </CateWrap>
    );
  }
}

export default Category;