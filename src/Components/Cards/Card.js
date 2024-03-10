import './Card.css'

import bosch from '../../kuvat/References/bosch_logo.png'
import bodyshop from '../../kuvat/References/thebodyshop_logo.png'
import lapland from '../../kuvat/References/laplandhotels_logo.png'
import ikea from '../../kuvat/References/ikea_logo.png'


const Card = () => {
    return(

        <div>
        
        <div><h2 className='h2'>References</h2></div>
        
        <div className="cards">
            <div className='card1'>
                <div className='image-container'>
                    <img className="logo-image"src={bosch} alt="bosch logo"></img>
                </div>
                <div className='text-container'>
                    <h2 className="card-title">Robert Bosch</h2>
                    <p className="card-text">Bosch is a multinational engineering and electronics company.</p>
                </div>
        </div>

            <div className='card1'>
                <div className='image-container'>
                    <img className="logo-bodyshop"src={bodyshop} alt="bodyshop logo"></img>
                </div>
                <div className='text-container'>
                    <h2 className="card-title">The Body Shop</h2>
                    <p className="card-text">The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.</p>
                </div>
            </div>

            <div className='card1'>
                <div className='image-container'>
                    <img className="logo-image"src={lapland} alt="lapland logo"></img>
                </div>
                <div className='text-container'>
                    <h2 className="card-title">Lapland Hotels</h2>
                    <p className="card-text">Lapland hotels is the largest and the most diverse hotel chain in Lapland.</p>
                </div>
            </div>

            <div className='card1'>
                <div className='image-container'>
                <img className="logo-image"src={ikea} alt="ikea logo"></img>
                </div>
                <div className='text-container'>
                <h2 className="card-title">IKEA</h2>
                <p className="card-text">IKEA is a multinational furniture store.</p>
            </div></div>
        </div>
        </div>
    )
}

export default Card