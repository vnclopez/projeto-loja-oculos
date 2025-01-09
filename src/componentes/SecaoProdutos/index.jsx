import Image from 'next/image';
import Grau from '../../../public/oculos01.png';
import Transition from '../../../public/oculos02.png';
import Sol from '../../../public/oculos03.png';
import Infantil from '../../../public/oculos04.png';
import estilos from './SecaoProdutos.module.css';

export default function SecaoProdutos() {
    return (
        <section id="produtos" className={estilos.container_produtos}>

            <div className={estilos.produtos_intro}>
                <h3>Nossos produtos</h3>

                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>

                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>

            <div className={estilos.container_oculos}>
                <div className={estilos.card}>
                    <h4>Óculos de grau</h4>
                    <Image src={Grau} alt="Óculos de grau" className={estilos.imagem} />
                    <p>R$ 500,00</p>
                </div>

                <div className={estilos.card}>
                    <h4>Óculos transition</h4>
                    <Image src={Transition} alt="Óculos transition" className={estilos.imagem} />
                    <p>R$ 750,00</p>
                </div>

                <div className={estilos.card}>
                    <h4>Óculos de sol</h4>
                    <Image src={Sol} alt="Óculos de sol" className={estilos.imagem} />
                    <p>R$ 700,00</p>
                </div>

                <div className={estilos.card}>
                    <h4>Óculos infantil</h4>
                    <Image src={Infantil} alt="Óculos infantil" className={estilos.imagem} />
                    <p>R$ 500,00</p>
                </div>
            </div>

            <div className={estilos.produtos_vantagens}>
                <h3>Todos os nossos produtos incluem:</h3>

                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}