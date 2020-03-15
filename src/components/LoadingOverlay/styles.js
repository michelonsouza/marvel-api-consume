import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
`;
