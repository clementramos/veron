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
        <title>UN&DEMI - Expertise</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-expertise bg-cover h-screen">
        <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
          UN&DEMI vous accompagne à chaque étape de votre stratégie climat :
        </p>
        <p className="text-009999 italic ml-12 pt-2 text-2xl">
          Sensibilisation et formation de l&apos;équipe « mission carbone »
        </p>
        <p className="text-009999 italic ml-12 pt-2 text-2xl">
          Mesure (Bilan Carbone, ACV, émissions évitées)
        </p>
        <p className="text-009999 italic ml-12 pt-2 text-2xl">
          Stratégie et trajectoire (ACT, Science-Based Targets)
        </p>
        <p className="text-009999 italic ml-12 pt-2 text-2xl">
          Communication (rédaction de contenu, affichage environnemental)
        </p>
        <p className="text-009999 italic ml-12 pt-2 text-2xl">
          Conduite du changement
        </p>
        <p className="text-009999 italic ml-12 pt-2 mb-12 text-2xl">
          Soutien à la concrétisation de projets
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
