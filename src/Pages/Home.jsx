import Header from '../Components/Header/header.jsx'
import ImageSegment from '../Components/ImageSegment/imageSegment.jsx'
import Explore from '../Components/Explore/explore.jsx'
import Services from '../Components/Services/services.jsx'
import Footer from '../Components/Footer/footer.jsx'

function Home() {

  const title = `Carros\nSeminovos`

  const imageDescription = `O veículo ideal para você com qualidade, \nconfiança e segurança na Carros Website.`;

  const title2 = `Conheça\nOs Serviços`;

  const imageDescription2 = `Todos os serviços da Carros Website em um\núnico lugar. Acesse agora a nossa página e\nconheça um mundo novo.`
  return (

    <>
      <Header></Header>
      <ImageSegment imgSrc={"./src/assets/car-segment-div.png"} title={title} description={imageDescription} button={"Encontre-os aqui"}></ImageSegment>
      <Explore></Explore>
      <Services></Services>
      <ImageSegment imgSrc={"./src/assets/exp-service-img.jpeg"} title={title2} description={imageDescription2} button={"Saiba mais"} ></ImageSegment>
      <Footer></Footer>
    </>
  )
}

export default Home
