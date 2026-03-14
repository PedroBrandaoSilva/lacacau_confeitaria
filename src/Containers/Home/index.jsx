import Image from "../../assets/logo/logo_lacacau.jpg"
import { Container, LinksBox, Link, Upside, LogoImage } from "./styles"

function Home() {
    return (
        <Container>
            <Upside className="upside">
                <LogoImage src={Image} alt="Logo La Cacau" />
                <div>

                    <h2>@</h2>
                    <h2>lacacau_confeitaria</h2>

                </div>
            </Upside>
            <LinksBox className="links">
                <Link target="_blank" rel="noopener noreferrer" href="./cardapio.pdf">Cardápio de Páscoa</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://w.app/lacacau_confeitaria">Atendimento via Whatsapp</Link>
                <Link target="_blank" rel="noopener noreferrer" href="./public/cardapio/index.html">Faça Sua Encomenda</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://qro.go.link/enjrM">Quero Delivery</Link>
            </LinksBox>
        </Container>
    )
}



export default Home
