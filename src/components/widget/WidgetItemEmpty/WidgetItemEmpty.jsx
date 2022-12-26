import { iconVsSvg } from '@images';
import { memo } from 'react';

import * as S from './WidgetItemEmpty.styles';

const WidgetItemEmpty = () => (
  <S.WidgetItemEmpty>
    <img src={iconVsSvg} alt="vs" />
  </S.WidgetItemEmpty>
);

export default memo(WidgetItemEmpty);
