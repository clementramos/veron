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
        <title>UN&DEMI - Les infographies qui percutent</title>
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
        <div className="bg-white bg-cover h-full px-64 sm:px-12">
          <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12 text-center">
            Les infographies qui percutent
          </p>
          {/* <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-3/4 h-fit sm:w-full mb-12"
          >
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/Eq4dToAWMAAMGN-.jfif"
                width={1000}
                height={1000}
                alt="article"
                className=""
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/Infographie-Carree-Bon-Pote-INVBC3-768x768.webp"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/UE-CARBON-FOOTPRINT-1024x576.webp"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/EvYwOhVWYAQdu1X.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/Ev86arDWYAA6Oea.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/ALIMENTATION-BON-POTE.webp"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/E3Q7WoMXoAIw7PG.png"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/E0cnaZcWYAEiHW5.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/EzUoFHoUUAcxDck.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/ExEuvw4WQAISBvc.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/E2s36voWUAMKZ1q.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/E4ZECubXIAAcZ-U.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/E6FKJZdX0AAC6VV.jfif"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/image-45-1024x589.webp"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src="/Illustrations/image-40-1024x596.webp"
                width={1000}
                height={1000}
                alt="article"
              />
              Titre
            </SwiperSlide>
          </Swiper> */}
          <div>
            {" "}
            <Image
              src="/Eq4dToAWMAAMGN-.jfif"
              alt="graphique france"
              width={1200}
              height={500}
              className="mx-auto py-4"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-1 sm:gap-2 tablet:grid tablet:grid-cols-1 tablet:gap-2">
            <Image
              src="/Infographie-Carree-Bon-Pote-INVBC3-768x768.webp"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/UE-CARBON-FOOTPRINT-1024x576.webp"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/EvYwOhVWYAQdu1X.jfif"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/Ev86arDWYAA6Oea.jfif"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/ALIMENTATION-BON-POTE.webp"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/E3Q7WoMXoAIw7PG.png"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/E0cnaZcWYAEiHW5.jfif"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/EzUoFHoUUAcxDck.jfif"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/ExEuvw4WQAISBvc.jfif"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/PathwaysOurWolrdinData.webp"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/E4ZECubXIAAcZ-U.jfif"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/E6FKJZdX0AAC6VV.jfif"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/image-45-1024x589.webp"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
            <Image
              src="/image-40-1024x596.webp"
              alt="graphique france"
              width={500}
              height={500}
              className="mx-auto py-4"
            />
          </div>
          <p className="text-009999 italic ml-12 pt-12 text-2xl">
            Publié le 27/05/2023{" "}
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
