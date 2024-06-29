import styled from "styled-components";
import { TitleStyled } from "../Title";
import { Popular } from "./Popular";
import { Tags } from "./Tags";
import { Images } from "./ImagesGalery";

const GaleryContainer = styled.div`
  display: flex;
  gap: 30px;
`;
const SectionFluid = styled.section`
  flex-grow: 1;
`

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


export const Galery = ({fotos = [], aoFotoSelecionada, aoFavoritar, setTag}) => {
  return (
    <>
      <Tags  setTag={setTag}/>
      <GaleryContainer>
        <SectionFluid>
          <TitleStyled>Navegue pela galeria</TitleStyled>
          <ImagesContainer>

          {fotos.map(foto =><Images key={foto.id} foto={foto} aoZoomSolicitado={aoFotoSelecionada} aoFavoritar={aoFavoritar}/>)}
          </ImagesContainer>
        </SectionFluid>
        <Popular fotos={fotos}/>
      </GaleryContainer>
    </>
  );
};
