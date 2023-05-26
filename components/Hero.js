import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  motion,
  useTransform,
  MotionValue,
  useAnimation,
} from "framer-motion";
import Navbar from "./Navbar";
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const Box = ({ num }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
    return (
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1>Box {num} </h1>
      </motion.div>
    );
  };

  return (
    <>
      {" "}
      {/* <motion.div
        initial={{ opacity: 0, y: "-100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "tween",
            damping: 5,
            stiffness: 10,
            restDelta: 0.001,
          },
        }}
      > */}
      <Navbar />
      {/* </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "900px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "tween",
            damping: 5,
            stiffness: 10,
            restDelta: 0.001,
          },
        }}
      > */}
      {/* <div className="sm:h-full tablet:h-full laptop:h-full w-full h-full bg-ocean bg-no-repeat flex items-center justify-center"> */}
      {/* <div className="text-center sm:w-full"> */}
      <div className="w-screen text-center h-screen bg-white">
        <Image
          className="mx-auto"
          src="/Flyer Un&Demi.png"
          width={300}
          height={18}
          alt="logo"
          priority="true"
        />
        <p className="selection:bg-009999 selection:text-white text-009999 text-center text-[9rem] sm:text-5xl sm:w-full sm:pb-5 sm:pt-12 sm:text-center tablet:text-5xl tablet:pb-10 laptop:text-6xl uppercase font-bold tracking-wide">
          un & demi{" "}
        </p>{" "}
        <p className="selection:bg-009999 selection:text-white text-black text-center text-4xl tablet:text-3xl sm:text-xl laptop:text-2xl laptop:pb-14 sm:pb-6 font-light uppercase pb-12">
          pédagogie et enthousiasme climatique.{" "}
        </p>{" "}
        <button class="bg-transparent pt-12">
          <Link href="#presentation" className="uppercase" scroll={false}>
            <Image
              src="/arrow_down.svg"
              alt="arrow down"
              width={100}
              height={100}
            />{" "}
          </Link>{" "}
        </button>{" "}
      </div>
      <div
        id="presentation"
        className="h-full sm:h-full sm:pb-10 tablet:h-full laptop:h-full bg-white sm:grid sm:grid-cols-1"
      >
          <div className="px-12 tablet:px-12 ">
              <p className="text-009999 text-center text-[3rem] tablet:text-4xl sm:text-xl sm:w-full sm:pr-5 sm:text-left tablet:text-left laptop:text-left pt-12 uppercase font-bold tracking-wide">
                UN&DEMI est un cabinet de conseil indépendant.
              </p>{" "}
            <p className="text-009999 text-center text-xl sm:text-sm sm:w-full sm:pr-5 sm:text-left tablet:font-thin tablet:text-left laptop:text-left sm:font-thin font-bold tracking-wide">
              Partenaire privilégié, il accompagne votre organisation dans la
              transition bas-carbone et l&apos;adaptation à la dérive
              climatique.
              <br></br> Nous vous proposons une approche basée sur les trois
              piliers qui fondent notre identité :
            </p>
            <p className="text-black text-justify pb-12 pt-20 text-2xl sm:text-lg">
              <ol className="list-none list-inside">
                <li className="">
                  <b className="uppercase text-009999 sm:text-xl">
                    La pédagogie.
                  </b>{" "}
                  <br></br>
                  Le sujet énergie-climat est tentaculaire et complexe. Nous
                  vous transmettons les bons ordres de grandeurs vous permettant
                  de structurer et de clarifier le phénomène énergie climat dans
                  votre esprit. L&apos;objectif : vous approprier le sujet et
                  devenir un acteur convaincu de votre propre transition. Le
                  tout, accompagné de la rigueur et de la bienveillance
                  indispensables à la bonne marche d&apos;un projet de cette
                  nature.{" "}
                </li>
                <li className="pt-5">
                  <b className="uppercase text-009999 sm:text-xl">
                    La Physique.
                  </b>
                  <br></br> Ensemble nous ferons de la physique élémentaire :
                  proportions, additions et autres conversions seront nos
                  meilleurs alliés. Retour à l&apos;école ! Le problème est
                  physique il se résoudra donc en raisonnant dans le même cadre.
                  Nous manipulerons des Kg, des tonnes, des kWh mais aussi des
                  unités plus exotiques comme des tonnes.km ou encore des
                  passagers.km{" "}
                </li>
                <li className="pt-5">
                  <b className="uppercase text-009999 sm:text-xl">
                    De l&apos;enthousiasme à l&apos;action.
                  </b>{" "}
                  <br></br>
                  Le changement climatique et la fin de l&apos;abondance
                  énergétique ont et auront des conséquences qui touchent
                  directement à nos existences. En cela, ces sujets sont
                  anxiogènes. Il est indispensable selon nous de les aborder
                  avec enthousiasme et positivité. Le défi est colossal mais il
                  s&apos;agit également d&apos;une chance inédite dans
                  l&apos;histoire de l&apos;être humain de réinventer ses
                  méthodes de subsistances et d&apos;accès au bonheur. « Je ne
                  suis pas complètement sûre » que nous serions moins heureux
                  dans une société sobre et résiliente.{" "}
                </li>
              </ol>
            </p>
            <button className="bg-009999 border rounded-md p-2 mb-12">
              <Link href="/expertise" className="uppercase text-white">
                Découvrez nos champs d&apos;expertise{" "}
              </Link>{" "}
            </button>
            {/* <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-1/2 h-auto"
            >
              <SwiperSlide>
                {" "}
                <Image
                  src="/Illustrations/pédagogie.jfif"
                  width={1000}
                  height={1000}
                  alt="article"
                  className=""
                />
                1
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/Illustrations/salle de classe blanc.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                2
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/Illustrations/physique.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                3
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/Illustrations/enthousiasme 1.jpg"
                  width={1000}
                  height={1000}
                  alt="article"
                />
                4
              </SwiperSlide>
            </Swiper> */}
          </div>{" "}
      </div>{" "}
      <div
        id="scroll"
        className="h-screen tablet:h-full laptop:h-full sm:h-screen sm:pb-10 sm:grid sm:grid-cols-1 bg-white"
      >
          <div className="px-12 tablet:col-span-3 laptop:col-span-3">
              <p className="text-009999 text-left text-[3rem] tablet:text-4xl sm:text-xl sm:w-full sm:pr-5 sm:text-left pt-12 uppercase font-bold tracking-wide">
                UN&DEMI vous accompagne à chaque étape de la mise en place de
                votre stratégie énergie-climat:
              </p>{" "}
          </div>
          <div className="px-12 tablet:col-span-3">
            <p className="text-black text-left text-2xl text-justify sm:text-lg sm:pt-5 pt-10 tablet:pt-12 tablet:pb-12 laptop:pb-12 laptop:pt-12">
              <p>Sensibilisation et formation de l&apos;équipe dédiée</p>
              <p className="pt-5">
                Mesures physiques (Bilan Carbone, ACV, émissions évitées)
              </p>
              <p className="pt-5">
                Construction de votre feuille de route, plan d&apos;actions
              </p>
              <p className="pt-5">
                Stratégie et trajectoire de réduction d&apos;émissions (SNBC,
                QuantiGES, ACT, SBT…)
              </p>
              <p className="pt-5"> Communication (rédaction de contenu)</p>
            </p>{" "}
          </div>{" "}
      </div>{" "}
      {/* </div>{" "} */}
      {/* </div>{" "} */}
      {/* </motion.div> */}
      <div
        id="info"
        className="h-screen sm:h-full sm:pb-10 tablet:h-full laptop:h-full bg-white sm:grid sm:grid-cols-1"
      >
        <div className="px-12 tablet:px-12">
          <p className="text-009999 text-center text-[3rem] tablet:text-4xl sm:text-xl sm:w-full sm:pr-5 sm:text-left tablet:text-left laptop:text-left pt-12 uppercase font-bold tracking-wide">
            UN&DEMI est un cabinet de conseil indépendant.
          </p>{" "}
          <p className="text-009999 text-center text-xl sm:text-sm sm:w-full sm:pr-5 sm:text-left tablet:font-thin tablet:text-left laptop:text-left sm:font-thin font-bold tracking-wide">
            Partenaire privilégié, il accompagne votre organisation dans la
            transition bas-carbone et l&apos;adaptation à la dérive climatique.
            <br></br> Nous vous proposons une approche basée sur les trois
            piliers qui fondent notre identité :
          </p>
          <p className="text-black text-justify pb-12 pt-20 text-2xl sm:text-lg">
            <ol className="list-none list-inside">
              <li className="">
                <b className="uppercase text-009999 sm:text-xl">
                  La pédagogie.
                </b>{" "}
                <br></br>
                Le sujet énergie-climat est tentaculaire et complexe. Nous vous
                transmettons les bons ordres de grandeurs vous permettant de
                structurer et de clarifier le phénomène énergie climat dans
                votre esprit. L&apos;objectif : vous approprier le sujet et
                devenir un acteur convaincu de votre propre transition. Le tout,
                accompagné de la rigueur et de la bienveillance indispensables à
                la bonne marche d&apos;un projet de cette nature.{" "}
              </li>
              <li className="pt-5">
                <b className="uppercase text-009999 sm:text-xl">La Physique.</b>
                <br></br> Ensemble nous ferons de la physique élémentaire :
                proportions, additions et autres conversions seront nos
                meilleurs alliés. Retour à l&apos;école ! Le problème est
                physique il se résoudra donc en raisonnant dans le même cadre.
                Nous manipulerons des Kg, des tonnes, des kWh mais aussi des
                unités plus exotiques comme des tonnes.km ou encore des
                passagers.km{" "}
              </li>
              <li className="pt-5">
                <b className="uppercase text-009999 sm:text-xl">
                  De l&apos;enthousiasme à l&apos;action.
                </b>{" "}
                <br></br>
                Le changement climatique et la fin de l&apos;abondance
                énergétique ont et auront des conséquences qui touchent
                directement à nos existences. En cela, ces sujets sont
                anxiogènes. Il est indispensable selon nous de les aborder avec
                enthousiasme et positivité. Le défi est colossal mais il
                s&apos;agit également d&apos;une chance inédite dans
                l&apos;histoire de l&apos;être humain de réinventer ses méthodes
                de subsistances et d&apos;accès au bonheur. « Je ne suis pas
                complètement sûre » que nous serions moins heureux dans une
                société sobre et résiliente.{" "}
              </li>
            </ol>
          </p>
          <button className="bg-009999 border rounded-md p-2">
            <Link href="/expertise" className="uppercase text-white">
              Découvrez nos champs d&apos;expertise{" "}
            </Link>{" "}
          </button>
        </div>{" "}
      </div>{" "}
      <div
        id="articles"
        className="selection:bg-009999 selection:text-white bg-white sm:pt-2 pt-12 sm:h-fit h-screen laptop:h-full"
      >
        <div className="grid grid-row-2 sm:grid sm:grid-cols-1">
          <div className="pl-12 pr-12">
            <p className="text-009999 text-center text-[3rem] sm:text-xl sm:w-full sm:pr-5 sm:text-left tablet:text-left tablet:text-4xl tablet:pt-24 laptop:text-left laptop:pt-24 uppercase font-bold tracking-wide">
              articles à lire pour mieux comprendre les enjeux de la transition
              énergétique et climatique{" "}
            </p>{" "}
            <p className="text-black text-center text-xl sm:hidden sm:pr-5 tablet:text-left laptop:text-left laptop:px-0 pt-5 px-64 tablet:px-0">
              La transition énergétique et climatique est un sujet
              d&apos;actualité majeur. <br />
              Pour mieux comprendre les enjeux qui y sont liés, il est important
              de s&apos;informer et de se tenir au courant des dernières
              avancées dans ce domaine.{" "}
            </p>
          </div>
        </div>{" "}
        <div class="pt-12 pb-12 sm:pb-0 bg-white flex justify-center items-center sm:grid sm:grid-cols-1 sm:pt-2">
          <Link href="/histoire-energie-climat">
            <div class="w-64 sm:w-fit sm:m-6 p-6 mx-10 bg-white rounded-xl shadow-xl hover:scale-105 transition-all transform duration-500">
              <Image
                src="/hemisphère-nord-temperature-an-0.jpg"
                width={300}
                height={300}
                alt="article"
              />
              <div class="mt-4 ">
                <h1 class="text-xl font-bold text-gray-700 w-fit">
                  La &quot;petite&quot; histoire énergie climat
                </h1>
                <p class="text-sm mt-2 text-gray-700 line-clamp-3">
                  A partir du XVIII° siècle, l&apos;être humain commence
                  l&apos;exploitation industrielle du charbon. Viendront par la
                  suite celles du pétrole (1850) puis celle du gaz (1950). Ces
                  énergies primaires sont remarquablement concentrées. Elles
                  nous ont permis d&apos;accéder à l&apos;abondance énergétique.
                  Cette dernière est la cause profonde de l&apos;explosion de la
                  démographie mondiale, de l&apos;augmentation de
                  l&apos;espérance de vie, de l&apos;augmentation du pouvoir
                  d&apos;achat et de l&apos;émergence de la classe moyenne
                  supérieure. Lors de leur combustion (utilisation) ces énergies
                  primaires fossiles émettent du gaz carbonique (CO2). Cette
                  molécule est un gaz à effet de serre. L&apos;effet de serre
                  est un phénomène naturel par lequel certains gaz présents dans
                  l&apos;atmosphère retiennent la chaleur en absorbant le
                  rayonnement infra-rouge émis par la Terre. Ce phénomène a
                  permis l&apos;apparition de la vie sur Terre mais
                  aujourd&apos;hui l&apos;être humain ajoute à ce phénomène
                  naturel une composante que l&apos;on appelle « effet de serre
                  additionnel ». Par ses activités et plus précisément son
                  recours massif à l&apos;utilisation d&apos;énergie
                  d&apos;origine fossile, l&apos;être humain extrait des
                  hydrocarbures (molécules composées d&apos;atomes de carbone et
                  d&apos;hydrogène) du sol de la Terre et en les exploitant,
                  rejette du CO2 dans l&apos;atmosphère. Le bilan énergétique de
                  la Terre est alors déséquilibré. La température moyenne
                  globale de la planète augmente et les phénomènes climatiques
                  extrêmes voient leur intensité et leur fréquence
                  s&apos;accentuer. L&apos;être humain a, à ce jour, rejeté dans
                  l&apos;atmosphère près de 2 500 Gt de CO2 depuis 1850
                  augmentant par voie de conséquence la température moyenne
                  globale de la Terre de +1.2 °C par rapport à l&apos;aire
                  préindustrielle. Dans ce contexte, comment maintenir un
                  confort de vie digne et serein ? Il est urgent d&apos;agir en
                  transformant notre mode de vie, en réduisant drastiquement nos
                  émissions de gaz à effet de serre, en stoppant la destruction
                  du vivant qui est à l&apos;œuvre.
                </p>
                <div class="mt-4 mb-2 flex justify-between pr-2">
                  <button class="block italic text-sm font-semibold text-gray-700 cursor-auto">
                    Publié le 15/05/2023
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/decarbonation">
            <div class="w-64 sm:w-fit sm:m-6 p-6 mx-10 bg-white rounded-xl shadow-xl hover:scale-105 transition-all transform duration-500">
              <Image
                src="/2023-05-10_11h32_36.png"
                width={300}
                height={300}
                alt="article"
              />
              <div class="mt-4 ">
                <h1 class="text-xl font-bold text-gray-700 w-fit">
                  La décarbonation : la choisir ou la subir
                </h1>
                <p class="text-sm mt-2 text-gray-700 line-clamp-3">
                  Renouvelable mon cher Watson ? Pour commencer clarifions
                  ensemble ce terme que l&apos;on entend partout mais que
                  l&apos;on ne comprend, au fond, pas vraiment. Si je vous
                  disais que notre bonne vieille bibine préférée, le pétrole,
                  était renouvelable, me prendriez-vous pour un fou ? Bon, et
                  bien le pétrole est renouvelable. En effet, le pétrole se
                  renouvelle naturellement, grâce à la décomposition du plancton
                  sur le plancher océanique, en quelques dizaines de millions
                  d&apos;années. Une notion de temporalité est donc à ajouter au
                  côté de celle de renouvelable. Nous dirons donc plutôt : le
                  pétrole n&apos;est pas une source d&apos;énergie renouvelable
                  à l&apos;échelle de temps des activités humaines. Le vent, le
                  soleil, la pluie sont quant à elles belle et bien
                  renouvelables à l&apos;échelle de temps de nos activités. Je
                  vous propose un peu de mathématique élémentaire. Prenons un
                  stock naturel de ressource donné une foi pour toute (sans
                  évolution sur la période d&apos;exploitation de cette
                  dernière). Au commencement de l&apos;exploitation la quantité
                  de ressource extraite de l&apos;environnement va doucement
                  croître puis augmenter de façon plus ou moins importante en
                  fonction de l&apos;intensité de l&apos;exploitation en
                  question. Le stock donné une foi pour toute commence donc à
                  baisser tranquillement sans conséquences notables.
                  L&apos;exploitation de la ressource commence à devenir
                  intensive. Un pic (un maximum) de production est alors
                  atteint. Le stock est considérablement réduit et la production
                  n&apos;est donc plus en mesure de suivre le même rythme. La
                  quantité de ressource extraites de l&apos;environnement
                  décroît alors jusqu&apos;à épuisement des stocks. Le pic de
                  productivité du pétrole dit conventionnel, c&apos;est-à-dire
                  tout ce qui n&apos;est pas sables bitumineux du Canada et
                  pétrole de Schiste, est passé dans les alentours des années
                  2008. L&apos;Europe est passée depuis le début des années 2000
                  dans une décrue subie d&apos;approvisionnement en pétrole. En
                  Janvier 2024, plus de 50 000 entreprises françaises seront
                  concernées par la nouvelle CSRD. 50 000 entreprises,
                  contraintes par la règlementation, de mettre en œuvre le Bilan
                  Carbone de leur société.
                </p>
                <div class="mt-4 mb-2 flex justify-between pr-2">
                  <button class="block italic text-sm font-semibold text-gray-700 cursor-auto">
                    Publié le 17/05/2023
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/arguments-transition">
            <div class="w-64 sm:w-fit sm:m-6 p-6 mx-10 bg-white rounded-xl shadow-xl hover:scale-105 transition-all transform duration-500">
              <Image
                src="/transition.jpg"
                width={300}
                height={300}
                alt="article"
              />
              <div class="mt-4 ">
                <h1 class="text-xl font-bold text-gray-700 w-fit">
                  Pourquoi transitionner?
                </h1>
                <p class="text-sm mt-2 text-gray-700 line-clamp-3">
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
                <div class="mt-4 mb-2 flex justify-between pr-2">
                  <button class="block italic text-sm font-semibold text-gray-700 cursor-auto">
                    Publié le 19/05/2023
                  </button>
                </div>
              </div>
            </div>
          </Link>
          {/* <div class="w- sm:m-6 p-6 mx-10 bg-white rounded-xl shadow-xl hover:scale-105 transition-all transform duration-500">
            <Image
              src="/2022_11_15_evolution_mondiale_past.png"
              width={270}
              height={300}
              alt="article"
            />
            <div class="mt-4">
              <h1 class="text-2xl font-bold text-gray-700">
                Titre de l&apos;article
              </h1>
              <p class="text-sm mt-2 text-gray-700">Texte explicatif</p>

              <div class="mt-4 mb-2 flex justify-between pr-2">
                <button class="block text-xl font-semibold text-gray-700 cursor-auto">
                  Date
                </button>
              </div>
            </div>
          </div>
          <div class="w- sm:m-6 p-6 mx-10 bg-white rounded-xl shadow-xl hover:scale-105 transition-all transform duration-500">
            <Image
              src="/monde-temperature-16000.jpg"
              width={320}
              height={300}
              alt="article"
            />
            <div class="mt-4">
              <h1 class="text-2xl font-bold text-gray-700">
                Titre de l&apos;article
              </h1>
              <p class="text-sm mt-2 text-gray-700">Texte explicatif</p>

              <div class="mt-4 mb-2 flex justify-between pr-2">
                <button class="block text-xl font-semibold text-gray-700 cursor-auto">
                  Date
                </button>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="text-center">
          <button className="bg-009999 border rounded-md p-2">
            <a href="/articles" className="uppercase text-white">
              Voir tous les articles{" "}
            </a>{" "}
          </button>
        </div> */}
      </div>{" "}
      <div
        id="contact"
        className="selection:bg-009999 selection:text-white bg-white h-fit sm:pt-10 pb-24 pt-24"
      >
        <div className="grid grid-row-2 sm:grid sm:grid-cols-1">
          <div className="pl-12 pr-12">
            <p className="text-009999 text-center text-[3rem] tablet:text-4xl tablet:text-left sm:pt-12 sm:text-xl sm:w-full sm:pr-5 sm:text-left laptop:text-left uppercase font-bold tracking-wide">
              contactez-moi{" "}
            </p>{" "}
            <p className="text-black text-center sm:text-left text-xl tablet:text-left sm:text-lg sm:pt-5 pt-5 laptop:text-left">
              Pour toute question sur UN&DEMI, ou pour une demande concernant un
              accompagnement particulier, contactez-nous.
            </p>
          </div>
        </div>{" "}
        <div className="text-center sm:text-left tablet:text-left laptop:text-left laptop:pl-12 tablet:pl-12 sm:pl-12 pt-12">
          <button className="bg-009999 border rounded-md p-2">
            <Link href="/contact" className="uppercase text-white">
              Nous contacter{" "}
            </Link>{" "}
          </button>
        </div>
      </div>{" "}
    </>
  );
}
