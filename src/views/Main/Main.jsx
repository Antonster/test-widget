import {
  OpenButton,
  Viewport,
  WidgetContainer,
  WidgetContent,
  WidgetHeader,
  WidgetMatches,
} from '@components';
import { useToggle } from '@hooks';
import { useSelector } from 'react-redux';

const Main = () => {
  const pages = useSelector((state) => state?.widget?.pages);
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <Viewport>
      <OpenButton onOpen={toggleOpen} />

      {isOpen && (
        <WidgetContainer>
          <WidgetHeader onClose={toggleOpen} pages={pages} />

          <WidgetContent>
            <WidgetMatches />
          </WidgetContent>
        </WidgetContainer>
      )}
    </Viewport>
  );
};

export default Main;
