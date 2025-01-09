import Image from "next/image";
import Local from '../../../public/local.png';
import Telefone from '../../../public/telefone.png';
import Email from '../../../public/email.png';
import Facebook from '../../../public/fb.png';
import Instagram from '../../../public/ig.png';
import Twitter from '../../../public/tt.png';
import estilos from "./SecaoContatos.module.css";

export default function SecaoContatos() {
    return (
        <section id="contato" className={estilos.container_contatos}>

            <div className={estilos.contatos_intro}>
                <h3>Fale conosco</h3>

                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
            </div>

            <div className={estilos.container_cards}>

                <div className={estilos.card}>
                    <h4>Nossos Contatos</h4>

                    <div>
                        <Image src={Local} alt="Local" className={estilos.imagem} />
                        <span>Nova Iguaçu, RJ</span>
                    </div>

                    <div>
                        <Image src={Telefone} alt="Telefone" className={estilos.imagem} />
                        <span>(21) 9999-9999</span>
                    </div>

                    <div>
                        <Image src={Email} alt="Email" className={estilos.imagem} />
                        <span>contato@oticavida.com</span>
                    </div>

                </div>

                <div className={estilos.card}>
                    <h4>Nossas Redes Sociais</h4>

                    <div>
                        <Image src={Facebook} alt="Facebook" className={estilos.imagem} />
                        <span>/OticaVida</span>
                    </div>

                    <div>
                        <Image src={Instagram} alt="Instagram" className={estilos.imagem} />
                        <span>@oticavidarj</span>
                    </div>

                    <div>
                        <Image src={Twitter} alt="Twitter" className={estilos.imagem} />
                        <span>@oticavidarj</span>
                    </div>
                </div>

            </div>
        </section>
    );
}