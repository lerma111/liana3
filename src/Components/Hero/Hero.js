
import './Hero.css'
import hero from '../../kuvat/hero_background2.jpg'

import {Parallax} from 'react-parallax'

const Hero = () => {
  return (
    <div className="hero">
        <Parallax strength={600} bgImage={hero}>
            <div className="content">

              <div className='hero-content'>
                
                <div>Software fueling digital marketing</div>               
                <div>
                <button className='search-button'> <div className='button-text'>Learn More</div></button>
                </div>

              </div>

            </div>
        </Parallax>
    </div>
  )
}

export default Hero