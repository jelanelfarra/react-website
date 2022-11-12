import { Component } from "react";
import {Carousel} from 'react-bootstrap';


class Home extends Component{
    render(){
        return(
            <Carousel className="carousel">
            <Carousel.Item className="carousel-inner" >
              <img
                className="d-block w-100"
                src="http://localhost:3000/static/media/slide1.dbb4dfaef642a270acf1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-inner">
              <img
                className="d-block w-100"
                src="http://localhost:3000/static/media/slide1.dbb4dfaef642a270acf1.jpg"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-inner">
              <img
                className="d-block w-100"
                src="http://localhost:3000/static/media/slide1.dbb4dfaef642a270acf1.jpg"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
export default Home ;