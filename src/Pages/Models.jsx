import Header from "../Components/Header/header.jsx"
import ImageSegment from "../Components/ImageSegment/imageSegment.jsx"
import Footer from "../Components/Footer/footer.jsx"
import ExploreReduced from "../Components/Explore/exploreReduced.jsx" // Importar o novo componente

function Models() {

  const title = `Os melhores\n modelos`

  const imageDescription = `Escolha a motorização de sua preferência 
e experimente o que há de mais moderno.`;

  const title2 = `Pura \n Performance`

  const imageDescription2 = `A diferença motorizada na Carros Website diretamente para você. 
  Aproveite as ofertas e dirija o carro dos seus sonhos.`;
    return(
        <>
        <Header></Header>
        <ImageSegment 
        imgSrc={"./src/assets/models-segment.png"} 
        title={title} 
        description={imageDescription} 
        showButton={false}>
        </ImageSegment>
        <ExploreReduced exploreTitle={"Explore os modelos"}></ExploreReduced>
        <ImageSegment imgSrc={"./src/assets/models-segment-img-2.png"}
         title={title2} 
         description={imageDescription2} 
         button={"Compre aqui"}
         overlay={false}>
         </ImageSegment>
         <Footer></Footer>
        </>
    )
}

export default Models