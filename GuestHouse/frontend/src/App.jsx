import './App.css'
import Home from './pages/home'
import Hetimenu from './pages/hetimenu';
import Foglalas from './pages/foglalas';
import Bejelentkezes from './pages/bejelentkezes';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarMobile from './components/navbarMobile';
import NavbarDesktop from './components/navbarDesktop';
import toast, { Toaster } from 'react-hot-toast';
import SignUp from './reg/signUp';
import Etelfolvitel from './pages/etelfolvitel';
import Foglalasfelvitel from './pages/foglalasfelvitel';
import Alluser from './pages/alluser';
import Szoba from './pages/szoba';
import Profile from './pages/Profile';
import { UserProvider } from './context/userContext';

function App() {
  return (
   <UserProvider>
   <Toaster />
    <BrowserRouter>
    <NavbarDesktop className=''/>
   <NavbarMobile/>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/hetimenu' element={<Hetimenu />} />
        <Route path='/foglalas' element={<Foglalas />} />
        <Route path='/bejelentkezes' element={<Bejelentkezes />} />
        <Route path='/regisztracio' element={<SignUp />} />
        <Route path='/etelfolvitel' element={<Etelfolvitel/>}/>
        <Route path='/foglalasfelvitel' element={<Foglalasfelvitel/>} />
        <Route path='/alluser' element={<Alluser/>}/>
        <Route path='/szoba/:id' element={<Szoba/>}/> 
        <Route path='/profile' element={<Profile/>}/> 
      </Routes>
    </BrowserRouter>
   </UserProvider>
  )
}

export default App
