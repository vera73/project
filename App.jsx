import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Chat from './components/Chat/Chat.jsx';
import Api from './components/Api/Api.jsx';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
  <Header/>
 <main className='main'>
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/Chat' component={Chat}/>
  <Route exact path='/Api' component={Api}/>
  </Switch>
 </main>
    </>
  );
}

export default App;
