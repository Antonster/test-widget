import { MainButton, MainSelect } from '@components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './WidgetMatches.styles';

const divisions = [
  { label: 'I', value: '1' },
  { label: 'II', value: '2' },
];

const WidgetMatches = () => {
  const [activeDivision, setActiveDivision] = useState('1');
  const [activeStatus, setActiveStatus] = useState();
  const [selectValue, setSelectValue] = useState();
  const stages = useSelector((state) => state?.widget?.stages);
  const filters = useSelector((state) => state?.widget?.filters);
  const selectOptions = useMemo(
    () => stages.map(({ id, title }) => ({ label: title, value: id })),
    [stages],
  );
  const statuses = useMemo(
    () => filters.map(({ title, name }) => ({ label: title, value: name })),
    [filters],
  );

  useEffect(() => {
    if (!activeStatus) {
      const active = filters.find((item) => item.default).name;

      setActiveStatus(active);
    }
  }, [filters]);

  const onChangeSelectValue = useCallback((value) => setSelectValue(value), []);

  return (
    <>
      <S.FiltersWrapper>
        <S.RegionFilter>
          <S.FilterTitle>Region:</S.FilterTitle>
          <MainSelect
            options={selectOptions}
            placeholder="Region Select"
            value={selectValue}
            onChange={onChangeSelectValue}
          />
        </S.RegionFilter>

        <S.DivisionFilter>
          <S.FilterTitle>Division:</S.FilterTitle>
          <S.DivisionButtonsWrapper>
            {divisions.map(({ label, value }) => (
              <S.DivisionButton
                key={value}
                $active={value === activeDivision}
                onClick={() => setActiveDivision(value)}
              >
                {label}
              </S.DivisionButton>
            ))}
          </S.DivisionButtonsWrapper>
        </S.DivisionFilter>
      </S.FiltersWrapper>

      <S.StatusFilters>
        {statuses.map(({ label, value }) => (
          <MainButton
            key={value}
            label={label}
            value={value}
            active={value === activeStatus}
            onClick={() => setActiveStatus(value)}
          />
        ))}
      </S.StatusFilters>
    </>
  );
};

export default WidgetMatches;
