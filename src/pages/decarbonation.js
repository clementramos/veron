import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion } from "framer-motion";
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
        <title>UN&DEMI - La décarbonation : la choisir ou la subir</title>
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
            La décarbonation : la choisir ou la subir
          </p>
          <p className="text-black mx-12 pt-2 text-2xl">
            {" "}
            <p className="text-black  ml-2 pt-2 text-2xl">
              Renouvelable mon cher Watson ? <br></br>
              <br></br>Pour commencer clarifions ensemble ce terme que l&apos;on
              entend partout mais que l&apos;on ne comprend, au fond, pas
              vraiment. Si je vous disais que notre bonne vieille bibine
              préférée, le pétrole, était renouvelable, me prendriez-vous pour
              un fou ? Bon, et bien le pétrole est renouvelable. En effet, le
              pétrole se renouvelle naturellement, grâce notamment à la
              décomposition du plancton sur le plancher océanique, en quelques
              dizaines de millions d&apos;années. Une notion de temporalité est
              donc à ajouter au côté de celle de renouvelable. Nous dirons donc
              plutôt : le pétrole n&apos;est pas une source d&apos;énergie
              renouvelable à l&apos;échelle de temps des activités humaines. Le
              vent, le soleil, la pluie sont quant à elles belle et bien
              renouvelables à l&apos;échelle de temps de nos activités.
              <br></br>
              <br></br>Je vous propose un peu de mathématique élémentaire.
              Prenons un stock naturel de ressource donné une foi pour toute. Au
              commencement de l&apos;exploitation la quantité de ressource
              extraite de l&apos;environnement va doucement croître puis
              augmenter de façon plus ou moins importante en fonction de
              l&apos;intensité de l&apos;exploitation en question. Le stock
              donné une foi pour toute commence donc à baisser tranquillement
              sans conséquences notables. L&apos;exploitation de la ressource
              commence à devenir intensive. Un pic (un maximum) de production
              est alors atteint. Le stock est considérablement réduit et la
              production n&apos;est donc plus en mesure de suivre le même
              rythme. La quantité de ressource extraites de l&apos;environnement
              décroît alors jusqu&apos;à épuisement des stocks.
              <br></br>
              <br></br>
              <ol className="ml-12 list-disc list-inside pb-12 sm:m-0">
                <li className="mb-2">
                  La production mondiale de pétrole dit conventionnel,
                  c&apos;est-à-dire tout ce qui n&apos;est pas sable bitumineux
                  du Canada et pétrole de roche-mère, est passé par un pic
                  (maximum d&apos;extraction) dans les alentours des années
                  2008.
                </li>
                <li className="mb-2">
                  L&apos;Europe est passée depuis 2006 dans une décrue subie
                  d&apos;approvisionnement en énergie d&apos;origine fossile.
                </li>
                <li className="mb-2">
                  Le Mexique a passé son pic de pétrole en 2004, la production a
                  chuté de près de 50% depuis (2021).{" "}
                </li>
                <li className="mb-2">
                  L&apos;Argentine a passé son pic de pétrole en 1998, la
                  production a chuté de 34% depuis (2021).{" "}
                </li>
                <li className="mb-2">
                  Le Venezuela a connu 2 pics de pétrole, un en 1970 et un
                  second en 1998. Depuis ce second pic la production a chuté de
                  plus de 80% (2021).
                </li>
                <li className="mb-2">
                  L&apos;Egypte a passé son pic de pétrole en 1993 et sa
                  production a chuté de 37% depuis (2021).
                </li>
                <li className="mb-2">
                  La Norvège a passé son pic de pétrole en 2001 et sa production
                  a chuté de 42% depuis (2021).
                </li>
              </ol>
            </p>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-1/2 h-auto sm:w-full mb-12"
            >
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/1.png"
                  width={1000}
                  height={1000}
                  alt="article"
                  className=""
                />
                Titre 1
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/2.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Titre 2
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/3.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Titre 3
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/4.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Titre 4
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/5.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Titre 4
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/6.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Titre 4
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/7.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Titre 4
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/decarbonation/8.png"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                Titre 4
              </SwiperSlide>
            </Swiper>
            <p classname="text-black ml-2 mt-12 text-2xl">
              Les experts modélisent, sur la base des réserves prouvées de
              matières fossiles, un pic de production mondiale de pétrole dans
              les années 2020 suivi du gaz dans les années 2030. Climat ou pas
              climat, l&apos;espèce humaine devra apprendre à vivre sans énergie
              d&apos;origine fossile. Climat ou pas climat, les activités des
              hommes finirons par être contraintes de se passer de pétrole, de
              charbon et de gaz. Climat ou pas climat, l&apos;être humain finira
              par ne plus émettre de GES. Pas parce qu&apos;il l&apos;aura
              choisi mais parce qu&apos;il l&apos;aura subi. Le scénario le plus
              émetteur du GIEC (groupe d&apos;experts intergouvernementale sur
              l&apos;évolution du climat) le SSP5-8.5, table sur un
              développement basé sur l&apos;exploitation des ressources fossiles
              encore disponibles sur Terre. Cette lumineuse idée nous emmènerait
              vers une augmentation de +4°C à +7 °C à horizon 2100 ! Une planète
              sur laquelle nous ne serons plus du tout à notre aise.
            </p>
            <p className="text-009999 italic ml-2 pt-12 text-2xl">
              Publié le 17/05/2023{" "}
            </p>
            <p className="text-009999 italic ml-2 text-sm">
              Modifié le 27/05/2023{" "}
            </p>
          </p>
          <button className="ml-12 mt-16 bg-009999 border rounded-md p-2">
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
