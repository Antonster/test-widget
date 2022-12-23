import { useParentSize } from '@hooks';
import { useMemo, useRef } from 'react';

import * as S from './WidgetContainer.styles';

const WidgetContainer = () => {
  const parentContainerRef = useRef(null);
  const size = useParentSize(parentContainerRef);
  const parentScale = useMemo(() => (size ? size.width / 1980 : 1), [size]);

  return <S.WidgetContainer ref={parentContainerRef} $scale={parentScale} />;
};

export default WidgetContainer;
