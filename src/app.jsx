import { Main } from '@views';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/*" element={<Main />} />
  </Routes>
);

export default App;
