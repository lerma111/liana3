import './Company.css'

import topleft from '../../kuvat/Triplakuvat/collaboration_left.png'
import topmid from '../../kuvat/Triplakuvat/products_mid.png'
import topright from '../../kuvat/Triplakuvat/contactus_right.png'
import bottomleft from '../../kuvat/Company_in_numbers/suitcase_left.png'
import bottommid from '../../kuvat/Company_in_numbers/face_mid.png'
import bottomright from '../../kuvat/Company_in_numbers/globe_right.png'

import { useSpring, animated} from "react-spring";

{/*number animation function*/}
function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 190,
            config: { mass: 1, tension: 22, friction: 12}, 
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }

{/*main content*/}
const Company = () => {
    return(
        <div className='company-container'>


                                {/*TOP ROW PICTURES*/}
            <div className="top-container">
                <div className='company-image-container'>
                    <div className='company-image-overlay'>
                            <a href='#' className="company-image-text">Collaboration</a>
                    </div>
                            <img className='company-image' src={topleft} alt="Collaboration"></img>
                </div>

                <div className='company-image-container'>
                    <div className='company-image-overlay'>
                            <a href='#' className="company-image-text">Products</a>
                    </div>
                            <img className='company-image' src={topmid} alt="Products"></img>
                </div>

                <div className='company-image-container'>
                    <div className='company-image-overlay'>
                            <a href='#' className="company-image-text">Contact Us</a>
                    </div>
                            <img className='company-image' src={topright} alt="Contact Us"></img>
                </div>
            </div>
                                {/*BOTTOM ROW ANIMATIONS*/}
                <div className='bottom-container'>
                        <div className='bottom-content-container'>
                                <div className='bottom-content-block'>
                                        <div className='content-block-image-container'><img className='client-image' src={bottomleft} alt="suitcase"></img> </div>
                                        <div className='numbers-block'>
                                                <div className='animated-number'>
                                                        <Number n={3000} />
                                                </div>
                                                <h1 className='number-text'>
                                                        Clients
                                                </h1>
                                        </div>
                                </div>
                        </div>

                        <div className='bottom-content-container'>
                                <div className='bottom-content-block'>
                                        <div className='content-block-image-container'><img className='client-image' src={bottommid} alt="face"></img> </div>
                                        <div className='numbers-block'>
                                                <div className='animated-number'>
                                                        <Number n={180} />
                                                </div>
                                                <h1 className='number-text'>
                                                        Employees
                                                </h1>
                                        </div>
                                </div>
                        </div>

                        <div className='bottom-content-container'>
                                <div className='bottom-content-block'>
                                        <div className='content-block-image-container'><img className='client-image' src={bottomright} alt="globe"></img> </div>
                                        <div className='numbers-block'>
                                                <div className='animated-number'>
                                                        <Number n={10000} />
                                                </div>
                                                <h1 className='number-text'>
                                                        Daily Users
                                                </h1>
                                        </div>
                                </div>
                        </div>
                </div>

            </div>
    )
}

export default Company

            {/* TRASH
            
            <div className='top-pictures'>
                    <h2 className='picture-text'>Collaboration</h2>
                    <img className="images"src={topleft} alt="collaboration"></img>
            </div>

            <div className='top-pictures'>
                    <h2 className='picture-text'>Pictures</h2>
                    <img className="images"src={topmid} alt="products"></img>
            </div>

            <div className='top-pictures'>
                    <h2 className='picture-text'>Contact Us</h2>
                    <img className="images"src={topright} alt="contact"></img>
            </div>*/}