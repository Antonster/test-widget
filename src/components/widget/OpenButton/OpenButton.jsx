import { useParentSize } from '@hooks';
import { logoSvg } from '@images';
import PropTypes from 'prop-types';
import { useMemo, useRef } from 'react';

import * as S from './OpenButton.styles';

const OpenButton = ({ onOpen }) => {
  const parentContainerRef = useRef(null);
  const size = useParentSize(parentContainerRef);
  const parentScale = useMemo(() => (size ? size.width / 1920 : 0), [size]);

  return (
    <S.OpenButton ref={parentContainerRef} $scale={parentScale} onClick={onOpen}>
      <img src={logoSvg} alt="logo" />
    </S.OpenButton>
  );
};

OpenButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default OpenButton;
