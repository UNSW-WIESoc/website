'use client'

import { Box } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'

export const useDotButton = (emblaApi: any, onButtonClick: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index: any) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi: { scrollSnapList: () => React.SetStateAction<never[]> }) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: { selectedScrollSnap: () => React.SetStateAction<number> }) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

export function DotButton(onClick: any) {
  const size = '15px'
  return (
    <Box height={size} width={size} className='bg-light-blue' onClick={onClick} sx={{cursor: 'pointer', borderRadius: '50%'}}></Box>
  )
}
