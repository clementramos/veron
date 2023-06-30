import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default function Expertise() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -250 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Head>
        <title>UN&DEMI - La petite histoire énergie climat</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full px-64 sm:px-12">
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
          <p className="text-009999 text-4xl font-bold uppercase pt-12 mb-12">
            La &quot;petite&quot; histoire énergie climat
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-1">
            <p className="text-black text-justify pb-12 pt-20 text-2xl sm:text-lg">
              A partir du XVIII° siècle, l&apos;être humain commence
              l&apos;exploitation industrielle du charbon. Viendront par la
              suite celles du pétrole (1850) puis celle du gaz (1950). Ces
              énergies primaires fossiles sont remarquablement concentrées.
              Elles nous ont permis d&apos;accéder à l&apos;abondance
              énergétique. Cette dernière est la cause profonde de
              l&apos;explosion de la démographie mondiale, de
              l&apos;augmentation de notre espérance et de notre confort de vie.
            </p>
            <Image
              src="/charbon 1.png"
              alt="charbon"
              width={300}
              height={300}
              className="mx-auto my-auto"
            />
            <Image
              src="/CO2 2.png"
              alt="co2"
              width={300}
              height={300}
              className="mx-auto my-auto"
            />
            <p className="text-black text-justify pb-12 pt-20 text-2xl sm:text-lg">
              Lors de leur combustion (utilisation) ces énergies primaires
              fossiles émettent du gaz carbonique (CO2). Cette molécule est un
              gaz à effet de serre (GES) chimiquement stable.{" "}
            </p>
            <p className="text-black text-justify pb-12 pt-20 text-2xl sm:text-lg">
              L&apos;effet de serre est un phénomène naturel par lequel certains
              gaz présents dans l&apos;atmosphère retiennent la chaleur en
              absorbant le rayonnement infra-rouge émis par la Terre. Ce
              phénomène a permis l&apos;apparition de la vie sur Terre mais
              aujourd&apos;hui l&apos;être humain ajoute à ce phénomène naturel
              une composante supplémentaire. On appelle cette composante
              supplémentaire « effet de serre additionnel ». De par ses
              activités et plus précisément son recours massif aux énergies
              d&apos;origine fossile, l&apos;être humain extrait des
              hydrocarbures (molécules composées d&apos;atomes de carbone et
              d&apos;hydrogène) de la Terre et en les exploitant, rejette du
              CO2, mais pas que…, dans l&apos;atmosphère.
            </p>
            <Image
              src="/les GES Kyoto.png"
              alt="ges"
              width={300}
              height={300}
              className="mx-auto my-auto"
            />{" "}
            <Image
              src="/évènements climatiques extremes.png"
              alt="evenements climatiques"
              width={300}
              height={300}
              className="mx-auto my-auto"
            />
            <p className="text-black text-justify pb-12 pt-20 text-2xl sm:text-lg">
            Le bilan énergétique de la Terre est alors déséquilibré.
              La température moyenne globale de la planète augmente et les
              phénomènes climatiques extrêmes voient leur intensité et leur
              fréquence s&apos;accentuer.
            </p>
          </div>

            <p className="text-black text-justifypt-2 text-2xl">
              <br></br>L&apos;être humain a, à ce jour, rejeté dans
              l&apos;atmosphère près de 2 500 Gt de CO2 depuis 1850 augmentant
              par voie de conséquence la température moyenne globale de la Terre
              de +1.2 °C (2023) par rapport à l&apos;aire préindustrielle.{" "}<br></br>
              <Link href="/graphiques" className="text-009999">
                Source.
              </Link>{" "}
              <br></br> <br></br>Dans ce contexte, comment maintenir un confort
              de vie digne et serein pour chacun ? Il est urgent d&apos;agir en
              transformant notre mode de vie, en réduisant drastiquement nos
              émissions de gaz à effet de serre, en stoppant la destruction du
              vivant qui est à l&apos;œuvre.
            </p>
            {/* <div className="grid grid-cols-2 gap-8">
              <Image
                src="/Onerc_Température_Mondiale_Moyenne_1850_2017.png"
                width={800}
                height={850}
                alt="article"
                className="mx-auto my-12"
              />
              <Image
                src="/hemisphère-nord-temperature-an-0.jpg"
                width={900}
                height={900}
                alt="article"
                className="mx-auto my-12"
              />
            </div> */}
            {/* <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-1/2 h-auto sm:w-full mb-12 mt-12"
            >
              <SwiperSlide>
                {" "}
                <Image
                  src="/gaz 3.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                  className=""
                />
                Illustrations 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/barrils de pétrole.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Illustrations 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/charbon 1.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Illustrations 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/co2 1.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Illustrations 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/incendie 2.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Illustrations 
              </SwiperSlide>{" "}
              <SwiperSlide>
                {" "}
                <Image
                  src="/cyclone 1.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Illustrations
              </SwiperSlide>{" "}
              <SwiperSlide>
                {" "}
                <Image
                  src="/sécheresse 2.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Illustrations
              </SwiperSlide>{" "}
              <SwiperSlide>
                {" "}
                <Image
                  src="/inondation 2.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Illustrations
              </SwiperSlide>{" "}
            </Swiper> */}
            <p className="text-009999 italic pt-12 text-2xl">
              Publié le 15/05/2023{" "}
            </p>
          <button className="mt-24 bg-009999 border rounded-md p-2">
            <Link href="/#articles" className="uppercase text-white">
              revenir aux articles{" "}
            </Link>{" "}
          </button>
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
