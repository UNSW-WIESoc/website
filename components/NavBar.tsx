import { Sheet, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function NavBar() {
  return (
    <Sheet sx={{height: 75}}>
      <Stack width="100%" height="100%" boxShadow="md" direction="row" alignItems="center" pl={2}>
        <Link href="/">
          <Image src={"/wiesoc_logo_long.svg"} alt={"wiesoc-logo"} width={300} height={75}/>
        </Link>
        <Stack direction="row" spacing={8} ml={5}>
          <Typography level="title-lg" component={Link} href="/about-us" sx={{textDecoration: "none"}}>
            About Us
          </Typography>
          <Typography level="title-lg" component={Link} href="/events" sx={{textDecoration: "none"}}>
            Events
          </Typography>
          <Typography level="title-lg" component={Link} href="/programs" sx={{textDecoration: "none"}}>
            Programs
          </Typography>
          <Typography level="title-lg" component={Link} href="/sponsors" sx={{textDecoration: "none"}}>
            Sponsors
          </Typography>
          <Typography level="title-lg" component={Link} href="/jobs-board" sx={{textDecoration: "none"}}>
            Jobs Board
          </Typography>
          <Typography level="title-lg" component={Link} href="/contact-us" sx={{textDecoration: "none"}}>
            Contact Us
          </Typography>

        </Stack>
        <Stack direction="row" >
          {/*<FacebookIcon/>*/}
          {/*<InstagramIcon/>*/}
          {/*<LinkedInIcon/>*/}
        </Stack>


      </Stack>
    </Sheet>
  )
}
