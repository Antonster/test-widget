import styled from '@emotion/styled';

export const OpenButton = styled.button`
  position: absolute;
  right: 44px;
  top: calc(50% - 32px);
  width: 64px;
  height: 64px;
  background: #1d1f2a;
  border: 1px solid #464851;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    opacity: 0.9;
  }
`;
