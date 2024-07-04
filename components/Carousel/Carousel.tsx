'use client'

import React, { useCallback } from 'react';
import { CarouselDotButton, useDotButton } from './CarouselDotButtons';
import { CarouselArrowButton, usePrevNextButtons} from './CarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import EventsCard from '../EventsCard';
import { Box, Stack } from '@mui/joy';

interface CarouselProps {
  slides: Array<number>; // TODO:  Will need to be changed to suit slides data when connected to contentful
  options: any;
  size: 'large' | 'small';
}

export default function Carousel ({slides, options, size} : CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: { plugins: () => { (): any; new(): any; autoplay: any } }) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi, onNavButtonClick)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick)
  
  return (
    <Box mx={5} mb={6} justifyContent='center'>
      <Stack direction='row' sx={{justifyContent: 'center', alignItems: 'center'}}>
        <CarouselArrowButton type='prev' onButtonClick={onPrevButtonClick}/>
        <Box ref={emblaRef} sx={{overflow: 'hidden'}} width={{xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '60%'}}>
          <Stack
            direction='row'
            sx={{
              'backface-visibility': 'hidden',
              'touch-action': 'pan-y pinch-zoom'
            }}>
            {slides.map((_, index) => (
              <Box
              key={index}
                mr={2}
                sx={{flex: size == 'large'
                    ? {xs: '0 0 300px', sm: '0 0 400px'}
                    : '0 0 300px'
                }}>
                <EventsCard key={index}/>
              </Box>
            ))}
          </Stack>
        </Box>
        <CarouselArrowButton type='next' onButtonClick={onNextButtonClick} />
      </Stack>

      <Stack my={4} direction='row' justifyContent='center' width='100%' spacing={{xs: 1, sm: 1, md: 2}}>
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton key={index} selected={index == selectedIndex} index={index} onButtonClick={onDotButtonClick}/>
        ))}
      </Stack>
    </Box>
  )
}
