import React from 'react'
import Header from '../Header';
import main from '../mainamazon.jpg'
import '../styles/Home.css'
import Product from '../Product';

const Home = () => {
    return (
        <div>
        <Header />
        <div className='home'>
        <img className='home_image' src={main} />

        <div className='home_row'>
        <Product
        id="21821"
        title="Targeal Gaming Headset with Microphone - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S - 3.5mm Jack Gamer Headphone with Noise Canceling Mic - Camo"
        price={21.33}
        rating={4}
        image="https://m.media-amazon.com/images/I/71xQ8Eb3AIL._AC_SX679_.jpg"
        />
        <Product
        id="21822"
        title="ASUS Chromebook Flip C433 - Laptop 2 en 1, pantalla táctil FHD NanoEdge de 14 pulgadas, procesador Intel Core m3-8100Y, 8 GB de RAM, 64 GB de almacenamiento eMMC, teclado retroiluminado, plata, Chrome OS, C433TA-AS384T"
        price={369}
        rating={3}
        image="https://m.media-amazon.com/images/I/81cpLDD+SPL._AC_SX679_.jpg"
        />
        </div>
        </div>
        
        
        <div className='home_row'>
        <Product
        id="21824"
        title="Nike Air Force 1 Mid DO6290 100 - Blanco roto - Talla 11.5 para hombre, Blanco/transparente-blanco, 11.5"
        price={179}
        rating={5}
        image="https://m.media-amazon.com/images/I/71DYaeI8SHL._AC_UX695_.jpg"
        />
        <Product
        id="21827"
        title="Jordan Air Jordan 1 High OG DN4336 001 Stash para hombre, talla 11.5, Negro/Antracita-sail-off Noir, 11.5"
        price={229}
        rating={4}
        image="https://m.media-amazon.com/images/I/71mdGGwxyfL._AC_UX695_.jpg"
        />
        <Product
        id="21829"
        title="Champion Mochila Manuscript, forro polar verde con licencia oficial de star wars silent one crew., talla única"
        price={25.95}
        rating={3}
        image="https://m.media-amazon.com/images/I/81ufnyVk7tL._AC_SY879_.jpg"
        />
        </div>

        <div>
        <Product
        id="21820"
        title="Samsung de 85 pulgadas, clase Crystal, UHD, serie AU8000, 4K, UHD, HDR, Smart TV, con Alexa incorporada, (UN85AU8000FXZA, modelo 2021)."
        price={426.78}
        rating={4}
        image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX679_.jpg"
        />
        </div>
        </div>

        
    )
}

export default Home;