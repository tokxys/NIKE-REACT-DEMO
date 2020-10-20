import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import nikelogo from "assets/nike.png"
import nikelogoActive from "assets/nike-active.png"
import product from "assets/product.png"
import productActive from "assets/product-active.png"
import Nike from "./NIKE/Nike"

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
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
            selected={this.state.selectedTab === 'NIKE'}

            onPress={() => {
              this.setState({
                selectedTab: 'NIKE',
              });
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
            }}
            data-seed="logId1"
          >
            111
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"

            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >

          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >

          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Tab;