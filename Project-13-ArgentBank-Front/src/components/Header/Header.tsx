import './Header.scss'
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearToken, stateType } from '../../global-state/authSlice';
import CookieHandler from '../../utils/CookieHandler';

function Header() {
      const isAuthenticated = useSelector((state: stateType) => state.auth.isAuthenticated);
      const firstName = useSelector((state: stateType) => state.auth.firstName)
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleSignOut = () => {
            dispatch(clearToken());
            CookieHandler.eraseCookie('authToken');
            navigate('/');
      };

      return (
            <header className="header">
                <Link className='header-logo' to="/">
                    <img className='header-logo-img' src={argentBankLogo} alt="Argent Bank Logo" />
                    <h1 className='sr-only'>Argent Bank</h1>
                </Link>
                <nav className='header-nav'>
                  {isAuthenticated ? (
                        <>
                              <Link className='header-nav' to='/profile'>
                                    <i className="fa fa-user-circle header-nav-text"></i>
                                    <p className='header-nav-text'>{firstName === '' ? <span>User</span> : <span>{firstName}</span>}</p>
                              </Link>
                              <Link className='header-nav' to="/" onClick={handleSignOut}>
                                    <i className="fa fa-sign-out"></i>
                                    <p className='header-nav-text'>Sign Out</p>
                              </Link>
                        </>
                  ) : (
                        <Link className='header-nav' to="/login">
                              <i className="fa fa-user-circle"></i>
                              <p className='header-nav-text'>Sign In</p>
                        </Link>
                  )}
                </nav>
            </header>
        );
}

export default Header;
