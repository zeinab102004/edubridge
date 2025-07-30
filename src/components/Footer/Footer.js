import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from './Footer.css'
function footer() {
  return (
    <>
      <div className='footer-contens'>
        <Container maxWidth='md'>
            <section>
            <div className='section'>
             <h2>Gey In Touch</h2>
             <ul className='links'>
              <li>
             <p>Lorem Ipsum dolor sit amet</p>
             </li>
             </ul>
             <div className='icons'>
                <a href='#'><FacebookIcon/><TwitterIcon/><InstagramIcon/></a>
             </div>

            </div>
            <div className='section'>
             <h2>Company info</h2>
              <ul className='links'>
                <li>
             <a href='#' >About Us</a>
             </li>
             <li>
             <a href='#' >Carrier</a>
             </li>
             <li>
             <a href='#' >We are hirting</a>
             </li>
             <li>
             <a href='#' >Blog</a>
             </li>
             </ul>
            </div>
            <div className='section'>
             <h2>Features</h2>
              <ul className='links'>
                <li>
             <a href='#' >Business Marketing</a>
             </li>
             <li>
             <a href='#' >User Analytic</a>
             </li>
             <li>
             <a href='#' >Live Chat</a>
             </li>
             <li>
             <a href='#' >Unlimited Support</a>
             </li>
             </ul>
            </div>
            <div className='section'>
             <h2>Resoources</h2>
              <ul className='links'>
              <li>
             <a href='#' >IOS & Android</a>
             </li>
             <li>
             <a href='#' >Watch a Demo</a>
             </li>
             <li>
             <a href='#' >Customers</a>
             </li>
             <li>
             <a href='#' >API</a>
             </li>
             </ul>
            </div>
            </section>
        <div className='cobyright'>
           <p>
            &copy; 2025 | ALL right reserved made by {" "}
            <a href='#'><strong>Zeinab Ramadan</strong></a>
           </p>
        </div>
        </Container>
            </div>

    </>
  );
}

export default footer;
