import "./navbarmenu.css";
import {Link} from "react-router-dom";

export const NavbarMenu = () => {
  const handlenavbar=(element)=>{
    document.getElementById(element).style.display = "none"
  }

  return (
    <div className="navbarmenu">
      <div>
        <div className="navbar-menu-mens-l1">
          Mens
          <div className="navbar-menu-mens">
            <div className="navbar-menu-mens-two">
            <div>
              <h3>TopWear</h3>
              <ul>
                <Link onClick={handlenavbar}  className="navbar-link" to="/products">T-Shirts</Link>
                <Link onClick={handlenavbar}  className="navbar-link" to="/products">Casual-Shirts</Link>
                <Link  onClick={handlenavbar} className="navbar-link" to="/products">Formal-Shirt</Link>
                <Link  onClick={handlenavbar} className="navbar-link" to="/products">SweatShirts</Link>
                <Link  onClick={handlenavbar} className="navbar-link" to="/products">Sweater</Link>
                <Link  onClick={handlenavbar} className="navbar-link" to="/products"> Jackets</Link>
                <Link  onClick={handlenavbar} className="navbar-link" to="/products">Blazer & Coats</Link>
                <Link  onClick={handlenavbar} className="navbar-link" to="/products">RainCoats</Link>
              </ul>
            </div>
            <div>
              <h3>Indian and Festive year</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Kurta & Kurtas Set</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sherwanis</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Nehru Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Dhotis</Link>
              </ul>
            </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>BottomWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jeans</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Shorts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">TrackPants & Trousers</Link>
                </ul>
              </div>
              <div>
                <h3>Innerwear & SleepWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Brief & Thunks</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Boxers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Vests</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">SleepWear & LongeWear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Thermals</Link>
                </ul>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Shoes</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Socks</Link>
                </ul>
              </div>
              <div>
                <h3>Personal-Care & Groomings</h3>
                <h3>Sunglasses & Frames</h3>
                <h3>Watches</h3>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Sports and Active-Wear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets & SweatShirts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports-Activewear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Swimwear</Link>
                </ul>
              </div>
              <div>
                <h3>Gadgets</h3>
                <ul>
                 <Link onClick={handlenavbar} className="navbar-link" to="/products">Smart Wearable</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Fitness Gadgets</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">HeadPhones</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>Womens
        <div className="navbar-menu-women">
            <div className="navbar-menu-mens-two">
            <div>
              <h3>Indian & Fusion Wear</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">T-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal-Shirt</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">SweatShirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sweater</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Blazer & Coats</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">RainCoats</Link>
              </ul>
            </div>
            <div>
              <h3>Indian and Festive year</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Kurta & Kurtas Set</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sherwanis</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Nehru Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Dhotis</Link>
              </ul>
            </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>BottomWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jeans</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Shorts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">TrackPants & Trousers</Link>
                </ul>
              </div>
              <div>
                <h3>Innerwear & SleepWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Brief & Thunks</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Boxers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Vests</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">SleepWear & LongeWear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Thermals</Link>
                </ul>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Shoes</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Socks</Link>
                </ul>
              </div>
              <div>
                <h3>Personal-Care & Groomings</h3>
                <h3>Sunglasses & Frames</h3>
                <h3>Watches</h3>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Sports and Active-Wear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets & SweatShirts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports-Activewear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Swimwear</Link>
                </ul>
              </div>
              <div>
                <h3>Gadgets</h3>
                <ul>
                 <Link onClick={handlenavbar} className="navbar-link" to="/products">Smart Wearable</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Fitness Gadgets</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">HeadPhones</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>Kids
        <div className="navbar-menu-kids">
            <div className="navbar-menu-mens-two">
            <div>
              <h3>TopWear</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">T-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal-Shirt</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">SweatShirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sweater</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Blazer & Coats</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">RainCoats</Link>
              </ul>
            </div>
            <div>
              <h3>Indian and Festive year</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Kurta & Kurtas Set</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sherwanis</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Nehru Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Dhotis</Link>
              </ul>
            </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>BottomWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jeans</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Shorts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">TrackPants & Trousers</Link>
                </ul>
              </div>
              <div>
                <h3>Innerwear & SleepWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Brief & Thunks</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Boxers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Vests</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">SleepWear & LongeWear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Thermals</Link>
                </ul>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Shoes</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Socks</Link>
                </ul>
              </div>
              <div>
                <h3>Personal-Care & Groomings</h3>
                <h3>Sunglasses & Frames</h3>
                <h3>Watches</h3>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Sports and Active-Wear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets & SweatShirts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports-Activewear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Swimwear</Link>
                </ul>
              </div>
              <div>
                <h3>Gadgets</h3>
                <ul>
                 <Link onClick={handlenavbar} className="navbar-link" to="/products">Smart Wearable</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Fitness Gadgets</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">HeadPhones</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>Home
        <div className="navbar-menu-kids">
            <div className="navbar-menu-mens-two">
            <div>
              <h3>TopWear</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">T-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal-Shirt</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">SweatShirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sweater</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Blazer & Coats</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">RainCoats</Link>
              </ul>
            </div>
            <div>
              <h3>Indian and Festive year</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Kurta & Kurtas Set</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sherwanis</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Nehru Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Dhotis</Link>
              </ul>
            </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>BottomWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jeans</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Shorts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">TrackPants & Trousers</Link>
                </ul>
              </div>
              <div>
                <h3>Innerwear & SleepWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Brief & Thunks</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Boxers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Vests</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">SleepWear & LongeWear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Thermals</Link>
                </ul>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Shoes</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Socks</Link>
                </ul>
              </div>
              <div>
                <h3>Personal-Care & Groomings</h3>
                <h3>Sunglasses & Frames</h3>
                <h3>Watches</h3>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Sports and Active-Wear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets & SweatShirts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports-Activewear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Swimwear</Link>
                </ul>
              </div>
              <div>
                <h3>Gadgets</h3>
                <ul>
                 <Link onClick={handlenavbar} className="navbar-link" to="/products">Smart Wearable</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Fitness Gadgets</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">HeadPhones</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>Beauty 
        <div className="navbar-menu-living">
            <div className="navbar-menu-mens-two">
            <div>
              <h3>TopWear</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">T-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal-Shirt</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">SweatShirts</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sweater</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Blazer & Coats</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">RainCoats</Link>
              </ul>
            </div>
            <div>
              <h3>Indian and Festive year</h3>
              <ul>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Kurta & Kurtas Set</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Sherwanis</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Nehru Jackets</Link>
                <Link onClick={handlenavbar} className="navbar-link" to="/products">Dhotis</Link>
              </ul>
            </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>BottomWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jeans</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual Trouser</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Shorts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">TrackPants & Trousers</Link>
                </ul>
              </div>
              <div>
                <h3>Innerwear & SleepWear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Brief & Thunks</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Boxers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Vests</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">SleepWear & LongeWear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Thermals</Link>
                </ul>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Shoes</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Socks</Link>
                </ul>
              </div>
              <div>
                <h3>Personal-Care & Groomings</h3>
                <h3>Sunglasses & Frames</h3>
                <h3>Watches</h3>
              </div>
            </div>
            <div className="navbar-menu-mens-two">
              <div>
                <h3>Sports and Active-Wear</h3>
                <ul>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Casual-Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Formal Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports Shoes</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sneakers</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sandals & Loaters </Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Flip-Flops</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Jackets & SweatShirts</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Sports-Activewear</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Swimwear</Link>
                </ul>
              </div>
              <div>
                <h3>Gadgets</h3>
                <ul>
                 <Link onClick={handlenavbar} className="navbar-link" to="/products">Smart Wearable</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">Fitness Gadgets</Link>
                  <Link onClick={handlenavbar} className="navbar-link" to="/products">HeadPhones</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>Studio
           <div className="navbar-menu-studio">
           <img height="300px" width="60%"
           src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"/>
           </div>
        </div>
      </div>
    </div>
  );
};
