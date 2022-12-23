import { iconCloseSvg, logoFullSvg } from '@images';
import PropTypes from 'prop-types';

import * as S from './WidgetHeader.styles';

const WidgetHeader = ({ onClose }) => (
  <S.WidgetHeader>
    <S.LogoWrapper>
      <img src={logoFullSvg} alt="logo" />

      <S.CloseButton onClick={onClose}>
        <img src={iconCloseSvg} alt="close" />
      </S.CloseButton>
    </S.LogoWrapper>

    <S.ButtonsWrapper>
      <S.StyledLink
        to="matches"
        style={({ isActive }) => (isActive ? { background: '#1D1F2A' } : undefined)}
      >
        Matches
      </S.StyledLink>

      <S.StyledLink
        to="info_stages"
        style={({ isActive }) => (isActive ? { background: '#1D1F2A' } : undefined)}
      >
        Info
      </S.StyledLink>
    </S.ButtonsWrapper>
  </S.WidgetHeader>
);

WidgetHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default WidgetHeader;
