import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import nikelogo from "assets/nike.png"
import nikelogoActive from "assets/nike-active.png"
import product from "assets/product.png"
import productActive from "assets/product-active.png"
import Nike from "./NIKE/Nike"
import Category from "./Category/Category"
import {withRouter,Redirect} from "react-router-dom"
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Nike',
      hidden: false,
      fullScreen: true,

    };
  }


  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="NIKE"
            key="NIKE"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${nikelogo}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${nikelogoActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={
              this.state.selectedTab === 'NIKE'
            }

            onPress={() => {
              this.setState({
                selectedTab: 'NIKE',
              });
              this.props.history.push("/nike")
            }}
          >
           <Nike></Nike>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${product}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${productActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="商品"
            key="Product"

            selected={this.state.selectedTab === 'Product'}
            onPress={() => {
              this.setState({
                selectedTab: 'Product',
              });
              this.props.history.push("/product")
            }}
          >
            <Category></Category>
            
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}

export default withRouter(Tab);