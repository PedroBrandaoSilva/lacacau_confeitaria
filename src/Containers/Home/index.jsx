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
                <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/5575988471630?text=Ol%C3%A1!Gostaria%20de%20fazer%20um%20pedido!">Atendimento via Whatsapp</Link>

                <Link href="./cardapio/index.html">Cardápio à Pronta Entrega</Link>

                <Link target="_blank" rel="noopener noreferrer" href="https://qro.go.link/enjrM">Quero Delivery</Link>

            </LinksBox>
        </Container>
    )
}



export default Home
