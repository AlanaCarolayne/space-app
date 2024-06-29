import styled from "styled-components";
import { EstilosGlobais } from "./componentes/estilosGlobais";
import { Header } from "./componentes/header";
import { SideBar } from "./componentes/sideBar";
import { Banner } from "./componentes/Banner";
import { Galery } from "./componentes/Galery";
import fotos from './fotos.json'
import { useEffect, useState } from "react";
import { Modal } from "./componentes/Modal";
import { Footer } from "./componentes/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
  
`;

const Container = styled.div`
  width: 1440px;
  max-width: 97%;
  margin: 0 auto;

`;

const MainConainer = styled.main`
  display: flex;
  gap: 30px;
`;

const GaleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`
const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const aoFavoritar = (foto)=>{
    if(foto.id=== fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
  setFotosGaleria(fotosGaleria.map(fotosGaleria =>{
    return{
      ...fotosGaleria,
       favorita: fotosGaleria.id === foto.id?
       !foto.favorita : fotosGaleria.favorita
    }
  }))
  }
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  
  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosGaleria(fotosFiltradas)
  }, [filtro, tag])

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Container>
        <Header filtro={filtro} setFiltro={setFiltro}/>
        <MainConainer>
          <SideBar />
          <GaleryContent>
          <Banner />
          <Galery fotos={fotosGaleria} setTag={setTag} aoFotoSelecionada={foto => setFotoSelecionada(foto)} aoFavoritar={aoFavoritar}/>
          </GaleryContent>
        </MainConainer>
      </Container>
        <Footer />
      <Modal foto={fotoSelecionada} aoFavoritar={aoFavoritar}  aoFechar={() => setFotoSelecionada(null)}/>
    </FundoGradiente>
  );
}

export default App;
