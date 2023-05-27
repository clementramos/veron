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
        <title>UN&DEMI - Pourquoi transitionner ?</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
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
        <div className="bg-white bg-cover h-full">
          <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
          Pourquoi transitionner? : les arguments de la transition
          </p>
          <p className="text-009999 text-xl ml-12 mb-12">C&apos;est en prenant conscience des enjeux que le désir de passer à l&apos;action survient.</p>
          <p className="text-black mx-12 pt-2 text-2xl">
            {" "}
            <p className="text-black pt-2 text-2xl">
            <p>
                    <b>Ressources</b> : améliorer votre résilience face à
                    l&apos;augmentation des coûts et des difficultés
                    d&apos;accès à l&apos;énergie et aux matières premières.
                    <br></br>
                  </p>
                  <p className="pt-5">
                    <b>Réglementation</b> : anticiper et respecter
                    l&apos;évolution et le durcissement de la réglementation.
                    <br></br>
                  </p>
                  <p className="pt-5">
                    <b>Marque</b> : soigner votre image de marque et votre
                    marque employeur : répondre aux nouvelles exigences des
                    clients et des candidats.
                    <br></br>
                  </p>
                  <p className="pt-5">
                    <b>Concurrence</b> : Différenciez-vous de la concurrence en
                    opérant les changements garantissant la pérennité économique
                    de l&apos;entreprise dans un monde qui se réchauffe.
                    <br></br>
                  </p>
                  <p className="pt-5">
                    {" "}
                    <b>Finance</b> : facilitez-vous l&apos;accès aux
                    financements (appels d&apos;offre publics, banque
                    d&apos;investissement, investisseurs…)
                    <br></br>
                  </p>
                  <p className="pt-5">
                    Participer au défi enthousiasmant d&apos;imagination et de
                    construction d&apos;une économie et d&apos;une société
                    atténuée et adaptée au défi colossal qui se présente.
                  </p>
            </p>
            {/* <div className="grid grid-cols-2 gap-8">
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
            </div> */}
            <p className="text-009999 italic pt-12 text-2xl">
              Publié le 19/05/2023{" "}
            </p>
          </p>
          <button className="ml-12 mt-24 bg-009999 border rounded-md p-2">
            <Link href="/#articles" className="uppercase text-white">
              revenir aux articles{" "}
            </Link>{" "}
          </button>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
