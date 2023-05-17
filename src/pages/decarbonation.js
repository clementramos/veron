import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
export default function Expertise() {
  return (
    <>
      <Head>
        <title>UN&DEMI - La décarbonation : la choisir ou la subir</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full">
        <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
          La décarbonation : la choisir ou la subir
        </p>
        <p className="text-009999 mx-12 pt-2 text-2xl">
          {" "}
          <p className="text-009999  ml-2 pt-2 text-2xl">
            Renouvelable mon cher Watson ? <br></br>
            <br></br>Pour commencer clarifions ensemble ce terme que l&apos;on
            entend partout mais que l&apos;on ne comprend, au fond, pas
            vraiment. Si je vous disais que notre bonne vieille bibine préférée,
            le pétrole, était renouvelable, me prendriez-vous pour un fou ? Bon,
            et bien le pétrole est renouvelable. En effet, le pétrole se
            renouvelle naturellement, grâce à la décomposition du plancton sur
            le plancher océanique, en quelques dizaines de millions
            d&apos;années. Une notion de temporalité est donc à ajouter au côté
            de celle de renouvelable. Nous dirons donc plutôt : le pétrole
            n&apos;est pas une source d&apos;énergie renouvelable à
            l&apos;échelle de temps des activités humaines. Le vent, le soleil,
            la pluie sont quant à elles belle et bien renouvelables à
            l&apos;échelle de temps de nos activités. <br></br>
            <br></br>Je vous propose un peu de mathématique élémentaire. Prenons
            un stock naturel de ressource donné une foi pour toute (sans
            évolution sur la période d&apos;exploitation de cette dernière). Au
            commencement de l&apos;exploitation la quantité de ressource
            extraite de l&apos;environnement va doucement croître puis augmenter
            de façon plus ou moins importante en fonction de l&apos;intensité de
            l&apos;exploitation en question. Le stock donné une foi pour toute
            commence donc à baisser tranquillement sans conséquences notables.
            L&apos;exploitation de la ressource commence à devenir intensive. Un
            pic (un maximum) de production est alors atteint. Le stock est
            considérablement réduit et la production n&apos;est donc plus en
            mesure de suivre le même rythme. La quantité de ressource extraites
            de l&apos;environnement décroît alors jusqu&apos;à épuisement des
            stocks. <br></br>
            <br></br>Le pic de productivité du pétrole dit conventionnel,
            c&apos;est-à-dire tout ce qui n&apos;est pas sables bitumineux du
            Canada et pétrole de Schiste, est passé dans les alentours des
            années 2008. L&apos;Europe est passée depuis le début des années
            2000 dans une décrue subie d&apos;approvisionnement en pétrole.
            <br></br>
            <br></br> En Janvier 2024, plus de 50 000 entreprises françaises
            seront concernées par la nouvelle CSRD. 50 000 entreprises,
            contraintes par la règlementation, de mettre en œuvre le Bilan
            Carbone de leur société.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Image
              src="/Empreinte carbone France 2019.png"
              width={800}
              height={850}
              alt="article"
              className="mx-auto my-12"
            />
            <Image
              src="/2023-05-10_11h32_36.png"
              width={650}
              height={650}
              alt="article"
              className="mx-auto my-12"
            />
          </div>
          <p className="text-009999 italic ml-2 pt-12 text-2xl">
            Publié le 17/05/2023{" "}
          </p>
        </p>
        <button className="ml-12 mt-24 bg-009999 border rounded-md p-2">
          <Link href="/#articles" className="uppercase text-white">
            revenir aux articles{" "}
          </Link>{" "}
        </button>
      </div>
      <Footer />
    </>
  );
}
