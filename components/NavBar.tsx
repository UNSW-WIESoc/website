import { Box, Sheet, Stack, Typography, autocompleteClasses } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Url } from 'next/dist/shared/lib/router/router';

interface NavProps {
  title: string;
  navigateTo: Url;
}

function NavItem({title, navigateTo} : NavProps) {
  return (
    <Box component={Link} href={navigateTo} 
      sx={{
      alignContent: 'center',
      width: '100%',
      height: '100%',
      textDecoration: 'none', 
      '&:hover': {bgcolor: '#D1E2F8', opacity: '40%'}
    }}>
      <Typography level='title-md' 
        sx={{textAlign: 'center'}}>
        {title}
      </Typography>
    </Box>
  )

}
export default function NavBar() {
  return (
    <Sheet sx={{height: 75}}>
      <Stack width='100%' height='100%' boxShadow='md' direction='row' alignItems='center' px={2}>
        <Link href='/'>
          <Image src={'/wiesoc_logo_long.svg'} alt={'wiesoc-logo'} height={60} width={250}/>
        </Link>
        <Stack direction='row' width='100%' height='100%' px={10}>
          <NavItem title='About Us' navigateTo='/about-us'/>
          <NavItem title='Events' navigateTo='/events'/>
          <NavItem title='Programs' navigateTo='/programs'/>
          <NavItem title='Sponsors' navigateTo='/sponsors'/>
          <NavItem title='Careers' navigateTo='/jobs-board'/>
          <NavItem title='Contact Us' navigateTo='/contact-us'/>
        </Stack>
        <Stack direction='row' spacing={2} mx={3}>
          <Link href='https://www.facebook.com/wieunsw/' target='_blank'><FacebookIcon/></Link>
          <Link href='https://www.instagram.com/wieunsw/?hl=en' target='_blank'><InstagramIcon/></Link>
          <Link href='https://au.linkedin.com/company/unsw-wiesoc' target='_blank'><LinkedInIcon/></Link>
        </Stack>
      </Stack>
    </Sheet>
  )
}
