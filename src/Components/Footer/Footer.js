import facebook from '../../kuvat/Socials/facebook.png'
import linkedin from '../../kuvat/Socials/linkedin.png'
import twitter from '../../kuvat/Socials/twitter.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        
        <div className='footer-top'>   
            <div className='footer-header'>Liana Technologies</div>
            <div className='footer-top-links'>
                <div className='footer-text-links'>Company</div>
                <div className='footer-text-links'>Products</div>
                <div className='footer-text-links'>Contact Us</div>
                <div className='footer-text-links'>News</div>
                <div className='footer-text-links'>Intranet</div>
            </div>
        </div>

        <div className='footer-bottom'>
              <div className='footer-bottom-links'>
                <div className='footer-contact'>
                  <div className='contact-header'>Sales and inquiries</div>
                  <div className='squeeze'>Email: sales@lianatech.com</div>
                  <div className='squeeze2'>Phone: +358 10 387 7053</div>
                </div>
                <div className='button-div'><div className='footer-button'><div className='button-text'>Contact us</div></div></div>
                
                <div className='footer-socials'>
                  <img src={facebook} alt="facebook"/>
                  <img src={twitter} alt="twitter"/>
                  <img src={linkedin} alt="linkedin"/>
                </div>
              </div>
        </div>

      </div>

  )
}

export default Footer