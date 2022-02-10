import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Details from './pages/Details';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/details" component={ Details }/>
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
