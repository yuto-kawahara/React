import styled from "styled-components";
// styled-componentsを使用した適用方法
export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components - </STitle>
      <SBtn>FIGHT</SBtn>
    </SContainer>
  );
};

// コードとしてはすっきり書くことができて見やすいが、
// スタイルを宛てたコンポーネントなのか子コンポーネントなのかがわかりづらい
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

// Styled Componentsの場合、疑似要素も反映される
const SBtn = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
