import { fakeViewportPng } from '@images';
import PropTypes from 'prop-types';

import * as S from './Viewport.styles';

const Viewport = ({ children }) => (
  <S.Viewport>
    <img src={fakeViewportPng} alt="viewport" />
    {children}
  </S.Viewport>
);

Viewport.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Viewport;
