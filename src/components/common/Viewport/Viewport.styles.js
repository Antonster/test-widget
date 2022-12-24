import styled from '@emotion/styled';
import { fakeViewportPng } from '@images';

export const Viewport = styled.div`
  position: relative;
  width: max-content;
  max-width: 100%;
  background: url(${fakeViewportPng}) no-repeat;
`;
