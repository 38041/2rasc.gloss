import { useState } from 'react'
import './App.css'
import Liphoney from './assets/gloss-Liphoney.webp'
import bunny from './assets/gloss-bunny.webp'
import gloss from './assets/gloss-3.webp'
import banner from './assets/banner.webp'
import LOGO from './assets/logo.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <produtos
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}

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
              <img src={Liphoney} alt="" className="img-prod"/>
              <h2>GLOSS FRAN BY FRANCINY EHLKE LIPHONEY</h2>
              <p className="desc">Referência:   40103  Modelo/Marca:  Mboom</p>
              <p className="preco">R$ 69,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span>(472)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={gloss} alt="" className="img-prod"/>
              <h2>KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE</h2>
              <p className="desc">Referência:   12103 Modelo/Marca:   Mboom</p>
              <p className="preco">R$ 109,90</p>
              <div className="avaliacao">  <span>★ ★ ★ ☆ ☆</span>(128)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={bunny} alt="" className="img-prod"/>
              <h2>GLOSS FRAN BY FRANCINY EHLKE LIP BUNNY</h2>
              <p className="desc">Referência:   40104   Modelo/Marca:   Mboom</p>
              <p className="preco">R$ 65,90</p>
              <div className="avaliacao">  <span>★ ★ ★ ★ ★</span>(28)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

        </section>
        <section className="destaque">
           <iframe src="https://www.youtube.com/embed/3VKnbGeC2IE?autoplay=1&mute=1&controls=0&loop=1&playlist=3VKnbGeC2IE&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

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
