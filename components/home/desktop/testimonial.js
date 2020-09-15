import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonial-container">
       <h2 className="testimonial-title">Testimonials</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/8ee9e0df6a57e6cb08ce8298364354c5/e704d184f63827dac2bd5d28_rw_1920.jpg?h=48128a946ac6a967fd45e0075979aa73" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>
        <div>
         <img src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/8ee9e0df6a57e6cb08ce8298364354c5/e704d184f63827dac2bd5d28_rw_1920.jpg?h=48128a946ac6a967fd45e0075979aa73" />
         <div className="myCarousel">
           <h3>Daniel Keystone</h3>
           <h4>Designer</h4>
           <p>
             The simple and intuitive design makes it easy for me use. I highly
             recommend Fetch to my peers.
           </p>
         </div>
       </div>

       <div>
         <img src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/8ee9e0df6a57e6cb08ce8298364354c5/e704d184f63827dac2bd5d28_rw_1920.jpg?h=48128a946ac6a967fd45e0075979aa73" />
         <div className="myCarousel">
           <h3>Theo Sorel</h3>
           <h4>Designer</h4>
           <p>
             I enjoy catching up with Fetch on my laptop, or on my phone when
             I'm on the go!
           </p>
         </div>
       </div>

       <div>
         <img src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/8ee9e0df6a57e6cb08ce8298364354c5/e704d184f63827dac2bd5d28_rw_1920.jpg?h=48128a946ac6a967fd45e0075979aa73" />
         <div className="myCarousel">
           <h3>Theo Sorel</h3>
           <h4>Designer</h4>
           <p>
             I enjoy catching up with Fetch on my laptop, or on my phone when
             I'm on the go!
           </p>
         </div>
       </div>
     </Carousel>
     </div>
   );
 }
}













// import React from 'react';
// import { Carousel } from 'antd';
//
// const Testimonials = () => {
//   return <div className="dk-home-outer-3-container">
//   <h1 className="dk-home-outer-3-title">Testimonials</h1>
//   <div className="container home-dk-testimonial-outer-container">
//             <Carousel autoplay>
//             <div className="home-dk-testimonial-inner-container">
//                <div className="row col justify-content-center">
//                  <div className="col-md-6 row justify-content-center">
//                     <img src="one.svg"  className="home-dk-testimonial-img"/>
//                     <div className="home-dk-testimonial-description">
//                      <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                     </div>
//                  </div>
//                  <div className="col-md-6  row justify-content-center">
//                     <img src="one.svg"  className="home-dk-testimonial-img"/>
//                     <div className="home-dk-testimonial-description">
//                      <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                     </div>
//                  </div>
//                </div>
//             </div>
//
//
//             <div className="home-dk-testimonial-inner-container">
//                <div className="row col justify-content-center">
//                  <div className="col-md-6 row justify-content-center">
//                     <img src="one.svg"  className="home-dk-testimonial-img"/>
//                     <div className="home-dk-testimonial-description">
//                      <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                     </div>
//                  </div>
//                  <div className="col-md-6  row justify-content-center">
//                     <img src="one.svg"  className="home-dk-testimonial-img"/>
//                     <div className="home-dk-testimonial-description">
//                      <h2 className="home-dk-testimonial-name">Aman Tiwari</h2>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                     </div>
//                  </div>
//                </div>
//             </div>
//
//             </Carousel>
//           </div>
//          </div>
// }
//
// export default Testimonials;
