import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import header from './Header.css'
function Header() {
  return (
<header id='header'>
    <nav className='navbar'>
        <a href="#" className="logo">Edubridge</a>
        <ul>
            <li>
                <a className="#">Home</a>
            </li>
            <li>
                <a className="#">Product</a>
                
            </li>
            <li>
                <a className="#">Pricing</a>
                
            </li>
            <li>
                <a className="#">Contact</a>
                
            </li>
        </ul>
        <div className="account">
            <a href="#" className="login">Login</a>
            <a href="#" className="btn-join" >Join Us <ArrowForwardIcon/></a>
        </div>
    </nav>
</header>
  );
}

export default Header;
