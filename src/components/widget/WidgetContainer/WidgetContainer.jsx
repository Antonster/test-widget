import { useParentSize } from '@hooks';
import { getWidgetData } from '@store/widget/widget.actions';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './WidgetContainer.styles';

const WidgetContainer = ({ children }) => {
  const dispatch = useDispatch();
  const parentContainerRef = useRef(null);
  const size = useParentSize(parentContainerRef);
  const parentScale = useMemo(() => (size ? size.width / 1920 : 0), [size]);

  useEffect(() => {
    dispatch(getWidgetData());
  }, [dispatch]);

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
