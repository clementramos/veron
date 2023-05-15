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
        <title>UN&DEMI - La petite histoire énergie climat</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full">
        <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
          La &quot;petite&quot; histoire énergie climat
        </p>
        <p className="text-009999 mx-12 pt-2 text-2xl">
          {" "}
          <p className="text-009999  ml-2 pt-2 text-2xl">
            A partir du XVIII° siècle, l&apos;être humain commence
            l&apos;exploitation industrielle du charbon. Viendront par la suite
            celles du pétrole (1850) puis celle du gaz (1950). Ces énergies
            primaires sont remarquablement concentrées. Elles nous ont permis
            d&apos;accéder à l&apos;abondance énergétique. Cette dernière est la
            cause profonde de l&apos;explosion de la démographie mondiale, de
            l&apos;augmentation de l&apos;espérance de vie, de
            l&apos;augmentation du pouvoir d&apos;achat et de l&apos;émergence
            de la classe moyenne supérieure. Lors de leur combustion
            (utilisation) ces énergies primaires fossiles émettent du gaz
            carbonique (CO2). Cette molécule est un gaz à effet de serre.
            L&apos;effet de serre est un phénomène naturel par lequel certains
            gaz présents dans l&apos;atmosphère retiennent la chaleur en
            absorbant le rayonnement infra-rouge émis par la Terre. Ce phénomène
            a permis l&apos;apparition de la vie sur Terre mais aujourd&apos;hui
            l&apos;être humain ajoute à ce phénomène naturel une composante que
            l&apos;on appelle « effet de serre additionnel ». Par ses activités
            et plus précisément son recours massif à l&apos;utilisation
            d&apos;énergie d&apos;origine fossile, l&apos;être humain extrait
            des hydrocarbures (molécules composées d&apos;atomes de carbone et
            d&apos;hydrogène) du sol de la Terre et en les exploitant, rejette
            du CO2 dans l&apos;atmosphère. Le bilan énergétique de la Terre est
            alors déséquilibré. La température moyenne globale de la planète
            augmente et les phénomènes climatiques extrêmes voient leur
            intensité et leur fréquence s&apos;accentuer. L&apos;être humain a,
            à ce jour, rejeté dans l&apos;atmosphère près de 2 500 Gt de CO2
            depuis 1850 augmentant par voie de conséquence la température
            moyenne globale de la Terre de +1.2 °C par rapport à l&apos;aire
            préindustrielle. Dans ce contexte, comment maintenir un confort de
            vie digne et serein ? Il est urgent d&apos;agir en transformant
            notre mode de vie, en réduisant drastiquement nos émissions de gaz à
            effet de serre, en stoppant la destruction du vivant qui est à
            l&apos;œuvre.
          </p>
          <p className="text-009999 italic ml-2 pt-12 text-2xl">
            Publié le 15/05/2023{" "}
          </p>
        </p>
        <button className="ml-12 mt-24 bg-009999 border rounded-md p-2">
          <Link href="/articles" className="uppercase text-white">
            revenir aux articles{" "}
          </Link>{" "}
        </button>
      </div>
      <Footer />
    </>
  );
}
