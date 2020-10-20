import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import {ClassifyWrap} from './styledNike'
import {get} from "../../../utils/http"


class Classify extends Component {
  state={
    hotList:[]
  }
  async componentDidMount() {
    let result=await get({
      url:"/api/hotcate"
    })
    console.log("hah",result)
    let data = result.map(value=>({
      key:value.id,
      title:value.title,
      img:value.img
    })
    )
    this.setState({
      hotList:data
    })

  }

  _renderItem=dataItem=>(
    <div className="item">
      <img src={dataItem.img}/>
      <span>{dataItem.title}</span>
  </div>
  )

  render() {
    return (
      <ClassifyWrap>
        <header>商品分类</header>
        <Grid data={this.state.hotList}
          hasLine={false}
          columnNum={3}
          renderItem={this._renderItem}
        />
      </ClassifyWrap>
    );
  }
}

export default Classify;