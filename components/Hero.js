import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {" "}
      <div className="">
        <div className="sm:h-fit h-full bg-forest flex items-center justify-center">
          <div className="text-center sm:w-full">
            <div className=" bg-white">
              <Image
                className="mx-auto"
                src="/Flyer Un&Demi.png"
                width={300}
                height={18}
                alt="logo"
              />
              <p className="selection:bg-009999 selection:text-white text-009999 text-center text-[9rem] sm:text-5xl sm:w-full sm:pb-5 sm:pt-12 sm:text-center uppercase font-bold tracking-tighter">
                un & demi{" "}
              </p>{" "}
              <p className="selection:bg-009999 selection:text-white text-black text-center text-4xl sm:text-3xl font-light uppercase pb-12">
                pédagogie et enthousiasme climatique.{" "}
              </p>{" "}
              <button class="bg-transparent pt-12">
                <Link href="#scroll" className="uppercase" scroll={false}>
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
              id="scroll"
              className="h-screen grid grid-cols-2 sm:grid sm:grid-cols-1"
            >
              <div className="pl-12 ">
                <p className="text-009999 text-left text-[3rem] sm:text-xl sm:w-full sm:pr-5 sm:text-left pt-12 uppercase font-bold tracking-tighter">
                  Pourquoi transitionner ? Les arguments de la transition{" "}
                </p>{" "}
                <p className="text-white text-left text-xl text-justify sm:text-lg sm:pt-5 pb-12 pt-12  pr-24 pr-5">
                  <b>Ressources</b> : améliorer votre résilience face à
                  l&apos;augmentation des coûts et des difficultés d&apos;accès
                  à l&apos;énergie et aux matières premières.
                  <br></br>
                  <b>Réglementation</b> : anticiper et respecter
                  l&apos;évolution et le durcissement de la réglementation.
                  <br></br>
                  <b>Marque</b> : soigner votre image de marque et votre marque
                  employeur : répondre aux nouvelles exigences des clients et
                  des candidats.
                  <br></br>
                  <b>Concurrence</b> : Différenciez-vous de la concurrence en
                  opérant les changements garantissant la pérennité économique
                  de l&apos;entreprise dans un monde qui se réchauffe.
                  <br></br>
                  <b>Finance</b> : facilitez-vous l&apos;accès aux financements
                  (appels d&apos;offre publics, banque d&apos;investissement,
                  investisseurs…)
                  <br></br>
                  Participer au défi enthousiasmant d&apos;imagination et de
                  construction d&apos;une économie et d&apos;une société
                  atténuée et adaptée au défi colossal qui se présente.
                </p>{" "}
                <button className="bg-009999 border rounded-md p-2">
                  <Link href="/expertise" className="uppercase text-white">
                    Découvrez nos champs d&apos;expertise{" "}
                  </Link>{" "}
                </button>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          id="articles"
          className="selection:bg-009999 selection:text-white bg-white sm:pt-2 pt-12 sm:h-fit h-screen"
        >
          <div className="grid grid-row-2 sm:grid sm:grid-cols-1">
            <div className="pl-12 pr-12">
              <p className="text-009999 text-center text-[3rem] sm:text-xl sm:w-full sm:pr-5 sm:text-left uppercase font-bold tracking-tighter">
                articles à lire pour mieux comprendre les enjeux de la
                transition énergétique et climatique{" "}
              </p>{" "}
              <p className="text-black text-center text-xl sm:hidden sm:pr-5 pt-5 px-64">
                La transition énergétique et climatique est un sujet
                d&apos;actualité majeur. <br />
                Pour mieux comprendre les enjeux qui y sont liés, il est
                important de s&apos;informer et de se tenir au courant des
                dernières avancées dans ce domaine.{" "}
              </p>
            </div>
          </div>{" "}
          <div class="pt-12 pb-12 bg-white flex justify-center items-center sm:grid sm:grid-cols-1 sm:pt-2">
            <Link href="/histoire-energie-climat">
              <div class="w-64 sm:w-fit sm:m-6 p-6 mx-10 bg-white rounded-xl shadow-xl hover:scale-105 transition-all transform duration-500">
                <Image
                  src="/2023-05-10_11h32_36.png"
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
                    l&apos;exploitation industrielle du charbon. Viendront par
                    la suite celles du pétrole (1850) puis celle du gaz (1950).
                    Ces énergies primaires sont remarquablement concentrées.
                    Elles nous ont permis d&apos;accéder à l&apos;abondance
                    énergétique. Cette dernière est la cause profonde de
                    l&apos;explosion de la démographie mondiale, de
                    l&apos;augmentation de l&apos;espérance de vie, de
                    l&apos;augmentation du pouvoir d&apos;achat et de
                    l&apos;émergence de la classe moyenne supérieure. Lors de
                    leur combustion (utilisation) ces énergies primaires
                    fossiles émettent du gaz carbonique (CO2). Cette molécule
                    est un gaz à effet de serre. L&apos;effet de serre est un
                    phénomène naturel par lequel certains gaz présents dans
                    l&apos;atmosphère retiennent la chaleur en absorbant le
                    rayonnement infra-rouge émis par la Terre. Ce phénomène a
                    permis l&apos;apparition de la vie sur Terre mais
                    aujourd&apos;hui l&apos;être humain ajoute à ce phénomène
                    naturel une composante que l&apos;on appelle « effet de
                    serre additionnel ». Par ses activités et plus précisément
                    son recours massif à l&apos;utilisation d&apos;énergie
                    d&apos;origine fossile, l&apos;être humain extrait des
                    hydrocarbures (molécules composées d&apos;atomes de carbone
                    et d&apos;hydrogène) du sol de la Terre et en les
                    exploitant, rejette du CO2 dans l&apos;atmosphère. Le bilan
                    énergétique de la Terre est alors déséquilibré. La
                    température moyenne globale de la planète augmente et les
                    phénomènes climatiques extrêmes voient leur intensité et
                    leur fréquence s&apos;accentuer. L&apos;être humain a, à ce
                    jour, rejeté dans l&apos;atmosphère près de 2 500 Gt de CO2
                    depuis 1850 augmentant par voie de conséquence la
                    température moyenne globale de la Terre de +1.2 °C par
                    rapport à l&apos;aire préindustrielle. Dans ce contexte,
                    comment maintenir un confort de vie digne et serein ? Il est
                    urgent d&apos;agir en transformant notre mode de vie, en
                    réduisant drastiquement nos émissions de gaz à effet de
                    serre, en stoppant la destruction du vivant qui est à
                    l&apos;œuvre.
                  </p>
                  <div class="mt-4 mb-2 flex justify-between pr-2">
                    <button class="block italic text-sm font-semibold text-gray-700 cursor-auto">
                      Publié le 15/05/2023
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
          id="mission"
          className="selection:bg-009999 selection:text-white pb-5 h-screen sm:h-fit bg-white"
        >
          <div className="grid grid-cols-2 sm:grid sm:grid-cols-1">
            <Image
              src="/IMG-20230512-WA0045.jpg"
              alt="victor"
              width={500}
              height={600}
              className="sm:hidden mx-auto rounded-xl sm:px-5"
              loading="eager"
            />
            <div className="sm:pl-12 sm:pt-12 laptop:m-auto laptop:mr-48">
              <p className="text-009999 text-left text-[3rem] sm:text-xl sm:w-full sm:pr-5 sm:text-left uppercase font-bold tracking-tighter">
                Qui suis-je ?
              </p>{" "}
              <p className="text-black text-left text-xl sm:text-lg sm:pt-5 pb-12 pt-12  pr-24 pr-5">
                Animée par une farouche ambition de participer à la création
                d&apos;une économie et d&apos;une société désirables, Un&Demi
                porte haut et fort ses valeurs d&apos;engagement, de pédagogie
                et d&apos;enthousiasme. <br></br>
                <br></br>
                Chaque jour, Un&Demi est pleinement investit dans sa mission :
                accompagner les organisations et les individus dans un monde qui
                connaît et connaîtra un nombre de soubresauts de plus en plus
                fréquents et intenses. Ensemble, nous parviendrons à limiter les
                impacts du changement climatique sur nos sociétés en limitant le
                réchauffement de la température globale moyenne de la Terre à
                +1.5°C au dessus des niveaux pré-industriels.<br></br>
                <br></br> Ingénieur de formation et après 6 années
                d&apos;activités dans le secteur on ne peut plus carboné de la
                chimie, nous apportons aux organisations pédagogie et expertise
                énergie climat. Le but : vous accompagner vers l&apos;action et
                ainsi vous doter d&apos;une activité résiliente et adaptée aux
                bouleversements à venir.
              </p>{" "}
              <button className="bg-009999 border rounded-md p-2">
                <Link href="/contact" className="uppercase text-white">
                  En savoir plus{" "}
                </Link>{" "}
              </button>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          id="contact"
          className="selection:bg-009999 selection:text-white bg-white h-fit pb-24"
        >
          <div className="grid grid-row-2 sm:grid sm:grid-cols-1">
            <div className="pl-12 pr-12">
              <p className="text-009999 text-center text-[3rem] sm:pt-12 sm:text-xl sm:w-full sm:pr-5 sm:text-left uppercase font-bold tracking-tighter">
                contactez-moi{" "}
              </p>{" "}
              <p className="text-black text-center sm:text-left text-xl sm:text-lg sm:pt-5 pt-5 laptop:px-64">
                Pour toute question sur UN&DEMI, ou pour une demande concernant
                un accompagnement particulier, contactez-nous.
              </p>
            </div>
          </div>{" "}
          <div className="text-center sm:text-left sm:pl-12 pt-12">
            <button className="bg-009999 border rounded-md p-2">
              <a href="" className="uppercase text-white">
                Nous contacter{" "}
              </a>{" "}
            </button>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
