import Header from "../Components/Header/header.jsx"
import ImageSegment from "../Components/ImageSegment/imageSegment.jsx"
import Explore from "../Components/Explore/explore.jsx"

function Models() {

  const title = `Os melhores\n modelos`

  const imageDescription = `Escolha a motorização de sua preferência 
e experimente o que há de mais moderno.`;

    return(
        <>
        <Header></Header>
        <ImageSegment 
        imgSrc={"./src/assets/models-segment.png"} 
        title={title} 
        description={imageDescription} 
        showButton={false}>
        </ImageSegment>
        <Explore></Explore>
        </>
    )
}

export default Models