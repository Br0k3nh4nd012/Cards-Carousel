import react from "react";
import "./carouselTest.css"
import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import yellow from "./img/yellow.png";
import pink from "./img/pink.png";
import pink2 from "./img/pink2.png"

class carouselTest extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{margin:'30px 10px'}}>
                <div style={{marginBottom:'0px'}}>
                    <h4>General Studies</h4>
                </div>
                <div style={{marginTop:'5px'}}>

                

            
            <Carousel>
                
  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>History</Card.Title>
    <Card.Text>
      In 19th century, evolution happened.Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>Politics</Card.Title>
    <Card.Text>
      election commission says "re-election" in tamilnadu.other details will be updtaed soon.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>geographics</Card.Title>
    <Card.Text>
      work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>
  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>Economics</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>civics</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>maps</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>

  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>xxx</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>YYY</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>ZZZ</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>
</Carousel>
</div>


<div style={{marginBottom:'0px'}}>
                    <h4>English</h4>
                </div>
                <div style={{marginTop:'5px'}}>

                

            
            <Carousel>
                
  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>Synonyms</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>Antonyms</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>Vocablory</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>
  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>Grammer</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>Tenses</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>Essays</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>
    </div>
    </div>
  </Carousel.Item>

  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>poetry</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>Drama</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>skit</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>
</Carousel>
</div>


<div style={{marginBottom:'0px'}}>
                    <h4>Mathematics</h4>
                </div>
                <div style={{marginTop:'5px'}}>

     <Carousel>
        <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>Algebra</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>calculus</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>probability</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>
  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>Statistics</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>Algorithms</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>prediction</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>

  <Carousel.Item >
      <div style={{width:'100%', display:'inline-flex'}}>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink} height="160px" />
  <Card.Body>
    <Card.Title>graph</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
      
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={yellow} height="160px"/>
  <Card.Body>
    <Card.Title>Geometry</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached..
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>
          <div style={{width:'33%',margin:'2%' }}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pink2} height="160px"/>
  <Card.Body>
    <Card.Title>analysis</Card.Title>
    <Card.Text>
    work hard until you achieve. Arise Awake and stop not till the goal is reached.
    </Card.Text>
   
  </Card.Body>
</Card>

          </div>

      </div>
  
  </Carousel.Item>
</Carousel>
</div>
</div>
         );
    }
}
 
export default carouselTest;