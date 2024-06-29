import styled from 'styled-components'

const BannerStyled = styled.div`
border-radius: 20px;
margin: 0;
max-width: 100%;
min-height: 328px;
display: flex;
align-items: center;
background-image: url('../../../images/banner.png');
background-repeat: no-repeat;
background-size: cover;
position: relative;
flex-grow: 1;
`

const BannerTextStyled = styled.h5`
text-align: start;
color: rgba(255, 255, 255, 1);
line-height: 48px;
font-size: 40px;
word-wrap: break-word;
padding: 50px;
font-weight: 100;
margin-inline-end: 600px;
`


export const Banner = () =>{
    return (
        <BannerStyled>
            <BannerTextStyled>A galeria mais completa de fotos do espaço!</BannerTextStyled>
        </BannerStyled>
    )
}