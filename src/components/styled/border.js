import styled from "styled-components"
const border = (Comp)=>{
  const BorderComp=styled(Comp)`
  border-width:${props=>props.width || "2px"};
  border-color:${props=>props.color || "#ccc"};
  border-style:${props=>props.style || "solid"};
  border-radius:${props=>props.radius || 0};
  `
  return BorderComp
}
export default border