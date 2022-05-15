import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MenuBookIcon from '@mui/icons-material/MenuBook';


import "./IndividualPage.css";

export const IndividualPage=()=>{
   const[size,setSize]=useState(null);
   const[ind,setInd]=useState({});
   const {id}=useParams();

   useEffect(()=>{
       datafn();
   },[]);

   const datafn=()=>{
       axios.get(`http://localhost:2345/products/${id}`).then(({data})=>{
           console.log(data);
           setInd(data[0]);
       }).catch((err)=>{
           console.log(err.message);
       });
   }

   const handleClick=(e)=>{
       console.log(size);
       if(size){
           document.getElementById(size).style.color="black";
       }
       setSize(e.target.id);
       const sizes=[];
       document.getElementById(e.target.id).style.color='pink';
   }

    return(
        <div>
           <div className="individual-page-data">
               <div className="individual-page-data-left">
                  <img src={ind.url}/>
                  <img src={ind.url1}/>
                  <img src={ind.url2}/>
                  <img src={ind.url3}/>
               </div>
               <div className="individual-page-data-right">
                   <div className="individual-page-data-right-first">
                    <h1>{ind.brand}</h1>
                    <p>{ind.title}</p>
                    <div className="individual-page-data-right-rating">
                        {`${ind.rating} Ratings`}
                    </div>
                    <hr className="individual-page-data-right-horizontal"/>
                   </div>
                   <div className="individual-page-data-right-price">
                      <h2>{`Rs ${ind.price}`}</h2>
                      <p className="individual-page-data-right-mrpprice">{`Rs ${ind.mrpPrice}`}</p>
                      <p>{`(${ind.discount}% OFF)`}</p>
                   </div>
                   <p id="individual-page-data-right-price-inclusive"
                style={{
                    color:"green",
                    marginTop:"-15px",

                }}>
                       inclusive of all taxes
                   </p>
                <div className="individual-page-data-right-size">
                    <div id="L"
                     onClick={handleClick}>L</div>
                    <div id="M" 
                    onClick={handleClick}>M</div>
                    <div id="XL" 
                    onClick={handleClick}>XL</div>
                    <div id="XXL"
                     onClick={handleClick}>XXL</div>
                </div>
                <div className="individual-page-data-right-delivery">
                   <h4>DELIVERY OPTIONS</h4>
                   <LocalShippingIcon className="individual-page-data-right-truck"/>
                </div>
                <div className="individual-page-data-right-shipping"> 
                    <LocalShippingIcon fontSize="large"/>
                    <h3>{`Get it By ${new Date().toLocaleDateString()}`}</h3>
                </div>
                <div 
                style={{
                    margin:"40px 0px",
                    display: "flex",
                }}> 
                    <img height="34px" width="50px"
                     src="https://img.icons8.com/dotty/2x/money.png"/>
                    <h3 style={{
                        margin:"6px 20px"
                    }}>Pay on Delivery Option is not Available</h3>
                </div>
                <div style={{
                    margin:"-20px 0px",
                    display: "flex",
                    gap:"20px"
                }}
                > 
                    <CurrencyExchangeIcon fontSize="large"/>
                    <h3 className="image.png-exchange">Easy 30 days return & exchange available</h3>
                    <h3 className="individual-exchange">More Info {">"}</h3>
                </div>
                <p>100 % Orignal Products</p>

                {/* Best Offers Div */}

                <div className="individual-best-offers">
                    <div className="individual-best-offers-tag">
                       <h4>BEST OFFERS </h4>
                       <LocalOfferIcon style={{
                           margin:"18px opx"
                       }}/>
                    </div>
                    <h4 className="individual-best-offers-tag-small">Best Price: <span style={{
                        color:"#ff905a"
                    }}>{`Rs ${ind.price}`}</span></h4>
                    <ul className="individual-best-offers-ul">
                       <li>Applicable on: Orders above Rs. 2499 (only on first purchase)</li>
                       <li>Coupon code: <span>MYNTRA400</span></li>
                       <li>Coupon Discount: Rs. 79 off (check cart for final savings)</li>
                    </ul>
                    <p className="individual-best-offers-eligible">View Eligible Products</p>
                    <h3>10% Instant Discount on Kotak Cards</h3>
                    <ul className="individual-best-offers-ul-2nd">
                        <li>Min spend Rs 3,000; Max discount Rs 1,000. TCA</li>
                    </ul>
                    <p className="individual-best-offers-eligible-2nd">View Eligible Products</p>
                    <h3>EMI option available</h3>
                    <ul className="individual-best-offers-ul-3rd">
                        <li>MI starting from Rs.24/month</li>
                    </ul>
                    <p className="individual-best-offers-eligible-plan">View Plan</p>
                </div>
                <hr />


                {/* Products Details */}

                <div className="individual-product-details">
                     <div className="individual-product-details-heading">
                           <h3>PRODUCT DETAILS </h3>
                           <MenuBookIcon style={{
                               margin:"20px 20px",
                           }}/>
                     </div>
                     <p className="individual-product-details-info">White and Blue printed casual shirt, has a spread collar, short sleeves,
                         button placket, curved hem, and 1 patch pocket</p>
                     <h3>Size & Fit </h3>   
                     <p className="individual-product-details-size">Slim fit</p>
                     <p className="individual-product-details-size">The model (height 6') is wearing a size 40</p>
                </div>
               </div>
           </div>
        </div>
    )
}