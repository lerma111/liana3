import './Navbar.css'
import logo_liana from '../../kuvat/liana-logo/liana_logo.png'

const Navbar = () => {
  return (

    <div className='navbar'>
        <img src={logo_liana} alt="liana-logo" className='logo_liana'/>
        
        <div className='navbar-content'>
            <div className='text-style'>Company</div>
            <div className='text-style'>Products</div>
            <div className='text-style'>Contact Us</div>
        </div>

        <div className='text-style'>Search Placeholder</div>
        <div>
          <button className='search-button'><div className='button-text'>Search</div>
          </button>
        </div>
        


    </div>
  )
}

export default Navbar