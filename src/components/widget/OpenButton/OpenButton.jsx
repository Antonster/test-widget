import { logoSvg } from '@images';

import * as S from './OpenButton.styles';

const OpenButton = () => (
  <S.OpenButton>
    <img src={logoSvg} alt="logo" />
  </S.OpenButton>
);

export default OpenButton;
