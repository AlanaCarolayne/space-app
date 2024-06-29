import styled from "styled-components";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '400px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
           padding-bottom: 5px;
           font-size: 20px;
        }
        h4 {
            flex-grow: 1;
            font-size: 16px;
        }
        h3,
        h4 {
            margin: 0;
            font-weight: 300;
            letter-spacing: .7px;
        }
    }
    & button{
      background-color: transparent;
      border: none;
      margin-right: 10px;
      cursor: pointer;
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Images = ({ foto, expand = false, aoZoomSolicitado, aoFavoritar}) => {
  let iconFav = foto.favorita? './../../../icones/like.png' : './../../../icones/favorite_outline.png'
  return (
    <Figure $expandida={expand} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Footer>
          <h4>{foto.fonte}</h4>
          <div>
            <button>
              <img src={iconFav} onClick={()=>aoFavoritar(foto)}></img>
            </button>
           {!expand && <  button aria-hidden={expand} onClick={()=>aoZoomSolicitado(foto)}>
              <img src="../../../../icones/open_in_full.png"></img>
            </button>}
          </div>
        </Footer>
      </figcaption>
    </Figure>
  );
};
