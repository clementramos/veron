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
        <title>UN&DEMI - Energie climat en 5 graphiques</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full">
        <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
          Energie climat en 5 graphiques
        </p>
        <p className="text-009999 mx-12 pt-2 text-2xl">
          <ol className="ml-12 list-decimal">
            <li>
              <p className="text-009999  ml-2 pt-2 text-2xl">
                La population mondiale explose à partir du XIX° siècle en
                passant de 1 milliard à 8 milliards d&apos;être humain sur Terre
                en 200 ans (+7 milliards). Elle est pourtant passée de 100
                millions d&apos;âmes à 1 milliard en plus de 1400 ans (+ 900
                millions).
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
              <p className="text-009999  ml-2 pt-2 text-2xl">
                L&apos;énergie primaire consommée dans le monde explose de la même
                façon à partir des années 1850. Elle est composée aujourd&apos;hui à
                80% d&apos;énergie fossile issue de matières premières
                non-renouvelables à l&apos;échelle des temps humains. Le pétrole, le
                charbon et le gaz. Ces derniers émettent du dioxyde de carbone
                CO2 lors de leur combustion.
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
              <p className="text-009999  ml-2 pt-2 text-2xl">
                Le PIB est un indicateur économique permettant d&apos;évaluer la
                production de biens et de services. Il revient à calculer la
                rémunération annuelle de l&apos;ensemble de l&apos;humanité. Le PIB
                mondiale passe de 10 à 90 trillions de dollars USD constants en
                à peine plus de 100 ans.
              </p>
              <Image
                className="ml-12 pt-5 pb-12 sm:mx-auto"
                src="/PIB mondial.png"
                alt="pib"
                width={800}
                height={200}
              />
            </li>
            <li>
              <p className="text-009999  ml-2 pt-2 text-2xl">
                Le graphique ci-dessous démontre la casi-parfaite
                proportionnalité entre l&apos;évolution du PIB mondiale et celle de
                la consommation d&apos;énergie. (je n ai pas le graphique)
              </p>
              <Image
                className="ml-12 pt-5 pb-12 sm:mx-auto"
                src="/"
                alt="evolution mondiale"
                width={800}
                height={200}
              />
            </li>
            <li>
              <p className="text-009999  ml-2 pt-2 text-2xl">
                Evolution de la concentration atmosphérique en CO2
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
      </div>
      <Footer />
    </>
  );
}
