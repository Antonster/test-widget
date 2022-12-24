import PropTypes from 'prop-types';
import { memo } from 'react';

import * as S from './MainButton.styles';

const MainButton = ({ label, value, active, onClick }) => (
  <S.StatusButton key={value} $active={active} onClick={onClick}>
    {label}
  </S.StatusButton>
);

MainButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(MainButton);
