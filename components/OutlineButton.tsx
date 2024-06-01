import {Button, Typography} from "@mui/joy";
import Link from "next/link";

interface OutlineButtonProps {
  text: string;
  link: string;
}

export default function OutlineButton({text, link}: OutlineButtonProps) {
  return (<Link href={link} passHref>
      <Button variant='outlined' className='medium-blue'
              sx={{'border-color': '#93AED3', 'border-radius': '20px', 'border-width': '2px'}}>
        <Typography level='subtitle' className='medium-blue' px={1}>
          {text}
        </Typography>
      </Button>
    </Link>)
}