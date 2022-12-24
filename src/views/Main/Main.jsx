import {
  OpenButton,
  Viewport,
  WidgetContainer,
  WidgetContent,
  WidgetHeader,
  WidgetInfo,
  WidgetMatches,
} from '@components';
import { useInterval, useToggle } from '@hooks';
import { getWidgetData } from '@store/widget/widget.actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pages = useSelector((state) => state?.widget?.pages);
  const [isOpen, toggleOpen] = useToggle(false);

  useInterval(() => {
    dispatch(getWidgetData());
  }, 1000 * 60);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(pages?.[0].name);
    }
  }, [pages]);

  return (
    <Viewport>
      <OpenButton onOpen={toggleOpen} />

      {isOpen && (
        <WidgetContainer>
          <WidgetHeader onClose={toggleOpen} pages={pages} />

          {pages && (
            <WidgetContent>
              <Routes>
                <Route path={pages?.[0].name} element={<WidgetMatches />} />
                <Route path={pages?.[1].name} element={<WidgetInfo />} />
              </Routes>
            </WidgetContent>
          )}
        </WidgetContainer>
      )}
    </Viewport>
  );
};

export default Main;
