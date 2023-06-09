import React from 'react';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide1 from '../../assets/img/Animation/bkanimation.mp4';
import Slide2 from '../../assets/img/darkmode.png';





const slide = () => {



	
	return (
	  <Carousel>
		<div className='btn_slide'>
		<div className='title_odd'>
		<h1>Omnichannel</h1>
		<h1>Data Driven</h1>
		<h1>Distinctive Development</h1>
		<p>Líderes en tecnología</p>
		<br />
		<Button className='btn_primary'>Conoce más</Button>
		</div>
		<video muted autoPlay loop>
  <source
    src ={Slide1} alt="Slide 1"
    type="video/mp4"
  />
</video>
</div>

<div className='btn_slide'>
		<div className='title_odd'>
		<h1>Omnichannel</h1>
		<h1>Data Driven</h1>
		<h1>Distinctive Development</h1>
		<p>Líderes en tecnología</p>
		<Button className='btn_primary'>Conoce más</Button>
		</div>
		
  
      <img src ={Slide2} alt="Logo"/>
    
    
  

</div>

	  </Carousel>
	);
  };
  export default slide;


  