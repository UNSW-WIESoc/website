'use client';

import {
  AspectRatio, Divider, Drawer, IconButton, Link, List, ListItemButton, Sheet, Stack, Typography,
} from '@mui/joy';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import {Menu as MenuIcon} from '@mui/icons-material';
import {navData, socialsData} from '@/app/data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useRouter} from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (<>
    <Sheet sx={{boxShadow: 'md', height: 80, display: {lg: 'none'}}}>
      <Stack direction='row' height='100%' width='100%' p={2} justifyContent='space-between' alignItems='center'>
        <Link component={NextLink} href='/'>
          <AspectRatio variant='plain' ratio='15/6' objectFit='contain' sx={{width: 200}}>
            <Image fill src='/wiesoc_logo_long.svg' alt='logo'/>
          </AspectRatio>
        </Link>
        <IconButton variant='plain' sx={{color: '#fff'}} onClick={() => setOpen(true)}>
          <MenuIcon sx={{fontSize: '2.2rem'}}/>
        </IconButton>
      </Stack>
    </Sheet>
    <MenuDrawer open={open} setOpen={setOpen}/>
  </>)
}


const SubMenu: React.FC<{
  subData: { text: string, href: string }[], setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({subData, setOpen}) => {
  return (<List sx={{'--ListItem-paddingX': '2spx'}}
    >
      {subData.map(({text, href}, idx) => (
        <Link component={NextLink} href={href} underline='none' sx={{color: 'inherit', fontSize: '20px'}}>
          <ListItemButton
            key={idx}
            className='navbar-hover'
            sx={{width: '100%', justifyContent: 'center'}}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Typography level='subtitle-light' fontWeight={400} sx={{paddingLeft: '0.5rem', textAlign: 'left'}}>
              {text}
            </Typography>

          </ListItemButton>
        </Link>))}
    </List>);
};


interface MenuDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const MenuDrawer: React.FC<MenuDrawerProps> = ({open, setOpen}) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState<number | null>(null);
  const router = useRouter();

  return (<Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
      <Link component={NextLink} href='/' mx='auto' my={2}>
        <AspectRatio variant='plain' ratio='15/6' objectFit='contain' sx={{width: 200}}>
          <Image fill src='/wiesoc_logo_long.svg' alt='logo'/>
        </AspectRatio>
      </Link>
      <Divider/>
      <List
        size='lg'
        component='nav'
        sx={{
          flex: 'none', fontSize: 'xl', '& > div': {justifyContent: 'center'},
        }}
      >
        {navData.map(({text, href, subData}, idx) => (<>
            <ListItemButton
              className='navbar-hover'
              sx={{width: '100%', justifyContent: 'center'}}
              key={idx}
              onClick={() => {
                setOpen(false);
                router.push(href);
              }}
            >
              <Typography level='subtitle-lg' fontWeight={400}>
                {text}
              </Typography>
              {Array.isArray(subData) && subData.length > 0 && (<IconButton onClick={e => {
                  e.stopPropagation();
                  setOpenSubMenuIndex(openSubMenuIndex === idx ? null : idx)
                }}>
                  {openSubMenuIndex === idx ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </IconButton>)}
            </ListItemButton>
            {openSubMenuIndex === idx && <SubMenu subData={subData || []} setOpen={setOpen}/>}
          </>))}
      </List>
      <Divider/>
      <Stack direction='row' spacing={4} justifyContent='center' py={4}>
        {socialsData.map(({Icon, href}, idx) => (<Link key={idx} href={href} target='_blank'>
            <Icon color='#33373D' width={25} height={25}/>
          </Link>))}
      </Stack>
    </Drawer>);
};

export default NavBar;