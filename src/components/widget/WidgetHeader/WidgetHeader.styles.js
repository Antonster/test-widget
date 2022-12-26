import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WidgetHeader = styled.div`
  height: 148px;
  background: #1d1f2a;
  border-radius: 8px 8px 0px 0px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonsWrapper = styled.div`
  background: #303038;
  border-radius: 100px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 0 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 4px;
  width: 50%;
  border-radius: 100px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.004em;
  color: #b8b8bd;
  transition: all 0.5s;
  cursor: pointer;
`;
