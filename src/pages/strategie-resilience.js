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
        <title>UN&DEMI - Stratégie résilience</title>
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
            Stratégie résilience
          </p>
          <p className="text-black pb-12 ml-12 pt-2 text-2xl">
            Selon l&apos;évolution de la concentration de gaz à effet de serre dans
            l&apos;atmosphère dans les décennies à venir, les scénarios peuvent être
            radicalement différents et les écarts de températures peuvent varier
            jusqu&apos;à +4,5°C. Dans tous les cas, les entreprises et organisations
            devront faire face à des risques physiques et des risques de
            transition, dans des proportions qui dépendront de la trajectoire
            empruntée.
          </p>
          <Image
            className="ml-12 pb-10 "
            src="/Illustrations/risques et opportunités.png"
            alt="risques et opportunités - graphique"
            width={1000}
            height={200}
          />
          <p className="text-black text-2xl font-bold uppercase ml-12 pt-12">
            Risques physiques{" "}
          </p>
          <p className="text-black ml-12 pt-2 text-2xl pb-12">
            <ol className="list-disc list-inside">
              <li>
                Quels sont les principaux risques qui pèsent sur mon patrimoine
                ?
              </li>
              <li>
                Quels sont mes sites, actifs ou processus les plus à risque ? Et
                vis-à-vis de quels aléas climatiques ?
              </li>
              <li>
                Mes équipements sont-ils adaptés aux conditions climatiques
                futures ? Mes politiques de maintenance doivent-elles être
                revues ? Mes stratégies d&apos;approvisionnement sont-elles menacées
                ?
              </li>
              <li>
                Mon business plan va-t-il être affecté par les scénarios
                d&apos;impacts climatiques ?
              </li>
              <li>
                Quelles actions mettre en œuvre pour anticiper ces risques en
                interne ? Avec les parties prenantes ?
              </li>
              <li>
                Quelles sont les trajectoires d&apos;adaptation possibles sur chaque
                risque climatique identifié ?
              </li>
            </ol>
          </p>
          <p className="text-black pb-12 ml-12 pt-2 text-2xl">
            L&apos;élaboration d&apos;une stratégie de résilience s&apos;appuie sur un
            diagnostic des risques. UN&amp;DEMI vous accompagne sur l&apos;évaluation
            des risques selon une approche en ligne avec les recommandations du
            GIEC et norme ISO 14090
          </p>
          <p className="text-black text-2xl font-bold uppercase ml-12 pt-12">
            Risques de transition
          </p>
          <p className="text-black pb-12 ml-12 pt-2 text-2xl">
            Atteindre la neutralité carbone d&apos;ici 2070 au niveau mondial et
            limiter le changement climatique à +2°C implique une transformation
            inédite et profonde de toutes les activités économiques : logement,
            mobilité, aménagement du territoire, énergie, production
            industrielle, production alimentaire, tourisme, services, emplois,
            etc. La résolution de la crise climatique questionne donc
            frontalement la stratégie de chaque entreprise. Pour tout·e
            dirigeant·e d&apos;entreprise, il est donc nécessaire d&apos;identifier dès
            maintenant les risques et les opportunités business associés à la
            transformation bas-carbone de nos sociétés. En d&apos;autres termes il
            s&apos;agit de bâtir une stratégie d&apos;entreprise résiliente à ces
            transformations systémiques.
          </p>
          <p className="text-black ml-12 pt-2 text-2xl pb-12">
            <ol className="list-disc list-inside">
              <li>Définition d&apos;une vision long-terme</li>
              <li>
                Structuration d&apos;un plan stratégique à 5-10 ans et ses
                conséquences sur la rotation du portefeuille d&apos;actifs
              </li>
              <li>
                Identification d&apos;approches “Go to market” pour les nouvelles
                activités (développement organique, acquisitions, …) ou
                de nouveaux business models pour les activités existantes.
              </li>
            </ol>
          </p>
          <p className="text-black pb-12 ml-12 pt-2 text-2xl">
            Au travers de chacune de ces étapes, UN&amp;DEMI accompagne et aide
            l&apos;entreprise à se transformer dans le but de la rendre résiliente
            aux profondes transformations nécessaires à la neutralité carbone à
            l&apos;échelle planétaire.
          </p>
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
