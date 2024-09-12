import {Button, Typography} from '@mui/joy';

interface OutlineButtonProps {
  text: string;
}

export default function OutlineButtonLinkless({text}: OutlineButtonProps) {
  return (
      <Button variant='outlined' className='medium-blue button-border-round'
      sx={{ 'borderColor': '#93AED3', 'borderWidth': '2px', 'backgroundColor': 'white'}}>
        <Typography level='subtitle' className='medium-blue' px={1}>
          {text}
        </Typography>
      </Button>
  )
}