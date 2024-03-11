import './Header.css'

const Header = () => {
  return (

    <div className='header-100vw'>
    <div className='header'>
        
        <div className='header-content'>
            <div className='header-text-style'>News</div>
            <div className='header-text-style'>Intranet</div>
            <select name="language-select" className='language'>
            <option value="english">English</option>
            <option value="finnish">Finnish</option>
            <option value="german">German</option>
           </select>

          </div>
        </div>

    </div>

  )
}

export default Header