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
<<<<<<< HEAD

                <Link target="_blank" rel="noopener noreferrer" href="./cardapio/index.html">Faça Sua Encomenda</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://app.querodelivery.com/la-cacau-confeitaria">Quero Delivery</Link>

                <Link target="_blank" rel="noopener noreferrer" href="https://w.app/lacacauconfeitaria">Faça Sua Encomenda</Link>
=======
                <Link target="_blank" rel="noopener noreferrer" href="./cardapio/index.html">Faça Sua Encomenda</Link>
>>>>>>> 69e7b8995b619502c588befef206c5d91765d6c5
                <Link target="_blank" rel="noopener noreferrer" href="https://qro.go.link/enjrM">Quero Delivery</Link>

            </LinksBox>
        </Container>
    )
}



export default Home
