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
        <title>UN&DEMI - Qui suis-je ?</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div
          id="mission"
          className="selection:bg-009999 selection:text-white pb-5 pt-24 sm:pt-5 h-screen sm:h-fit bg-white"
        >
          <div className="grid grid-cols-2 sm:grid sm:grid-cols-1">
            <Image
              src="/IMG-20230512-WA0045.jpg"
              alt="victor"
              width={500}
              height={600}
              className="sm:hidden mx-auto rounded-xl sm:px-5"
              loading="eager"
            />
            <div className="sm:pl-12 sm:pt-12 laptop:m-auto laptop:mr-48">
              <p className="text-009999 text-left text-[3rem] sm:text-xl sm:w-full sm:pr-5 sm:text-left uppercase font-bold tracking-tighter">
                Qui suis-je ?
              </p>{" "}
              <p className="text-black text-left text-xl sm:text-lg sm:pt-5 pb-12 pt-12  pr-24 pr-5">
                Animée par une farouche ambition de participer à la création
                d&apos;une économie et d&apos;une société désirables, Un&Demi
                porte haut et fort ses valeurs d&apos;engagement, de pédagogie
                et d&apos;enthousiasme. <br></br>
                <br></br>
                Chaque jour, Un&Demi est pleinement investit dans sa mission :
                accompagner les organisations et les individus dans un monde qui
                connaît et connaîtra un nombre de soubresauts de plus en plus
                fréquents et intenses. Ensemble, nous parviendrons à limiter les
                impacts du changement climatique sur nos sociétés en limitant le
                réchauffement de la température globale moyenne de la Terre à
                +1.5°C au dessus des niveaux pré-industriels.<br></br>
                <br></br> Ingénieur de formation et après 6 années
                d&apos;activités dans le secteur on ne peut plus carboné de la
                chimie, nous apportons aux organisations pédagogie et expertise
                énergie climat. Le but : vous accompagner vers l&apos;action et
                ainsi vous doter d&apos;une activité résiliente et adaptée aux
                bouleversements à venir.
              </p>{" "}
              <button className="bg-009999 border rounded-md p-2">
                <Link href="/contact" className="uppercase text-white">
                  En savoir plus{" "}
                </Link>{" "}
              </button>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      <Footer />
    </>
  );
}
