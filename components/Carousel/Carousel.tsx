'use client'

import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './CarouselDotButtons'
import { PrevButton, NextButton, usePrevNextButtons} from './CarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import EventsCard from '../EventsCard'
import { Box, Stack } from '@mui/joy'

interface CarouselProps {
  slides: Array<number>; // TODO:  Will need to be changed to suit slides data when connected to contentful
  options: any;
}

export default function Carousel ({slides, options} : CarouselProps) {
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

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <Box m={5} mt={2}>
      <Stack direction='row' spacing={5} sx={{justifyContent: 'center', alignItems: 'center'}}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <Box sx={{overflow: 'hidden'}} ref={emblaRef} width={{xs: '90%', sm: '90%', md: '80%', lg: '70%', xl: '60%'}}>
          <Stack
            direction='row'
            spacing={1}
            sx={{
              'backface-visibility': 'hidden',
              'touch-action': 'pan-y pinch-zoom'
            }}>
            {slides.map((_, index) => (
              <EventsCard key={index}/>
            ))}
          </Stack>
        </Box>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </Stack>

      <Stack my={2} direction='row' spacing={2} justifyContent='center'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )} children={undefined}            />
        ))}
      </Stack>
    </Box>
  )
}