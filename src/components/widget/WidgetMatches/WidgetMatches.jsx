import { MainButton, MainSelect, WidgetItem, WidgetItemEmpty } from '@components';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './WidgetMatches.styles';

dayjs.extend(duration);

const divisions = [
  { label: 'I', value: '1' },
  { label: 'II', value: '2' },
];

const WidgetMatches = () => {
  const [activeDivision, setActiveDivision] = useState('1');
  const [activeFilter, setActiveFilter] = useState();
  const [stagesValue, setStagesValue] = useState();
  const stages = useSelector((state) => state?.widget?.stages);
  const filters = useSelector((state) => state?.widget?.filters);
  const matches = useSelector((state) => state?.widget?.matches);

  const selectOptions = useMemo(
    () => [
      { label: 'All', value: '' },
      ...stages.map(({ id, title }) => ({ label: title, value: id })),
    ],
    [stages],
  );

  const statuses = useMemo(
    () => filters.map(({ title, name }) => ({ label: title, value: name })),
    [filters],
  );

  const activeList = useMemo(() => {
    if (activeFilter) {
      let list = activeFilter.matches.map((matchId) =>
        matches.find((match) => match.id === matchId),
      );

      if (stagesValue?.value) {
        list = list.filter(({ stageId }) => stageId === stagesValue.value);
      }

      const listWithDuration = [];

      list.forEach((match) => {
        const firstDelta = Math.abs(dayjs(match.startAt) - dayjs(list.at(0).startAt));
        const oneWeek = 1000 * 60 * 60 * 24 * 7;

        if (
          listWithDuration.length > 0 &&
          Math.abs(dayjs(match.startAt) - dayjs(listWithDuration.at(-1).startAt)) > oneWeek
        ) {
          const months = dayjs.duration(firstDelta).asMonths();
          const fullMonths = Number(`${months}`.split('.')[0]);
          const weeks = dayjs.duration(Number(`0.${`${months}`.split('.')[1]}`), 'M').asWeeks();
          const fullWeeks = Number(`${weeks}`.split('.')[0]);

          listWithDuration.push({
            id: listWithDuration.length,
            status: 'date',
            delta: `${fullMonths ? `Month ${fullMonths}` : ''} ${
              fullMonths && fullWeeks ? '/' : ''
            } ${fullWeeks ? `Week ${fullWeeks}` : ''}`,
          });
        }

        listWithDuration.push(match);
      });

      while (listWithDuration.length > 0 && listWithDuration.length < 5) {
        listWithDuration.push({ id: listWithDuration.length, status: 'empty' });
      }

      return listWithDuration;
    }

    return undefined;
  }, [activeFilter, matches, stagesValue]);

  useEffect(() => {
    if (!activeFilter) {
      const active = filters.find((item) => item.default);

      setActiveFilter(active);
    }
  }, [filters]);

  const onChangeStagesValue = useCallback((value) => setStagesValue(value), []);

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
          <S.FilterTitle>Stage:</S.FilterTitle>
          <MainSelect
            options={selectOptions}
            placeholder="Stage Select"
            value={stagesValue}
            onChange={onChangeStagesValue}
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
          {activeList.map(({ id, status, startAt, teams, channel, title, delta }) => {
            if (status === 'empty') {
              return <WidgetItemEmpty key={id} />;
            }

            if (status === 'date') {
              return <S.DateSeparator key={id}>{delta}</S.DateSeparator>;
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
