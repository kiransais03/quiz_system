import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route,NavLink} from "react-router-dom";
import "./components/Navlinks_centre/navlinks_centre-styles.css"
import Privateroutes from './pages/Privateroutes';
import Privateloginsignuproutes from './pages/Privateloginsignuproutes';
import Loginpage from "./pages/Loginpage/Loginpage";
import Signuppage from "./pages/Signuppage/Signuppage";
import Fullpageloader from './components/Fullpage Loader/Fullpageloader';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector,useDispatch} from "react-redux";
import { usertokenAdd,isLoading } from './redux/actions/userActionstatus';
import Errorpage from './pages/Errorpage/Errorpage';
import Landingpage from './pages/Landingpage/Landingpage';

function App() {

  let dispatch = useDispatch();

  let reduxdata = useSelector((currState)=>{return currState})

  return (
    <div> 
      <Navbar/>
      <ToastContainer/>
       {/* <button type='button' onClick={()=>{dispatch(usertokenAdd("thisisdummytoken")); localStorage.setItem('token','fdsafsd')}} >token add</button>
      <button type='button' onClick={()=>{dispatch(usertokenAdd("thisisdummytoken")); localStorage.removeItem('token')}}>token del</button>
      <button type='button' onClick={()=>{dispatch(isLoading(true))}}>loading true</button>
      <button type='button' onClick={()=>{dispatch(isLoading(false))}}>loading false</button>  */}
      <Routes>
             <Route path="/" element={<Landingpage/>}/>
         <Route element={<Privateroutes/>}>
            <Route path='/dashboard' element={<div>HI this is dashboard</div>}/>
            <Route path='/courses' element={<div>HI this is courses</div>}/>
            <Route path='/learninglab' element={<div>HI this is learninglab</div>}/>
            <Route path='/achievements' element={<div>HI this is achievements</div>}/>
          </Route>
          <Route element={<Privateloginsignuproutes/>}>
             <Route path="signup" element={<Signuppage/>}/>
             <Route path="login" element={<Loginpage/>}/>
          </Route>
          <Route path="/loading" element={<Fullpageloader/>}/>
          <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </div>
  );
}

export default App;