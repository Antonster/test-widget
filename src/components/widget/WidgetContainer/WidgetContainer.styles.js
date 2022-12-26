import styled from '@emotion/styled';

export const WidgetContainer = styled.div`
  position: absolute;
  top: ${({ $scale }) => $scale * 98}px;
  right: ${({ $scale }) => $scale * 152}px;
  width: 476px;
  height: 884px;
  background: #303038;
  border-radius: 8px;
  transform: scale(${({ $scale }) => $scale});
  transform-origin: top right;
`;
