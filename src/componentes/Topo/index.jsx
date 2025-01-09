import Logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import estilos from './Topo.module.css';

function Topo() {
    return (
        <header className={estilos.container_topo}>

            <div className={estilos.conteudo_topo}>

                <Image src={Logo} alt="Logo" className={estilos.logo} />

                <div className={estilos.links_topo}>
                    <Link href="#produtos">PRODUTOS</Link>
                    <Link href="#sobre">SOBRE</Link>
                    <Link href="#contato">CONTATO</Link>
                </div>
            </div>
        </header>
    );
}

export default Topo;