import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { useDispatch } from 'react-redux';
import { testprogressAdd } from '../../redux/actions/userActionstatus';
import {useNavigate} from "react-router-dom";

export default function Testinprogresscard({testprogress}) {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let coursename = testprogress.location.split('/');

    function handleDiscard() {
        localStorage.removeItem('testprogress');
        dispatch(testprogressAdd({location:"",quesno:""}))
    }

    function handleContinuetest () {
      localStorage.setItem('updatequesIndex',testprogress.quesno)
      navigate(testprogress.location);
    }

  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        '--icon-size': '100px',
      }}
    >
      <CardOverflow variant="solid" color="warning">
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
        🎊 {coursename.map((elem)=>{return elem.toUpperCase()+" -"})} 🎊
      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        This practice test is incomplete.Click on Continue test to complete it.
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          '--Button-radius': '40px',
          width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
        }}
      >
        <Button variant="solid" color="warning" onClick={handleContinuetest}>
          Continue Test
        </Button>
        <Button variant="plain" color="neutral" onClick={handleDiscard}>
          Discard
        </Button>
      </CardActions>
    </Card>
  );
}
