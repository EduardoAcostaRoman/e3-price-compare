//import { Route, Switch } from 'react-router-dom';
import Layout from './Components/layout/Layout';

import MainPage from './Pages/MainPage';

function App() {
  return (
    <Layout>
      <MainPage />
      {/* <Switch>
        <Route path='\' exact>
          <MainPage />
        </Route>
      </Switch> */}
    </Layout>
  );
}

export default App;
