import { useParentSize } from '@hooks';
import { logoSvg } from '@images';
import { useMemo, useRef } from 'react';

import * as S from './OpenButton.styles';

const OpenButton = () => {
  const parentContainerRef = useRef(null);
  const size = useParentSize(parentContainerRef);
  const parentScale = useMemo(() => (size ? size.width / 1980 : 1), [size]);

  return (
    <S.OpenButton ref={parentContainerRef} $scale={parentScale}>
      <img src={logoSvg} alt="logo" />
    </S.OpenButton>
  );
};

export default OpenButton;
