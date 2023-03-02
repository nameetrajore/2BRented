import {SearchPage} from './Pages/SearchPage'
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import { BikeCatalouge } from './Pages/BikeCatalouge';
import { Login } from './Pages/Login'
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Signup } from './Pages/Signup'
import { AadharVeri } from './Pages/AadharVeri'
import { NoMatch } from './Pages/NoMatch';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<SearchPage/>}></Route>
        <Route path = 'bike-catalouge' element = {<BikeCatalouge/>}></Route>
        <Route path = 'login' element = {<Login/>}></Route>
        <Route path = '/signup' element = {<Signup/>}>
          <Route path = 'aadhar-verification' element = {<AadharVeri/>}/>
        </Route>
        
        <Route path ='*' element={<NoMatch/>}></Route>
      </Routes>
    </>
  );
}

export default App;
