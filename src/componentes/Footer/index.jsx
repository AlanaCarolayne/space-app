import styled from "styled-components"

const FooterStyled = styled.footer`
display: flex;
margin-top: 30px;
gap: 24px;
width: 100%;
align-items: center;
justify-content: space-between;
height: 80px;
background-color: rgba(4, 36, 79, 1);

`
const Icons = styled.div`
display: flex;
gap: 24px;
margin-left: 24px;
`
const Text = styled.h4`
color: #FFF;
font-size: 16px;
line-height: 19.5px;
font-weight: 300;
margin-right: 24px;

`
export const Footer =()=>{
return(
    <FooterStyled>
        <Icons>
            <img src="../../../../icones/facebook.png" alt="Icone do Facebook" />
            <img src="../../../../icones/twitter.png" alt="Icone do Twitter" />
            <img src="../../../../icones/instagram.png" alt="Icone do Instagram" />
        </Icons>
        <div>
            <Text>Desenvolvido por Alana.</Text>
        </div>
    </FooterStyled>
)
}