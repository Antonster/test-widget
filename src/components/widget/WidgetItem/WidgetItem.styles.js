import styled from '@emotion/styled';

export const WidgetItem = styled.div`
  width: 428px;
  height: 112px;
  padding: 12px;
  background: #1d1f2a;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px 0;
`;

export const Title = styled.div`
  font-family: 'Montserrat';
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.004em;
  color: #f4f4f4;
`;

export const Content = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 12px;
`;

export const Name = styled.div`
  width: 94px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.004em;
  color: #f4f4f4;
  text-align: ${({ $align }) => $align};
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
`;

export const Score = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: ${({ $status, $winner }) => {
    if ($status === 'past' && $winner) {
      return '#43FF8A';
    }
    if ($status === 'past' && !$winner) {
      return '#EE2737';
    }
    if ($status === 'present') {
      return '#F4F4F4';
    }
    return '#464851';
  }};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.004em;
  color: #75787b;
`;

export const Date = styled.div``;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  background: #464851;
  border-radius: 2px;
  gap: 0 4px;
`;

export const TimerElement = styled.div`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.004em;
  color: #f4f4f4;
`;

export const Live = styled.div`
  padding: 2px 4px;
  text-transform: uppercase;
  background: #ee2737;
  border-radius: 2px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.004em;
  color: #f4f4f4;
`;

export const Separator = styled.div``;

export const Channel = styled.div``;
