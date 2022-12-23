import styled from '@emotion/styled';

export const OpenButton = styled.button`
  position: absolute;
  top: calc(50% - ${({ $scale }) => $scale * 32}px);
  right: ${({ $scale }) => $scale * 44}px;
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
  transform: scale(${({ $scale }) => $scale});
  transform-origin: top right;

  &:hover {
    opacity: 0.9;
  }
`;
