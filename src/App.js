import { Route, Switch } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import Favorites from './Pages/Favorites';

import MainPage from './Pages/MainPage';
import Stores from './Pages/Stores';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/stores'>
          <Stores />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
