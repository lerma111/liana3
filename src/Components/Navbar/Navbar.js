import './Navbar.css'
import logo_liana from '../../kuvat/liana-logo/liana_logo.png'

const Navbar = () => {
  return (
    <div className='navbar-100vw'>
    <div className='navbar'>
    
        <div className='navbar-content'>
            <img src={logo_liana} alt="liana-logo" className='logo_liana'/>
            
            <div className='navbar-text'>
                <div className='text-style'>Company</div>
                <div className='text-style'>Products</div>
                <div className='text-style'>Contact Us</div>
            </div>

            <input placeholder="Search" className='navbar-input' />
            <div>
              <button className='search-button'><div className='button-text'>Search</div>
              </button>
            </div>
          </div>

    </div>
    </div>
  )
}

export default Navbar