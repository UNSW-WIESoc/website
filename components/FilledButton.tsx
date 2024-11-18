import {Button, Typography} from '@mui/joy';

interface FilledButtonProps {
  text: string;
  link: string;
  Icon?: React.ElementType;
  width: string;
  newTab?: boolean;
}

export default function FilledButton({text, link, Icon, width, newTab = false}: FilledButtonProps) {
  return (
    <Button 
      component='a'
      href={link}
      target={newTab ? '_blank' : '_self'}
      startDecorator={
        Icon ? <Icon color='#FFFFFF' width={25} height={25} /> : undefined
      }
      className='bg-purple button-border-round'
      sx={{ mb: 'auto', width: {width}, whiteSpace: 'nowrap' }}
    >
    <Typography level='subtitle' pb={0.3} className='white' sx={{ mt: 'auto'}}>
      {text}
    </Typography>
  </Button>
  )
}