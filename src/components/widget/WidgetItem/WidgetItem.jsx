import { iconVsSvg } from '@images';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';

import * as S from './WidgetItem.styles';

const WidgetItem = ({ status, startAt, teams, channel, title }) => {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp: dayjs(startAt).valueOf(),
  });
  const teamList = useSelector((state) => state?.widget?.teams);
  const fullTeams = useMemo(() => {
    const list = teams.map((team) => ({
      ...team,
      ...teamList?.find((fullTeam) => fullTeam.id === team.id),
    }));

    return list;
  }, [teamList, teams]);

  return (
    <S.WidgetItem>
      <S.Title>{title}</S.Title>

      <S.Content>
        <S.Name $align="right">{fullTeams?.[0]?.name}</S.Name>
        <S.Logo>
          <img src={fullTeams?.[0]?.logo} alt="team log" />
        </S.Logo>
        <S.Score $status={status} $winner={fullTeams?.[0]?.winner}>
          {fullTeams?.[0]?.score}
        </S.Score>

        <img src={iconVsSvg} alt="vs" />

        <S.Score $status={status} $winner={fullTeams?.[1]?.winner}>
          {fullTeams?.[1]?.score}
        </S.Score>
        <S.Logo>
          <img src={fullTeams?.[1]?.logo} alt="team log" />
        </S.Logo>
        <S.Name $align="left">{fullTeams?.[1]?.name}</S.Name>
      </S.Content>

      <S.Footer>
        {(status === 'past' || (status === 'future' && (days > 0 || hours > 11))) && (
          <S.Date>{dayjs(startAt).format('DD MMM HH:mm')}</S.Date>
        )}

        {(status === 'present' || (status === 'future' && !isRunning)) && <S.Live>Live</S.Live>}

        {status === 'future' && days === 0 && hours < 12 && isRunning && (
          <S.Timer>
            {!!hours && <S.TimerElement>{`${hours}h`}</S.TimerElement>}
            {(!!minutes || (!!hours && minutes === 0)) && (
              <S.TimerElement>{`${minutes}m`}</S.TimerElement>
            )}
            {(!!seconds || (!!minutes && seconds === 0)) && (
              <S.TimerElement>{`${seconds}s`}</S.TimerElement>
            )}
          </S.Timer>
        )}

        {(status === 'past' || (status === 'future' && (days > 0 || hours > 11))) && (
          <S.Separator>/</S.Separator>
        )}

        <S.Channel>{channel}</S.Channel>
      </S.Footer>
    </S.WidgetItem>
  );
};

WidgetItem.propTypes = {
  status: PropTypes.string.isRequired,
  startAt: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
      winner: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  channel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(WidgetItem);
