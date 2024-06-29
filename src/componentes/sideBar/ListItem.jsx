import styled from "styled-components";

const LiStyled = styled.li`
  text-decoration: none;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${props => props.$ativo? 'rgba(123, 120, 229, 1)' : 'rgba(217, 217, 217, 1)'};
  font-family: ${props => props.$ativo? 'GandhiSans-Bold':'GandhiSans-Regular'};
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const ListItem = ({ children, iconeAtivo, icone, ativo = false }) => {
  return (
    <LiStyled $ativo={ativo}>
      <img src={ativo ? iconeAtivo : icone} alt={children} />
      {children}
    </LiStyled>
  );
};
