import styled from '@emotion/styled';

export const WidgetContent = styled.div`
  width: 100%;
  height: 736px;
  padding: 24px 20px 24px 24px;
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
