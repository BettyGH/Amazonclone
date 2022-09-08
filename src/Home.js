
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61668iSTDXL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Jasonwell Magnetic Tiles Kids Magnetic Blocks Building Sets 3D Magnet Tile Building Blocks Magna Construction Educational STEM"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81Og7qQ-pxL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Portable Blender,Travel Blender,Mini Blender,Personal Mixer Fruit Rechargeable with USB"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61OAx1THgaL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="1.7'' Phone Smart Watch Answer/Make Calls, Fitness Watch"
            price={46.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/712+lS1mk-L._AC_SY300_SX300_.jpg"
          />
          <Product
            id="23445930"
            title="Bedside Radio Alarm Clock with USB Charger, Bluetooth Speaker, QI Wireless Charging, Dual Alarm & Dimmable LED Display (Purple)"
            price={34.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71vhcnzRM0S._AC_SX679_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG CJ890 Series 49-Inch Ultrawide QHD (3840x1080) Computer Monitor, 144Hz, Curved, HDMI, USB-C"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Hh-0F7AbL._AC_SX679_.jpg"
          />
          <Product
            id="90829332"
            title="AMERIERGO Dual Monitor Stand -Adjustable Length and Angle Dual Monitor Riser, Computer Monitor Stand w/2 Slot, Desktop Organizer"
            price={36.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71HmxihPYoL._AC_SX425_.jpg"
          />
          <Product
            id="90829332"
            title="HoMedics Indoor 3-Tier Relaxation Tabletop Fountain, Automatic Pump with Power Switch, Extra Deep Basin with Natural River Rocks"
            price={26.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71gvpZYgPxS._AC_SX569_.jpg"
          />
          <Product
            id="90829332"
            title="Fancy Homi Pack of 2 Green Decorative Throw Pillow Covers with Pom-poms"
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71s5hyxMUOL._AC_SX679_.jpg"
          />
          
        </div>
        <Product
            id="90829332"
            title="SAMSUNG CJ890 Series 49-Inch Ultrawide QHD (3840x1080) Computer Monitor, 144Hz, Curved, HDMI, USB-C"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Hh-0F7AbL._AC_SX679_.jpg"
          />
        

      </div>
    </div>
  );
}

export default Home;