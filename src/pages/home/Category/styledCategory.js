import styled from "styled-components"

export const HeaderWrap=styled.div`
  height:0.44rem;
  background:#363636;
  font-size:.15rem;
  color:black;
  display:flex;
  align-items:center;
  justify-content:center;
  ul{
    width:1.4rem;
    height:.3rem;
    display:flex;
    position:relative;
    border:1px solid #fff;
    z-index:0;
  }
  li{
    flex:1;
    line-height:.3rem;
    text-align:center;
    color:#fff;
    &.active{
      background:#fff;
      color:#363636;
    }
  }
`

export const CateWrap=styled.div`
  height:100%;
  overflow:hidden;
`