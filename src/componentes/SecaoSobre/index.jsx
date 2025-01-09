import Image from "next/image";
import Loja from "../../../public/loja.png";
import Atendimento from "../../../public/atendimento.png";
import estilos from "./SecaoSobre.module.css";

export default function SecaoSobre() {
    return (
        <section id="sobre" className={estilos.container_sobre}>

            <div className={estilos.sobre_intro}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>
            </div>

            <div className={estilos.container_cards}>

                <div className={estilos.card}>
                    <Image src={Loja} alt="Loja" className={estilos.imagem} />
                </div>

                <div className={estilos.card}>
                    <div className={estilos.card_texto}>
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                </div>

                <div className={estilos.card}>
                    <div className={estilos.card_texto}>
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                </div>

                <div className={estilos.card}>
                    <Image src={Atendimento} alt="Atendimento" className={estilos.imagem} />
                </div>

            </div>
        </section>
    );
}