import { OpenButton, Viewport, WidgetContainer, WidgetHeader } from '@components';
import { useToggle } from '@hooks';

const Main = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <Viewport>
      <OpenButton onOpen={toggleOpen} />

      {isOpen && (
        <WidgetContainer>
          <WidgetHeader onClose={toggleOpen} />
        </WidgetContainer>
      )}
    </Viewport>
  );
};

export default Main;
