import { useParentSize } from '@hooks';
import PropTypes from 'prop-types';
import { useMemo, useRef } from 'react';

import * as S from './WidgetContainer.styles';

const WidgetContainer = ({ children }) => {
  const parentContainerRef = useRef(null);
  const size = useParentSize(parentContainerRef);
  const parentScale = useMemo(() => (size ? size.width / 1980 : 0), [size]);

  return (
    <S.WidgetContainer ref={parentContainerRef} $scale={parentScale}>
      {children}
    </S.WidgetContainer>
  );
};

WidgetContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default WidgetContainer;
