import { iconCloseSvg, logoFullSvg } from '@images';
import PropTypes from 'prop-types';

import * as S from './WidgetHeader.styles';

const WidgetHeader = ({ onClose, pages }) => (
  <S.WidgetHeader>
    <S.LogoWrapper>
      <img src={logoFullSvg} alt="logo" />

      <S.CloseButton onClick={onClose}>
        <img src={iconCloseSvg} alt="close" />
      </S.CloseButton>
    </S.LogoWrapper>

    <S.ButtonsWrapper>
      {pages &&
        pages.map(({ name, title }) => (
          <S.StyledLink
            key={name}
            to={name}
            style={({ isActive }) => (isActive ? { background: '#1D1F2A' } : undefined)}
          >
            {title}
          </S.StyledLink>
        ))}
    </S.ButtonsWrapper>
  </S.WidgetHeader>
);

WidgetHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default WidgetHeader;
