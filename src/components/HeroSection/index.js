import React, { useState } from 'react'
// import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward,
  ArrowRight 
} from './HeroElements'

const HeroSection = () => {

  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={require('../../videos/video.mp4')} type= 'video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Fine Dining At Its Finest</HeroH1>
          <HeroP>
            Sign up for a new account today and enter to win 
            a $250 gift card towards your next purchase.
          </HeroP>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark ='true'>
              Learn More {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
