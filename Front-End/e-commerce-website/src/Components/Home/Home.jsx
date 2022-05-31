import { Link } from "react-router-dom";
import { SliderData } from "./Slider/SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import "./Home.css";

export const Home = () => {
  const[current,setCurrent]=useState(0);
  
  const nextSlide=()=>{
      setCurrent(current===SliderData.length-1 ? 0:current+1);
  }

  const prevSlide=()=>{
      setCurrent(current===0 ? SliderData.length-1:current-1)
  }

  console.log(current);

  if(SliderData.length<0){
      return null;
  }


  return (
    <div className="home-container">
      <div className="home-crousel-unique">

              {SliderData.map((elem,index) => {
              return( 
              <Link to={"/products"}>
                 <div>
                   <img className="home-image" src={elem.img} />
                 </div>
              </Link>
              )
             })}
          );
          </div>

      <div className="home-discount-container">
        <Link to="./products">
          <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/5d1b7ad3-c3ed-4ef9-a654-18231743d3cd1651484798059-Anouk-Inddus.jpg" />
        </Link>
        <Link to="./products">
          <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/f7575784-edbf-411f-acc0-51891ea7f4331651484798329-Inddus-_Varanga.jpg" />
        </Link>
        <Link to="./products">
          <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/ce40419d-6408-404e-9320-96e41aee1b791651484798300-Hrx-_Puma_-_More.jpg" />
        </Link>
        <Link to="./products">
          <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/44192c45-7393-4ede-a926-11f30b0b92a51651484798036-All.jpg" />
        </Link>
        <Link to="./products">
          <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/764761e7-c505-459e-92a2-6c4387f9e2511651484798319-Hush_Puppies-_Arrow.jpg" />
        </Link>
      </div>
      <div>
        <Link to="./products">
          {" "}
          <img
            height="200px"
            width="100%"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/ba07b5b3-ad1f-4800-8968-4b1bc000be191651897264745-Budget-Buys.jpg"
            alt="discount-image"
          />
        </Link>
      </div>
      <div className="home-discount-under-price">
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/19ec05fd-2288-4d94-826e-7c8e980ed90a1651475194672-T-Shirts--Men-.jpg"
            alt=""
          />
        </Link>
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/de547809-394d-4a2d-93c3-f63f5941710a1651475194235-Flats-_-Heels.jpg"
            alt=""
          />
        </Link>
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/24adafbb-843e-40b5-9da0-03704825c0db1651475194171-Beauty-Essentials.jpg"
            alt=""
          />
        </Link>
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/25a1ed95-5f3e-449a-8ca4-ca7128fbda241651475194660-Trousers.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="home-discount-different-category">
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/6c66c6c8-4faf-402c-8d3e-c6df2542c7441651897646996-Shop-by-Category---Desktop_35.jpg"
            alt=""
          />
        </Link>
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/9eb9df1c-6550-4e3b-bcdc-4461199d5fa31651897647004-Shop-by-Category---Desktop_36.jpg"
            alt=""
          />
        </Link>
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/c1bf0c63-41f9-421a-8b1d-bc863e827e551651897647011-Shop-by-Category---Desktop_37.jpg"
            alt=""
          />
        </Link>
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/fd942f38-2041-4b83-9d3c-7afdfcda7e871651897647018-Shop-by-Category---Desktop_38.jpg"
            alt=""
          />
        </Link>
        <Link to="./products">
          <img
            src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/eecd0f4e-c143-4b2e-9546-7e2b2ec1420e1651897647033-Shop-by-Category---Desktop_40.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
