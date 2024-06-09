'use client'

import { Box } from '@mui/joy';
import React, { useCallback, useEffect, useState } from 'react';

export const useDotButton = (emblaApi: any, onButtonClick: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index: number) => {
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

type DotButtonProps = {
  selected: boolean;
  index: number;
  onButtonClick: (index: number) => void;
}

export function CarouselDotButton({selected, index, onButtonClick} : DotButtonProps) {
  const maxSize = '10px';
  const minSize = '8px';
  return (
    <Box
      height={{xs: minSize, md: maxSize}}
      width={{xs: minSize, md: maxSize}}
      className={selected ? 'bg-dark-blue' : 'bg-light-blue'}
      onClick={() => onButtonClick(index)}
      sx={{cursor: 'pointer', borderRadius: '50%'}}
    />
  )
}
