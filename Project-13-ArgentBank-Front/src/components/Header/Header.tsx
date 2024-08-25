import './Header.scss'
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom';

function Header() {

      return (
            <header className="header">
                  <Link className='header-logo'  to="/">
                        <img className='header-logo-img'  src={argentBankLogo} alt="Argent Bank Logo" />
                        <h1 className='sr-only'>Argent Bank</h1>
                  </Link>
                  <nav>
                        <Link className='header-nav'  to="/login">
                        <i className="fa fa-user-circle"></i>
                        <p className='header-nav-text'>Sign In</p>
                        </Link>
                        
                  </nav>
            </header>
      )
}

export default Header;

