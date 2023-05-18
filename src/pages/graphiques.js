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
        <title>UN&DEMI - Energie climat en 6 graphiques</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full sm:px-2 ">
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
          <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12 sm:text-center">
            Energie climat en 6 graphiques
          </p>
          <p className="text-009999 laptop:mx-12 pt-2 text-2xl">
            <ol className="ml-12 list-decimal">
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  La population mondiale explose à partir du XIX° siècle en
                  passant de 1 milliard à 8 milliards d&apos;être humain sur
                  Terre en 200 ans (+7 milliards). Elle est pourtant passée de
                  100 millions d&apos;âmes à 1 milliard en plus de 1400 ans (+
                  900 millions).
                </p>
                <Image
                  className="ml-12 pt-5 pb-12 sm:mx-auto"
                  src="/2022_11_15_evolution_mondiale_past.png"
                  alt="evolution mondiale"
                  width={800}
                  height={200}
                />
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  L&apos;énergie primaire consommée dans le monde explose de la
                  même façon à partir des années 1850. Elle est composée
                  aujourd&apos;hui à 80% d&apos;énergie fossile issue de
                  matières premières non-renouvelables à l&apos;échelle des
                  temps humains. Le pétrole, le charbon et le gaz. Ces derniers
                  émettent du dioxyde de carbone CO2 lors de leur combustion.
                </p>
                <Image
                  className="ml-12 pt-5 pb-12 sm:mx-auto"
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
                  l&apos;humanité. Le PIB mondial passe de 10 à 90 trillions de
                  dollars USD constants en à peine plus de 100 ans.
                </p>
                <Image
                  className="ml-12 pt-5  sm:mx-auto"
                  src="/PIB mondial.png"
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
                  l&apos;évolution du PIB mondial et celle de la consommation
                  d&apos;énergie.<br></br> « Donnez-moi le PIB mondial sur une
                  année donnée, je vous donnerai la quantité d&apos;énergie que
                  vous avez employé sur cette même année »
                </p>
                <Image
                  className="ml-12 pt-5 sm:mx-auto"
                  src="/gdp_energy.png"
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
                  L&apos;augmentation de la concentration atmosphérique en CO2
                  entraine une augmentation de l&apos;effet de serre additionnel
                  et par conséquent la température moyenne globale de la terre
                  augmente
                </p>
                <Image
                  className="ml-12 pt-5 pb-12 sm:mx-auto"
                  src="/hemisphère-nord-temperature-an-0.jpg"
                  alt="co2"
                  width={800}
                  height={200}
                />
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  L&apos;usage exponentiel des énergie fossiles entraine
                  mécaniquement une augmentation exponentielle de
                  l&apos;évolution de la concentration atmosphérique en CO2
                </p>
                <Image
                  className="ml-12 pt-5 pb-12 sm:mx-auto"
                  src="/CO2-graphique_1-75f5-865a6.png"
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
