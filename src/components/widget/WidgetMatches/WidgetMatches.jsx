import { MainButton, MainSelect, WidgetItem, WidgetItemEmpty } from '@components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './WidgetMatches.styles';

const divisions = [
  { label: 'I', value: '1' },
  { label: 'II', value: '2' },
];

const WidgetMatches = () => {
  const [activeDivision, setActiveDivision] = useState('1');
  const [activeFilter, setActiveFilter] = useState();
  const [selectValue, setSelectValue] = useState();
  const stages = useSelector((state) => state?.widget?.stages);
  const filters = useSelector((state) => state?.widget?.filters);
  const matches = useSelector((state) => state?.widget?.matches);
  const selectOptions = useMemo(
    () => stages.map(({ id, title }) => ({ label: title, value: id })),
    [stages],
  );
  const statuses = useMemo(
    () => filters.map(({ title, name }) => ({ label: title, value: name })),
    [filters],
  );
  const activeList = useMemo(() => {
    if (activeFilter) {
      const list = activeFilter.matches.map((matchId) =>
        matches.find((match) => match.id === matchId),
      );

      while (list.length > 0 && list.length < 5) {
        list.push({ id: list.length, status: 'empty' });
      }

      return list;
    }

    return undefined;
  }, [activeFilter, matches]);

  useEffect(() => {
    if (!activeFilter) {
      const active = filters.find((item) => item.default);

      setActiveFilter(active);
    }
  }, [filters]);

  const onChangeSelectValue = useCallback((value) => setSelectValue(value), []);

  const onChangeActiveFilter = useCallback(
    (value) => {
      const active = filters.find((item) => item.name === value);

      setActiveFilter(active);
    },
    [filters],
  );

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
            active={value === activeFilter?.name}
            onClick={() => onChangeActiveFilter(value)}
          />
        ))}
      </S.StatusFilters>

      {activeList && activeList.length > 0 && (
        <S.MatchesList>
          {activeList.map(({ id, status, startAt, teams, channel, title }) => {
            if (status === 'empty') {
              return <WidgetItemEmpty key={id} />;
            }

            return (
              <WidgetItem
                key={id}
                status={status}
                startAt={startAt}
                teams={teams}
                channel={channel}
                title={title}
              />
            );
          })}
        </S.MatchesList>
      )}

      {activeList && activeList.length === 0 && (
        <S.EmptyList>
          <S.EmptyMessage>
            <S.EmptyMessageTitle>No matches!</S.EmptyMessageTitle>
            <S.EmptyMessageText>{activeFilter?.hints.noMatches.description}</S.EmptyMessageText>
          </S.EmptyMessage>
        </S.EmptyList>
      )}
    </>
  );
};

export default WidgetMatches;
