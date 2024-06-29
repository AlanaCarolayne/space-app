import styled from "styled-components"

export const TitleStyled = styled.h2`
color:rgba(123, 120, 229, 1) ;
font-size: 32px;
line-height: 38.4px;
text-align: ${props => props.alinhamento ? props.alinhamento : "left"};
`

