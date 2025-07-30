import Main from "../Main.css";
import Container from '@mui/material/Container';
import Card from "./Card.js";
import { cardData } from "./data.js";
function Home() {
  return (
    <Container maxWidth='md'>
    <section id="home">
    <div className="home-header">
     <span>Join us</span>
     <h1>Best Learning Opportunities</h1>
     <p>Best Learning Opportunities Best Learning Opportunities Best Learning Opportunities Best Learning Opportunities</p>
        <a href="#" className="btn btn-red">Get Quote Now</a>
        <a href="#" className="btn btn-transparent">Lern More</a>
    </div>
    <div className="card-container">
      {cardData.map((card)=>{
        const {id,title,description,color,bgColor,img}=card
        return <Card key={id} title={title} description={description} bgColor={bgColor} color={color} img={img} />
      })}
    </div>
    </section>
    </Container>
  );
}

export default Home;