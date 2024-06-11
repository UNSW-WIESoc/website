'use client'

import React, { useCallback } from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { Box } from '@mui/joy';

export const usePrevNextButtons = (emblaApi: any, onButtonClick: any) => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  return {
    onPrevButtonClick,
    onNextButtonClick
  }
}

type ArrowButtonProps = {
  type: 'prev' | 'next';
  onButtonClick: () => void;
}

export function CarouselArrowButton({type, onButtonClick} : ArrowButtonProps) {
  const rotation = type == 'prev' ? 'rotate(0.25turn)' : 'rotate(-0.25turn)'
  return (
    <Box
      p={5}
      display={{xs: 'none', sm: 'none', md: 'block'}}
      sx={{cursor: 'pointer'}}
      onClick={onButtonClick}
      aria-label={type == 'prev' ? 'previous-button' : 'next-button'}
    >
      <ExpandCircleDownOutlinedIcon className='light-white' sx={{transform: rotation, fontSize: '3rem'}}/>
    </Box>
  )
}
