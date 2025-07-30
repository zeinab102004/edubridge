import review from './review.css';
import StarIcon from '@mui/icons-material/Star';
import person1 from './download (2).jpg'
import person2 from './images.jpg'
import person3 from './images (1).jpg'
import Container from '@mui/material/Container';
function Review() {
  return (
    <div id='review'>
      <Container maxWidth='md'>
    <div className='review-header'>
    <span>Practice Advice</span>
    <h2>Each and every client is important</h2>
    <p>education acessible education acessible education acessible education acessible education acessible education acessible education acessible education acessible education acessible </p>
    </div>
    <div className='reviews-contant'>
    <div className='review'>
    <div className='stars'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
    <p>aragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph</p>
    <div className='review-title'>
      <img src={person1} />
      <div className='title'>
        <h4 className='title-name'>Gamal Mahmoud</h4>
        <h3 className='title-job'>Softwarre Engineer</h3>
      </div>
      </div>
    </div>    
    <div className='review'>
    <div className='stars'><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
    <p>aragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph</p>
    <div className='review-title'>
      <img src={person2} />
      <div className='title'>
        <h4 className='title-name'>Omar Mahmoud</h4>
        <h3 className='title-job'>developer</h3>
      </div>
      </div>
    </div>    
    <div className='review'>
    <div className='stars'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
    <p>aragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph</p>
    <div className='review-title'>
      <img src={person3} />
      <div className='title'>
        <h4 className='title-name'>Islam Tarek</h4>
        <h3 className='title-job'>Designer</h3>
      </div>
      </div>
    </div>
    </div>
    </Container>
    </div>
  );
}

export default Review;
