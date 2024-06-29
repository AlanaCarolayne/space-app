import styled from "styled-components";
import { Images } from "../Galery/ImagesGalery";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.445);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Dialog = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: transparent;
  border: none;
  width: 1156px;
  height: 740px;
  padding: 0;
  max-width: 100%;
  display: flex;
  justify-content: center;
  form {
    button {
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 24px;
      position: relative;
      top: 20px;
      right: 60px;
      cursor: pointer;
    }
  }
`;

export const Modal = ({ foto, aoFavoritar, aoFechar }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <Dialog open={!!foto} onClose={aoFechar}>
            <Images foto={foto} expand={true} aoFavoritar={aoFavoritar}/>
            <form method="dialog">
              <button formMethod="dialog">X</button>
            </form>
          </Dialog>
        </>
      )}
    </>
  );
};
