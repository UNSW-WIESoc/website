'use client'
import {Sheet, Stack, Typography} from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import {Url} from 'next/dist/shared/lib/router/router';
import {navData, socialsData} from '@/app/data';
import React from 'react';
import {usePathname} from "next/navigation";

interface NavProps {
  title: string;
  navigateTo: Url;
}

function NavItem({title, navigateTo}: NavProps) {
  const activePage = usePathname();
  return (<Stack component={Link} href={navigateTo} className='navbar-hover'
                 sx={{
                   alignContent: 'center',
                   width: '100%',
                   height: '100%',
                   textDecoration: 'none',
                   borderBottom: activePage === navigateTo ? '4px solid #33373D' : 'none',
                 }}>
      <Typography
        level='subtitle-light'
        margin='auto'
        sx={{textAlign: 'center'}}>
        {title}
      </Typography>
    </Stack>)
}

export default function NavBar() {
  return (
    <Sheet sx={{height: 80, 'display': {xs: 'none', lg: 'flex'}}}>
      <Stack width='100%' height='100%' boxShadow='md' direction='row' alignItems='center' px={2}>
        <Link href='/'>
          <Image src={'/wiesoc_logo_long.svg'} alt={'wiesoc-logo'} height={60} width={250}/>
        </Link>
        <Stack direction='row' width='100%' height='100%' px={10}>
          {navData.map(({ text, href }, idx) => (
            <NavItem title={text} navigateTo={href} key={idx}/>
          ))}
        </Stack>
        <Stack direction='row' spacing={3} mx={3}>
          {socialsData.map(({ Icon, href }, idx) => (
            <Link key={idx} href={href} target='_blank'>
              <Icon color='#33373D' width={25} height={25}/>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Sheet>)
}
