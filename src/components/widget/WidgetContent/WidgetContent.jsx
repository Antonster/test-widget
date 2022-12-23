import PropTypes from 'prop-types';

import * as S from './WidgetContent.styles';

const WidgetContent = ({ children }) => <S.WidgetContent>{children}</S.WidgetContent>;

WidgetContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default WidgetContent;
