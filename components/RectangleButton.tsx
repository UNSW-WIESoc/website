import { Button, Typography } from '@mui/joy';

interface FilledButtonProps {
  text: string;
  link: string;
  Icon?: React.ElementType;
  width: string;
  newTab?: boolean;
}

export default function RectangleButton({ text, link, Icon, width, newTab = true }: FilledButtonProps) {
  return (
    <Button
      component="a"
      href={link}
      target={newTab ? '_blank' : '_self'}
      startDecorator={
        Icon ? <Icon color="#FFFFFF" width={25} height={25} /> : undefined
      }
      sx={{
        backgroundColor: '#063776',   // dark blue
        color: 'white',
        width: width,
        borderRadius: '12px',         // rounded rectangle
        px: 3,
        py: 1.5,
        whiteSpace: 'nowrap',

        '&:hover': {
          backgroundColor: '#052F66', // darker hover
        }
      }}
    >
      <Typography level="title-sm" sx={{ color: 'white' }}>
        {text}
      </Typography>
    </Button>
  );
}