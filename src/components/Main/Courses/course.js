import Container from '@mui/material/Container';
import course from './course.css'
import StarIcon from '@mui/icons-material/Star';
import Graphic from './images.jpg'
import Project from './images.jpg'
import Web from './images.jpg'


function Course() {
  return (
      <div id="course">
    <Container maxWidth='md'>

    <div className='course-header'>
    <span>Practice Advice</span>
    <h2>Make Online education acessible</h2>
    <p>education acessible education acessible education acessible education acessible education acessible education acessible education acessible education acessible education acessible </p>
    </div>

<div className='cards container'>
<div className='card-course'>
    <div className='card-img'>
        <img src={Graphic}/>
        <span>sale</span>
    </div>
    <div className='card-title'>
        <span>Graphic Disign</span>
        <span className='star'><StarIcon className='icon' />4.7</span>
    </div>
    <div className='card-content'>
       <h4>UI % UX Design</h4>
       <p> Graphic Disign Graphic Disign Graphic Disign Graphic Disign  Graphic Disign Graphic Disign Graphic Disign Graphic Disign  Graphic Disign Graphic Disign Graphic Disign Graphic Disign </p>
       <span className='sal'>80 sales</span>
      <div className='card-price'>
         <span>$11.99</span>
         <span className='col'>$4.99</span>
    </div>
    </div>
</div>
<div className='card-course'>
    <div className='card-img'>
        <img src={Project}/>
        <span>sale</span>
    </div>
    <div className='card-title'>
        <span>software Development</span>
        <span className='star'><StarIcon className='icon' />4.7</span>
    </div>
    <div className='card-content'>
       <h4>Project Design</h4>
       <p> Graphic Disign Graphic Disign Graphic Disign Graphic Disign  Graphic Disign Graphic Disign Graphic Disign Graphic Disign  Graphic Disign Graphic Disign Graphic Disign Graphic Disign </p>
       <span className='sal'>160 sales</span>
      <div className='card-price'>
         <span>$15.99</span>
         <span className='col'>$7.99</span>
    </div>
    </div>
</div> 
<div className='card-course'>
    <div className='card-img'>
        <img src={Web}/>
        <span>sale</span>
    </div>
    <div className='card-title'>
        <span>Graphic Disign</span>
        <span className='star'><StarIcon className='icon' />4.7</span>
    </div>
    <div className='card-content'>
       <h4>Graphic Disign</h4>
       <p> Graphic Disign Graphic Disign Graphic Disign Graphic Disign  Graphic Disign Graphic Disign Graphic Disign Graphic Disign  Graphic Disign Graphic Disign Graphic Disign Graphic Disign </p>
       <span className='sal'>80 sales</span>
      <div className='card-price'>
         <span>$11.99</span>
         <span className='col'>$4.99</span>
    </div>
    </div>
</div>
</div>
</Container>
</div>

  );
}

export default Course;
