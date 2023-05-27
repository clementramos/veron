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
        <title>UN&DEMI -  Analyse cycle de vie</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />

      <div className="bg-white bg-cover h-full">
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
          <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
            Analyse cycle de vie
          </p>
          <p className="text-black  ml-12 pt-2 text-2xl pb-12">
            <ol className="list-none list-inside">
              <li>
                Étape 1 : définition des objectifs et du champ de l&apos;étude
              </li>
              <li>Étape 2 : inventaire de cycle de vie (ICV)</li>
              <li>Étape 3 : évaluation des impacts</li>
              <li>
                Étape 4 : interprétation des résultats obtenus en fonction des
                objectifs retenus
              </li>
            </ol>
          </p>
          <p className="text-black  ml-12 pt-2 text-2xl">
            L&apos;analyse du cycle de vie est l&#39;outil le plus abouti en
            matière d&apos;évaluation globale et multicritère des impacts
            environnementaux. Cette méthode normalisée permet de mesurer les
            effets quantifiables de produits ou de services sur
            l&apos;environnement. L&apos;analyse du cycle de vie (ACV) recense
            et quantifie, tout au long de la vie des produits, les flux
            physiques de matière et d&apos;énergie associés aux activités
            humaines. Elle en évalue les impacts potentiels puis interprète les
            résultats obtenus en fonction de ses objectifs initiaux. Sa
            robustesse est fondée sur une double approche :
          </p>
          <p className="text-black  ml-12 pt-2 text-2xl pb-12">
            <ol className="list-decimal list-inside">
              <li>Une approche « cycle de vie »</li>
              <li>Une approche « multicritère »</li>
              <li>Un outil normalisé (norme ISO 14040)</li>
            </ol>
          </p>
          <Image
            className="ml-12 pb-10 "
            src="/Illustrations/analyse cycle de vie.jpg"
            alt="analyse cycle de vie"
            width={1000}
            height={200}
          />
          <button className="ml-12 pt-2 bg-009999 border rounded-md p-2">
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
