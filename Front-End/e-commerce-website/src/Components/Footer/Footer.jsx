
import "./Footer.css";

export const Footer=()=>{



    return(
        <div className="footer-main">
           <div className="footer-online">
             <h4>ONLINE-SHOPPING</h4>
             <ul>
                 <li>Men</li>
                 <li>Women</li>
                 <li>Kids</li>
                 <li>Home & Living</li>
                 <li>Beuty</li>
                 <li>Gift-Cards</li>
                 <li>Myntra-Insider</li>
             </ul>
           </div>
           <div className="footer-usefull">
             <h4>USEFUL LINKS</h4>
             <ul>
                 <li>Contact Us</li>
                 <li>FAQ</li>
                 <li>T & C</li>
                 <li>Terms of Use</li>
                 <li>Track Orders</li>
                 <li>Shipping</li>
                 <li>Cancellation</li>
                 <li>Returs</li>
                 <li>Whitehat</li>
                 <li>Blogs</li>
                 <li>Carrers</li>
                 <li>Privacy Policy</li>
                 <li>Site Map</li>
                 <li>Corporate Information</li>
             </ul>
           </div>
           <div className="footer-usefull">
             <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
             <div className="footer-playstore">
                <img className="footer-playstore-image"
                 src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                <img className="footer-playstore-image"
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
             </div>
             <div>
                <h4>KEEP IN TOUCH</h4>
                <div className="footer-icons">
                    <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" />
                    <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" />
                    <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" />
                    <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" />
                </div>
             </div>
           </div>
           <div>
               <div className="footer-original">
                   <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
                   <h4>100% ORIGINAL <span className="footer-original-span">gurantee for all products at myntra.com</span></h4>
               </div>
               <div className="footer-thirty">
                   <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" />
                   <h4>Return Within 30days <span className="footer-original-span">of recievin your order</span></h4>
               </div>
           </div>
        </div>
    )
}