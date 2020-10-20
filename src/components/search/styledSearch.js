import styled from "styled-components"
import border from "../styled/border"
export const SearchWrap=border(styled.div`
    padding:.1rem .15rem;
    div{
      border:0px solid #000;
      display:flex;
      justify-content:center;
      align-items:center;
      height:.4rem;
      color:#666;
      background:#fff;
      img{
        width:.15rem;
        height:.15rem;
        margin-right:.15rem;
      };
      font-size:0.1rem
    }
  `)
