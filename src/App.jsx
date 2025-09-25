import { useState } from 'react'
import './App.css'
import Carmy from './assets/love-kit01.webp'
import Cjoa from './assets/lip-bunny01.webp'
import Curs from './assets/honey.webp'
import Slider1 from './assets/banner1.webp'
import Slider2 from './assets/banner2.png'
import Slider3 from './assets/banner3.webp'
import Slider4 from './assets/banner4.jfif'
import Logo from './assets/lOGO1.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">GLOSS FRAN BY FRANCINY EHLKE LIPHONEYa</h2>
              <p className="desc">Referência:   40103  Modelo/Marca:  Mboom)</p>
              <p className="preco">R$ 69,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE</h2>
              <p className="desc">Referência:   12103 Modelo/Marca:   Mboom</p>
              <p className="preco">R$ 109,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">GLOSS FRAN BY FRANCINY EHLKE LIP BUNN</h2>
              <p className="desc">Referência:   40104   Modelo/Marca:   Mboom</p>
              <p className="preco">R$ 65,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          </section>
        <section className="destaque">
           <iframe src="https://www.youtube.com/embed/sdmX9QL_rtU?autoplay=1&mute=1&controls=0&loop=1&playlist=sdmX9QL_rtU&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

          <iframe src="https://www.youtube.com/watch?v=1OalUfTGmWA" frameborder="0" allow="autoplay; fullscreen"></iframe>
          <iframe src="" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>

          <img src={Logo} alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
