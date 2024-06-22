'use client';

import {
  AspectRatio,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import {Menu as MenuIcon} from '@mui/icons-material';
import {navData, socialsData} from '@/app/data';

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

interface MenuDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({open, setOpen}) => {
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
      {navData.map(({text, href}, idx) => (
        <ListItemButton className='navbar-hover' key={idx} onClick={() => setOpen(false)}>
          <Link component={NextLink} href={href} key={idx} underline='none'
                sx={{color: 'inherit', fontSize: 'inherit'}}>
            <Typography level='subtitle-lg' fontWeight={400}>
              {text}
            </Typography>
          </Link>
        </ListItemButton>))}
    </List>
    <Divider/>
    <Stack direction='row' mr={2} spacing={2} justifyContent='center' py={4}>
      {socialsData.map(({Icon, href}, idx) => (<Link key={idx} href={href} target='_blank'>
          <Icon color='#33373D' width={25} height={25}/>
        </Link>))}
    </Stack>
  </Drawer>)
}

export default NavBar;