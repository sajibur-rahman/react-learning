import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Dashboard from './components/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>

        <Route path='/*' element={<PrivateRoute/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='content' element={<Content/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
