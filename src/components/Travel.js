import React from 'react';
import pic1 from '../images/pic1.png';
import pic3 from '../images/pic3.png';
import pic2 from '../images/pic2.png';
import { FaLocationDot } from "react-icons/fa6";

export default function Travel(item){
  return(
    <div className='wrapper'>
      <div className='section'>
        <img src={pic1} className='pic' alt='' />
      </div>
      <div className='location'>
        <FaLocationDot />
        <h6>JAPAN</h6>
        <h2 className='mount'>Mount Fuji</h2>
        <h6 className='date'>12 Jan 2021 - 24 Jan 2021</h6>
        <h4 className='text'>mount fuji is the tallest mountain in Japan standing at 3778
        <br></br>
        meters 12345 feet Mount fuji is the single most popular
        <br></br>
        tourist site in Japan and foreign tourist.</h4>
      </div>

      <div className='section'>
        <img src={pic3} className='pic' alt='' />
      </div>
      <div className='location'>
        <FaLocationDot />
        <h6>AUSTRALIA</h6>
        <h2 className='mount'>Sydney Opera House</h2>
        <h6 className='date'>27 May 2021 - 24 June 2021</h6>
        <h4 className='text'>The Sydney house is a multi-venue performing act center
        <br></br>
        in sydney. located on the bank of the sydney harbour. it is often regarded
        <br></br>
        as one of the 20th century most famous and distinctive buldings.</h4>
      </div>

      <div className='section'>
        <img src={pic2} className='pic' alt='' />
      </div>
      <div className='location'>
        <FaLocationDot />
        <h6>NORWAY</h6>
        <h2 className='mount'>Geirangerfjord</h2>
        <h6 className='date'>01 Oct 2021 - 24 Nov 2021</h6>
        <h4 className='text'>The Gieranger Fjord is a fjord in the sunnmore region of
        <br></br>
        more og Romsdal county, norway. it is located entirely in the stranda
        <br></br>
        municipality.</h4>
      </div>
    </div>
  )
}