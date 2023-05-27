import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Expertise() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -250 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Head>
        <title>UN&DEMI - Sensibilisation et formation</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full px-12">
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
          <p className="text-009999 text-4xl font-bold uppercase  pt-12 mb-12">
            Sensibilisation et formation
          </p>
          <Image
            className="mx-auto pb-10"
            src="/LA-FRESQUE-DU-CLIMAT-Logo.png"
            alt="fresque climat - logo"
            width={1000}
            height={200}
          />
          <p className="text-black pt-2 pb-12 text-2xl">
            UN&DEMI forme votre équipe dédiée à la conduite du projet en
            commençant par un atelier : La Fresque Du Climat. <br></br>
            <br></br>Faire basculer le monde dans la transition. Pour agir, il
            faut comprendre. Depuis sa création en 2018, la Fresque du Climat
            est devenue l&apos;outil de référence qui permet aux individus et
            aux organisations de s&apos;approprier le défi de l&apos;urgence
            climatique. <br></br>
            <br></br>
            <ol className="list-disc list-inside grid grid-cols-4 text-center font-bold">
              <li>Bientôt 1.1 million de participants</li>
              <li>+ de 15 000 animateurs actifs</li>
              <li> 139 pays</li>
              <li>+45 langues</li>
            </ol>
          </p>
          <p className="text-black font-bold  pt-6 text-2xl">Scientifique</p>
          <p className="text-black   pt-2 text-2xl">
            La Fresque du Climat est un outil neutre et objectif. Il se fonde
            sur les données issues des rapports scientifiques du GIEC (Groupe
            d&apos;experts intergouvernemental sur l&apos;évolution du climat)
            dont les recommandations orientent les décisions politiques et
            économiques à l&apos;échelle mondiale.
          </p>
          <p className="text-black font-bold  pt-6 text-2xl">Accessible</p>
          <p className="text-black   pt-2 text-2xl">
            L&apos;atelier mobilise l&apos;intelligence collective pour
            sensibiliser les participants aux changements climatiques. Son
            approche ludique et pédagogique permet à tous les publics de
            s&apos;approprier le sujet des changements climatiques et vise à
            éviter une descente verticale du savoir. Durant l&apos;atelier, les
            participants relient les liens de cause à effets et intègrent les
            enjeux climatiques dans leur globalité.
          </p>
          <p className="text-black font-bold  pt-6 text-2xl">Efficace</p>
          <p className="text-black   pt-2 pb-12 text-2xl">
            Sans culpabiliser et par une compréhension partagée des mécanismes à
            l&apos;œuvre, la Fresque engage les individus dans un échange
            constructif. A l&apos;issue de l&apos;atelier, les participants sont
            motivés et outillés pour agir à leur niveau.
          </p>
          <p className="text-black font-bold  pt-6 text-3xl">
            Formation énergie climat
          </p>
          <p className="text-sm italic  pb-12 text-gray-500 text-sm">
            Entre 1h et 2h avec présentation PowerPoint
          </p>
          <p className="text-black   pt-2 pb-12 text-2xl">
            Vous découvrirez ou redécouvrirez notre « petite » histoire
            d&apos;énergie et de climat. Nous vous inviterons à cette occasion à
            prendre le recul nécessaire afin d&apos;appréhender les enjeux de
            notre temps avec un nouvel œil. Cette présentation se veut
            entièrement interactive et collaborative dans la juste continuité de
            l&apos;atelier précédent.
          </p>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-1/2 h-full sm:w-full mb-12"
          >
            <SwiperSlide>
              <Image
                priority
                src="/IMG-20230520-WA0002.jpg"
                width={1000}
                height={1000}
                alt="article"
                className=""
              />
              
            </SwiperSlide>
            <SwiperSlide>
              <Image
                priority
                src="/IMG-20230520-WA0007.jpg"
                width={1000}
                height={1000}
                alt="article"
                className=""
              />
              
            </SwiperSlide>
            <SwiperSlide>
              <Image
                priority
                src="/IMG-20230520-WA0009.jpg"
                width={1000}
                height={1000}
                alt="article"
                className=""
              />
              
            </SwiperSlide>
            <SwiperSlide>
              <Image
                priority
                src="/IMG-20230521-WA0029.jpg"
                width={1000}
                height={1000}
                alt="article"
                className=""
              />
              
            </SwiperSlide>
            <SwiperSlide>
              <Image
                priority
                src="/IMG-20230521-WA0033.jpg"
                width={1000}
                height={1000}
                alt="article"
                className=""
              />
              
            </SwiperSlide>
            <SwiperSlide>
              <Image
                priority
                src="/IMG-20230521-WA0038.jpg"
                width={1000}
                height={1000}
                alt="article"
                className=""
              />
              
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
          <button className=" pt-2 bg-009999 border rounded-md p-2">
            <Link href="/contact" className="uppercase text-white">
              être recontacté{" "}
            </Link>{" "}
          </button>
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
