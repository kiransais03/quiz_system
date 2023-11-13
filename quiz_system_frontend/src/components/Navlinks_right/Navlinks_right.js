import React,{useEffect} from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Avatar from '@mui/joy/Avatar';
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import { emailAdd, usertokenAdd } from '../../redux/actions/userActionstatus';

export default function Navlinks_right() {

  let dispatch = useDispatch();

  let token = useSelector((currState)=>{return currState.token})

  useEffect(()=>{

    if(localStorage.getItem('token')) {
             dispatch(usertokenAdd(localStorage.getItem('token')));
              dispatch(emailAdd(localStorage.getItem('email')));
    }
  },[])

  const handleLogout = ()=>{
    dispatch(usertokenAdd(""));
    dispatch(emailAdd(""));
    localStorage.removeItem('token');
    localStorage.removeItem('email')
  }

  return (
    <>
      {token && <Dropdown>
        <MenuButton style={{ borderRadius: '25px',fontSize :"18px",marginTop:"15px" }}>🔔</MenuButton>
        <Menu>
          <MenuItem onClick={() => {alert('hello');}}>No New Notifications</MenuItem>
        </Menu>
      </Dropdown>}

      {token && <Dropdown>
        <MenuButton style={{ border: 'none',borderRadius: '25px' }}> <Avatar style={{fontSize :"25px"}}>🧒</Avatar> </MenuButton>
        <Menu style={{backgroundColor:"whitesmoke"}}>
           {localStorage.getItem('email')} 
          <MenuItem  onClick={() => {alert('hello'); }}>Dashboard</MenuItem>
          <MenuItem  onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Dropdown>}
    </>
  );
}
