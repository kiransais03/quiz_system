import React,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Flagmenu() {

  let reduxToken = useSelector((currState)=>{return currState.token});
  let savedques = useSelector((currState)=>{return currState.savedques});

  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if(reduxToken==="")
    {
      return(<div></div>)
    }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ backgroundColor: 'orange',borderRadius:"50px" }}
      >
        🏳️Flag Questions
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
          <MenuItem>{savedques.location.toUpperCase()}</MenuItem>
        {savedques.pagenos.map((elem,index)=>{
          return (<MenuItem style={{backgroundColor:"lightgreen"}} onClick={()=>{localStorage.setItem('updatequesIndex',elem);navigate(`${savedques.location}`);}}>{`Question.${elem+1}`}</MenuItem>)
        })}
      </Menu>
    </div>
  );
}
