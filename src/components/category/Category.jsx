import React, { Component } from 'react';
import {CateWrap} from "./styledCategory"
import {get} from "../../utils/http"

class Category extends Component {
  state={
    datasource:null,
    current:"",
    defaultItem:""
  }

  static getDerivedStateFromProps(props, state) {
    if(props.defaultItem!==state.defaultItem){
      return{
        ...state,
        defaultItem:props.defaultItem,
        current:props.defaultItem
      }
    }
    return null;
  }
  

  async componentDidMount(){
    let result = await get({
      url:"/api/category"
    })
    console.log(result)
    this.setState({
      datasource:result.data
    })
  }
  handleItem=(item)=>{
    return ()=>{
      this.setState({
        current:item
      })
    }
  }
  render() {
    let {type} = this.props
    let data = this.state.datasource?Object.keys(this.state.datasource[type]):[]
    let contents=this.state.datasource? this.state.datasource[type][this.state.current]:[]
    console.log(contents)
    return (
      <CateWrap>
        <div>
          <ul>
            {
              data.map(value=>{
                return(
                  this.state.current===value?
                <li key={value} className="active"><span>{value}</span></li>:<li key={value} onClick={this.handleItem(value)}>{value}</li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <ul>
            {
              contents.map((value)=>{
                return(
                <li key={value}>{value}</li>
                )
              })
            }
          </ul>
        </div>
      </CateWrap>
    );
  }
}

export default Category;