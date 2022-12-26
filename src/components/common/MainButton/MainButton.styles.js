import styled from '@emotion/styled';

export const MainButton = styled.button`
  padding: 5px 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.004em;
  color: #b8b8bd;
  border: 1px solid #b8b8bd;
  border-radius: 100px;
  background: ${({ $active }) => ($active ? '#f4f4f4' : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? '#f4f4f4' : '#b8b8bd')};
  color: ${({ $active }) => ($active ? '#1d1f2a' : '#b8b8bd')};
  transition: all 0.5s;
  ${({ $active }) => (!$active ? 'cursor: pointer;' : '')};

  &:hover {
    border: 1px solid #f4f4f4;
    ${({ $active }) => (!$active ? 'color: #f4f4f4;' : '')};
  }
`;
