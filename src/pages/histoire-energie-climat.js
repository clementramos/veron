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
          <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
            La &quot;petite&quot; histoire énergie climat
          </p>
          <p className="text-black mx-12 pt-2 text-2xl">
            {" "}
            <p className="text-black  ml-2 pt-2 text-2xl">
              A partir du XVIII° siècle, l’être humain commence l’exploitation
              industrielle du charbon. Viendront par la suite celles du pétrole
              (1850) puis celle du gaz (1950). Ces énergies primaires fossiles
              sont remarquablement concentrées. Elles nous ont permis d’accéder
              à l’abondance énergétique. Cette dernière est la cause profonde de
              l’explosion de la démographie mondiale, de l’augmentation de notre
              espérance et de notre confort de vie. <br></br>
              <div className="py-12 grid grid-cols-3 sm:grid sm:grid-cols-1 sm:gap-8">
                <Image src="/gaz 3.jpg" alt="gaz" width={300} height={300} />
                <Image
                  src="/charbon 1.png"
                  alt="charbon"
                  width={300}
                  height={300}
                />
                <Image
                  src="/pétrole.jpg"
                  alt="petrole"
                  width={300}
                  height={300}
                />
              </div>
              <br></br>Lors de leur combustion (utilisation) ces énergies
              primaires fossiles émettent du gaz carbonique (CO2). Cette
              molécule est un gaz à effet de serre (GES) chimiquement stable.{" "}
              <br></br>
              <div className="py-12">
                <Image
                  src="/CO2 2.png"
                  alt="co2"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <br></br>
              L’effet de serre est un phénomène naturel par lequel certains gaz
              présents dans l’atmosphère retiennent la chaleur en absorbant le
              rayonnement infra-rouge émis par la Terre. Ce phénomène a permis
              l’apparition de la vie sur Terre mais aujourd’hui l’être humain
              ajoute à ce phénomène naturel une composante supplémentaire. On
              appelle cette composante supplémentaire « effet de serre
              additionnel ». De par ses activités et plus précisément son
              recours massif aux énergies d’origine fossile, l’être humain
              extrait des hydrocarbures (molécules composées d’atomes de carbone
              et d’hydrogène) de la Terre et en les exploitant, rejette du CO2,
              mais pas que…, dans l’atmosphère.<br></br>{" "}
              <div className="py-12">
                <Image
                  src="/les GES Kyoto.png"
                  alt="ges"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <br></br> Le bilan énergétique de la Terre est alors déséquilibré.
              La température moyenne globale de la planète augmente et les
              phénomènes climatiques extrêmes voient leur intensité et leur
              fréquence s’accentuer.<br></br>{" "}
              <div className="py-12">
                <Image
                  src="/évènements climatiques extremes.png"
                  alt="evenements climatiques"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <br></br>L’être humain a, à ce jour, rejeté dans l’atmosphère près
              de 2 500 Gt de CO2 depuis 1850 augmentant par voie de conséquence
              la température moyenne globale de la Terre de +1.2 °C (2023) par
              rapport à l’aire préindustrielle. <Link href="/graphiques" className="text-009999">Source.</Link> <br></br> <br></br>Dans ce contexte,
              comment maintenir un confort de vie digne et serein pour chacun ?
              Il est urgent d’agir en transformant notre mode de vie, en
              réduisant drastiquement nos émissions de gaz à effet de serre, en
              stoppant la destruction du vivant qui est à l’œuvre.
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
            <p className="text-009999 italic ml-2 pt-12 text-2xl">
              Publié le 15/05/2023{" "}
            </p>
          </p>
          <button className="ml-12 mt-24 bg-009999 border rounded-md p-2">
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
