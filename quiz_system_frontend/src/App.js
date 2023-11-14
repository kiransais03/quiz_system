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
import Coursespage from './pages/Coursespage/Coursespage';
import Lessonspage from './pages/Lessonspage/Lessonspage';
import Learninglabpage from './pages/Learninglabpage/Learninglabpage';

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
             <Route path="/home" element={<Landingpage/>}/>
         <Route element={<Privateroutes/>}>
            <Route path='/dashboard' element={<div className='emptypages d-flex justify-content-center align-items-center flex-column' style={{  }}><div>Hi this is Dashboard.Navigate to Courses<Fullpageloader/></div> </div>}/>

            <Route path='/courses' element={<Coursespage/>}/>
            <Route path='/courses/*' element={<Lessonspage/>}/>
            

            <Route path='/learninglab' element={<Learninglabpage/>}/>
            <Route path='/achievements' element={<div className='emptypages d-flex justify-content-center align-items-center flex-column' style={{  }}><div>Hi this is Achievements page.Navigate to Courses<Fullpageloader/></div> </div>}/>
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
