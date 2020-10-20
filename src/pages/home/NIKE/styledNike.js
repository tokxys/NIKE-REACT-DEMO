import styled from "styled-components"

export const HeaderWrap=styled.div`
  height:.44rem;
  background:#363636;
  font-size:.15rem;
  color:#fff;
  text-align:center;
  line-height:.44rem
`

export const SwiperWrap=styled.div`


  img{
    width:100%
  }
  
`
export const ClassifyWrap=styled.div`
  header{
    line-height:.5rem;
    background:#fff;
    padding-left:.2rem;
    border-bottom:1px solid gray;
  }
  .item{
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
      width:70%
    };
    span{
      margin-top:.05px;
    }
  }
`