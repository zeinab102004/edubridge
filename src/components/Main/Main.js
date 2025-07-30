
import Course from './Courses/course';
import Home from './Home/Home';
import Review from './Reviews/Review';
import JoinUs from './Join-Us/joinUs';
function Main() {
  return (
    <div className='container'>
   <Home/>
   <Course/>
   <Review/>
   <JoinUs/>
    </div>
  );
}

export default Main;
