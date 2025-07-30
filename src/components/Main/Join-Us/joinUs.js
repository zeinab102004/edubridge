import JoinUs from './joinUs.css';
import Container from '@mui/material/Container';
function joinUs (){
    return(
        <div id="join-us">
        <Container maxWidth='sm'>
        <div className="join-us-header"> 
    <span>Practice Advice</span>
    <h2>Join Us</h2>
    <p> education acessible education
         acessible education acessible
          education acessible education 
          acessible education acessible 
          education acessible </p>
          <div className='emil'>
            <input placeholder='Your Email' type='email' name='email'
            id='email' />
            <button href='#'>Subscribe</button>
          </div>
        </div>
        </Container>
        </div>
    )
}


export default joinUs;

