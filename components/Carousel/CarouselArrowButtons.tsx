'use client'

import React, { useCallback, useEffect, useState } from 'react'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import IconButton from '@mui/joy/IconButton';
import { Box } from '@mui/joy';

export const usePrevNextButtons = (emblaApi: any, onButtonClick: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

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

  const onSelect = useCallback((emblaApi: { canScrollPrev: () => any; canScrollNext: () => any; }) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export function PrevButton(onClick: any, disabled: boolean) {
  return (
    <Box p={1} sx={{cursor: 'pointer'}} onClick={onClick} aria-label='Previous Button'>
      <ExpandCircleDownOutlinedIcon className='light-white' sx={{transform: 'rotate(0.25turn)', fontSize: '3rem'}}/>
    </Box>
  )
}

export function NextButton(onClick: any, disabled: boolean) {
  return (
    <Box p={1} sx={{cursor: 'pointer'}} onClick={onClick} aria-label='Previous Button' >
    <ExpandCircleDownOutlinedIcon className='light-white' sx={{transform: 'rotate(-0.25turn)', fontSize: '3rem'}}/>
  </Box>
  )
}
