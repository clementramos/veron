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
        <title>UN&DEMI - Calcul de votre Bilan Carbone</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />

      <div className="bg-white bg-cover h-full ">
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
          {/* <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12 text-center">
            Calcul de votre Bilan Carbone®
          </p> */}
          <Image
            className="mx-auto pb-10 pt-1"
            src="/logo-bilan-carbone-final.png"
            alt="bilan carbone - logo"
            width={600}
            height={200}
          />
          <p className="text-black pt-2 text-2xl px-64 sm:px-12">
            <b>
              Changement climatique, énergie : l&apos;urgence et la nécessité
              d&apos;agir.{" "}
            </b>
            <br></br>
          </p>
          <p className="text-black pt-2 text-2xl px-64 sm:px-12">
            UN&DEMI est certifié Bilan Carbone®. Cette certification est
            délivrée par l&apos;Association pour la transition Bas Carbone (ABC)
            elle-même créée en 2011 par l&apos;ADEME et l&apos;APCC. Une méthode claire,
            rigoureuse et structurée permettant aux décideurs publics et privés
            d&apos;initier et piloter la réduction des émissions de gaz à effet de
            serre liées à leur activité. La méthode permet de réaliser le bilan
            des émissions de GES des activités industrielles ou tertiaires, du
            patrimoine et des services d&apos;une collectivité territoriale, de
            l&apos;ensemble des activités d&apos;un territoire. En l&apos;utilisant de manière
            complète et appropriée, chacun pourra limiter sa contribution au
            changement climatique, et diminuera par la même occasion sa
            dépendance économique aux énergies fossiles. La méthode et ses
            outils vous permettront également de préparer votre bilan GES
            réglementaire.
          </p>
          <p className="text-black font-bold pt-6 text-2xl px-64 sm:px-12">
            Les étapes clefs de la mission Bilan Carbone® :{" "}
          </p>
          <p className="text-black pt-2 text-2xl pb-12 px-64 sm:px-12">
            <ol className="list-disc list-inside">
              <li>Cadrage</li>
              <li>Identification des sources et émissions </li>
              <li>Collecte des données </li>
              <li>Calcul du bilan et analyses </li>
              <li>Plan de transition </li>
              <li>Publication</li>
            </ol>
          </p>
          <Image
            className="pb-10 px-64 sm:px-12 "
            src="/bilancarbone.png"
            alt="bilan carbone"
            width={1500}
            height={200}
          />
          <p className="text-sm text-center font-thin text-gray-500">Source: ADEME</p>
          <button className="ml-64 pt-2 bg-009999 border rounded-md p-2">
            <Link href="/contact" className="uppercase text-white">
              être recontacté{" "}
            </Link>{" "}
          </button>{" "}
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
