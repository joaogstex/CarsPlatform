import './footer.css'

function Footer() {
    return(
        <footer>
        <div className="logo">
            CARROS WEBSITE
        </div>
        <div className="links">
            <a href="#">Trabalhe conosco</a>
            <a href="#">Imprensa</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Termos de uso</a>
        </div>
        <div className="social-media">
            <a href="#"><img src='./src/assets/instagram.svg'></img></a>
            <a href="#"><img src='./src/assets/facebook.svg'></img></a>
            <a href="#"><img src='./src/assets/youtube.svg'></img></a>
            <a href="#"><img src='./src/assets/linkedin.svg'></img></a>
        </div>
        <div className="legal">
            <div className="copyright">
                Todos os direitos reservados - © 2020-{new Date().getFullYear()} Carros Website
            </div>
            <div className="compliance">
                Compliance &nbsp; | &nbsp; Alerta de golpe
            </div>
        </div>
    </footer>
)
}

export default Footer