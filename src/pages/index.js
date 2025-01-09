import Head from "next/head";
import Topo from "@/componentes/Topo";
import SecaoCapa from "@/componentes/SecaoCapa";
import SecaoProdutos from "@/componentes/SecaoProdutos";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoContatos from "@/componentes/SecaoContatos";
import Rodape from "@/componentes/Rodape";
import estilos from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas vida - Loja de óculos</title>
        <meta name="description" content="Home Page do site das Óticas vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topo />
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContatos />
      <Rodape />

    </>
  );
}
