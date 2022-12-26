import styled from '@emotion/styled';

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 24px;
  padding: 0 24px;
`;

export const RegionFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const FilterTitle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.004em;
  color: #75787b;
`;

export const DivisionFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const DivisionButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const DivisionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border-radius: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.004em;
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

export const StatusFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 24px;
  padding: 24px;
`;

export const MatchesList = styled.div`
  width: 100%;
  height: 576px;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  padding: 0 20px 0 24px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background: transparent;

    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background: transparent;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ee2737;
    border-radius: 4px;
  }
`;
