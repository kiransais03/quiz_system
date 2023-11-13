import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';

export default function Lessonscard({lessonname,type}) {

  console.log(lessonname)
  let navigate = useNavigate();
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: 'lg',
        width: 400,
        maxWidth: '100%',
        // to make the demo resizeable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Chip size="sm" variant="soft">
          {type}
        </Chip>
      </Box>

      <CardContent>
        <Typography level="title-lg">{lessonname}</Typography>
        <Typography level="body-md"></Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="solid"
        >
          Learn
        </Button>
        <Button
          variant="solid"
          style={{backgroundColor:"pink",color:"black"}}
          onClick={() => {
            navigate(`/courses/${type.toLowerCase()}/${lessonname.toLowerCase()}`);
          }}
        >
          Take Practice Quiz Test
        </Button>
      </CardActions>
    </Card>
  );
}
