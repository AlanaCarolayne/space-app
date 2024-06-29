import { styled } from "styled-components"
import search from '../../assets/search.png'

const ContainerStyled = styled.div`
    position: relative;
    display: inline-block;
`;

const InputStyled = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const Icon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

export const Input = ({filtro ,setFiltro}) => {
    return (
        <ContainerStyled>
            <InputStyled placeholder="O que você procura?" onChange={(evento) => { setFiltro(evento.target.value) }}/>
            <Icon src={search} alt="ícone de lupa" />
        </ContainerStyled>
    )
}

