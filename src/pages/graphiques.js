import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Expertise() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -250 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Head>
        <title>UN&DEMI - Energie climat en graphiques</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full sm:px-2 px-64 sm:px-12">
        {" "}
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{
            type: "linear",
            duration: "1",
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="text-009999 text-4xl font-bold uppercase pt-12 mb-12 sm:text-center">
            Energie climat en graphiques
          </p>
          <p className="text-009999 laptop:mx-12 pt-2 text-2xl">
            <ol className="list-decimal grid grid-cols-2 gap-5">
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  La population mondiale explose à partir du XVIII° siècle en
                  passant de 1 milliard à 8 milliards d&apos;être humain sur
                  Terre en 200 ans (+7 milliards). Elle est pourtant passée de
                  100 millions d&apos;âmes à 1 milliard en 2800 ans (+ 900
                  millions). Ce phénomène est la conséquence directe de la
                  révolution industrielle débuté en 1776 lors de
                  l&apos;invention de la machine à vapeur par James Watt. La
                  machine à vapeur fonctionne au charbon.
                </p>
                <Image
                  className="pt-5 pb-12 sm:mx-auto"
                  src="/population mondiale.png"
                  alt="evolution mondiale"
                  width={800}
                  height={200}
                />
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  L&apos;énergie primaire consommée dans le monde explose de la
                  même façon à partir des années 1850. Elle est composée
                  aujourd&#39;hui à 80% d&apos;énergie fossile issue de matières
                  premières non-renouvelables à l&apos;échelle des temps
                  humains. Le pétrole, le charbon et le gaz. Ces derniers
                  émettent du dioxyde de carbone CO2 lors de leur combustion.
                </p>
                <Image
                  className="pt-5 pb-12 sm:mx-auto"
                  src="/2023-05-10_11h32_36.png"
                  alt="énérgies"
                  width={800}
                  height={200}
                />
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  Le PIB est un indicateur économique permettant d&apos;évaluer
                  la production de biens et de services. Il revient à calculer
                  la rémunération annuelle de l&apos;ensemble de
                  l&apos;humanité. Le PIB par personne a été multiplié par plus
                  de 14 entre 1820 et 2018 (en à peine moins de 200 ans).
                </p>
                <Image
                  className="pt-5  sm:mx-auto"
                  src="/PIB mondial World on data.png"
                  alt="pib"
                  width={800}
                  height={200}
                />
                <p className="text-sm italic pb-12 text-gray-500 text-sm">
                  Source : World Bank
                </p>
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  Le graphique ci-dessous démontre la proportionnalité entre
                  l&apos;évolution du PIB mondiale et celle de la consommation
                  d&apos;énergie. « Donnez-moi le PIB mondial sur une année
                  donnée, je vous donnerai la quantité d&apos;énergie que vous
                  avez employé sur cette même année »
                </p>
                <Image
                  className="pt-5 sm:mx-auto"
                  src="/thumbnail_image.png"
                  alt="evolution mondiale"
                  width={800}
                  height={200}
                />
                <p className="text-sm italic pb-12 text-gray-500 text-sm">
                  Source : The shift Project ÉTUDE DU LIEN ENTRE PIB ET
                  CONSOMMATION D&apos;ÉNERGIE
                </p>
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  Nous atteignons des émissions de l&apos;ordre de 40 Gt de CO 2
                  par an en 2022. Cela représente une multiplication des
                  émissions par plus de 15 fois celles de l&apos;année 1850.
                </p>
                <Image
                  className="pt-5 pb-12 sm:mx-auto"
                  src="/Illustrations/global-co2-emissions-fossil-land.png"
                  alt="co2"
                  width={800}
                  height={200}
                />
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  L&apos;usage exponentiel des énergie fossiles entraine
                  mécaniquement une augmentation exponentielle de la
                  concentration atmosphérique en CO 2 . Après 10 000 ans de
                  stabilité parfaite, on observe une véritable explosion de
                  cette concentration. Le dioxyde de carbone est un oxyde,
                  c&apos;est une molécule chimiquement stable. Plusieurs
                  milliers d&apos;années sont nécessaires pour que cette
                  molécule disparaisse intégralement de l&apos;atmosphère après
                  arrêt des émissions.
                </p>
                <Image
                  className="pt-5 pb-12 sm:mx-auto"
                  src="/Illustrations/CO2 concentration.png"
                  alt="co2"
                  width={800}
                  height={200}
                />
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  L&apos;augmentation de la concentration atmosphérique en CO2
                  entraine une augmentation de l&apos;effet de serre additionnel et
                  par conséquent la température moyenne globale de la terre
                  augmente. Après une période de stabilité climatique de plus de
                  10 000 ans, qui nous a notamment permis la sédentarisation
                  puis l&apos;agriculture et l&apos;élevage, la température moyenne
                  globale de la terre augmente considérablement sur une période
                  de temps très courte (150 ans). Nous évaluons aujourd&apos;hui à
                  +1.2 °C par rapport à l&apos;ère préindustrielle (1850-1900)
                  l&apos;augmentation de température causée par nos activités.
                </p>
                <Image
                  className="pt-5 pb-12 sm:mx-auto"
                  src="/Illustrations/monde-temperature-16000.jpg"
                  alt="co2"
                  width={800}
                  height={200}
                />
                <Image
                  className="pt-5 pb-12 sm:mx-auto"
                  src="/Illustrations/anom2_france-temperature.webp"
                  alt="co2"
                  width={800}
                  height={200}
                />
              </li>
            </ol>
          </p>

          <button className="ml-12 pt-2 bg-009999 border rounded-md p-2">
            <Link href="/contact" className="uppercase text-white">
              être recontacté{" "}
            </Link>{" "}
          </button>
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
