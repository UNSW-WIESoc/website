'use client'
import { Sheet, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { navData, socialsData } from '@/app/data';
import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface NavProps {
  title: string;
  navigateTo: Url;
  subData?: { text: string, href: string }[];
}

function SubMenu({ subData }: { subData: { text: string, href: string }[] }) {
  return (
    <Menu
      variant='plain'
      placement='bottom-start'
      sx={{
        borderRadius: '0px 10px 10px 10px', 
      }}
    >
      {subData.map(({text,href}, idx) => (
        <MenuItem
          key={idx}
          component={Link}
          href={href}
          className='navbar-hover'
          sx={{
            '&:hover': {
              borderLeft: '3px solid #33373D',
            },
            '&:focus': {
              outline: 'none',
            },
            zIndex: 1,
          }}
        >
          <Typography           
            level='subtitle-light'
            textAlign='left'
            sx= {{
              pl:'1px',
              pr:'1px',
              zIndex: 2
            }}
          >
              {text}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

function NavItem({ title, navigateTo, subData }: NavProps) {
  const activePage = usePathname();
  const hasSubMenu = subData && subData.length > 0;
  const [open, setOpen] = useState(false);
  const isOnButton = useRef(false);

  const handleMouseEnter = () => {
    setOpen(true);
    isOnButton.current = true;
  };

  const handleMouseLeave = () => {
    isOnButton.current = false;
    setTimeout(() => {
      if (!isOnButton.current) {
        setOpen(false);
      }
    }, 200);
  };

  return (
    <Dropdown
    open={open}
    onOpenChange={(_, isOpen) => {
      setOpen(isOpen);
    }}
    >
      <MenuButton
        component={Link}
        href={navigateTo}
        className='navbar-hover'
        variant='plain'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          alignContent: 'center',
          width: '100%',
          height: '100%',
          textDecoration: 'none',
          borderRadius: '1px',
          overflow: 'hidden',
          zIndex: 1, 
          '&:focus': {
            outline: 'none',
          },
          borderBottom: activePage === navigateTo ? '4px solid #33373D' : 'none',
        }}
      >
        <Typography
          level='subtitle-light'
          margin='auto'
          sx={{ textAlign: 'center', position: 'relative', zIndex: 2}}
        >
          {title}
        </Typography>
        {hasSubMenu && <ExpandMoreIcon sx={{ pt: 0.5, fontSize: '1.7rem', position: 'relative', zIndex: 2}} />}
      </MenuButton>
      {hasSubMenu && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SubMenu subData={subData} />
        </div>
      )}
    </Dropdown>
  );
}

export default function NavBar() {
  return (
    <Sheet sx={{ height: 80, display: { xs: 'none', lg: 'flex' } }}>
      <Stack width='100%' height='100%' boxShadow='md' direction='row' alignItems='center' px={2}>
        <Link href='/'>
          <Image src={'/wiesoc_logo_long.svg'} alt={'wiesoc-logo'} height={60} width={250} />
        </Link>
        <Stack direction='row' width='100%' height='100%' px={10}>
          {navData.map(({ text, href, subData }, idx) => (
            <NavItem title={text} navigateTo={href} subData={subData} key={idx} />
          ))}
        </Stack>
        <Stack direction='row' spacing={3} mx={3}>
          {socialsData.map(({ Icon, href }, idx) => (
            <Link key={idx} href={href} target='_blank'>
              <Icon color='#33373D' width={25} height={25} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Sheet>
  );
}