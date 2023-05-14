import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="sm:h-fit h-screen bg-white flex items-center justify-center">
        <div className="text-center sm:w-full md:h-fit h-screen">
          <Image
            className="mx-auto"
            src="/Flyer Un&Demi.png"
            width={250}
            height={18}
            alt="logo"
          />
          <p className="selection:bg-009999 selection:text-white text-009999 text-center text-[9rem] sm:text-5xl sm:w-full sm:pb-5 sm:pt-12 sm:text-center uppercase font-bold tracking-tighter">
            un & demi{" "}
          </p>{" "}
          <p className="selection:bg-009999 selection:text-white text-black text-center text-4xl sm:text-3xl font-light uppercase pb-12">
            pédagogie et enthousiasme climatique.{" "}
          </p>{" "}
          <button class="bg-transparent pt-24">
            <Link href="#scroll" className="uppercase" scroll={false}>
              <Image
                src="/arrow_down.svg"
                alt="arrow down"
                width={100}
                height={100}
              />{" "}
            </Link>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div
        id="scroll"
        className="selection:bg-009999 selection:text-white sm:pb-2 pb-12 h-screen bg-white"
      >
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-1">
          <div className="pl-12">
            <p className="text-009999 text-left text-[3rem] sm:text-xl sm:w-full sm:pr-5 sm:text-left pt-12 uppercase font-bold tracking-tighter">
              La transition énergétique, un impératif pour lutter contre le
              changement climatique{" "}
            </p>{" "}
            <p className="text-black text-left text-xl text-justify sm:text-lg pb-12 pt-12 sm:pt-5 pr-24 pr-5">
              En tant que consultant en énergie et climat, mon travail consiste
              à aider les entreprises, les gouvernements et les organisations à
              réduire leur impact sur l&apos;environnement en mettant en place des
              stratégies durables et efficaces. Mon rôle est de les accompagner
              dans leur transition vers des pratiques plus respectueuses de l&apos;environnement en proposant des solutions innovantes et
              personnalisées.Je travaille en étroite collaboration avec mes
              clients pour évaluer leur consommation d&apos;énergie et leur
              empreinte carbone, et élaborer des plans d&apos;action concrets pour
              réduire ces impacts négatifs. Je les conseille également sur les
              technologies et les pratiques les plus adaptées pour maximiser
              leur efficacité énergétique et leur utilisation d&apos;énergies
              renouvelables. Mon objectif est d&apos;aider mes clients à devenir des
              leaders de la transition énergétique, tout en maximisant leur
              rentabilité et en créant un impact positif sur l&apos;environnement et
              la société dans son ensemble.{" "}
            </p>{" "}
            <button className="bg-009999 border rounded-md p-2">
              <a href="" className="uppercase text-white">
                Découvrez nos champs d&apos;expertise{" "}
              </a>{" "}
            </button>
          </div>{" "}
          <Image
            src="/illustration émissions évitées.png"
            alt="coaching"
            width={800}
            height={500}
            className="sm:hidden pt-64 sm:pt-5 sm:px-5"
            loading="eager"
          />
        </div>{" "}
      </div>{" "}
      <div
        id="articles"
        className="selection:bg-009999 selection:text-white bg-white sm:pt-2 pt-12 sm:h-full h-screen"
      >
        <div className="grid grid-row-2 sm:grid sm:grid-cols-1">
          <div className="pl-12 pr-12">
            <p className="text-009999 text-center text-[3rem] sm:text-xl sm:pr-5 sm:text-left uppercase font-bold tracking-tighter">
              articles à lire pour mieux comprendre les enjeux de la transition
              énergétique et climatique{" "}
            </p>{" "}
            <p className="text-black text-center text-xl sm:hidden sm:pr-5 pt-5 px-64">
              La transition énergétique et climatique est un sujet d&apos;actualité
              majeur. <br />
              Pour mieux comprendre les enjeux qui y sont liés, il est important
              de s&apos;informer et de se tenir au courant des dernières avancées
              dans ce domaine.{" "}
            </p>
          </div>
        </div>{" "}
        <div class="pt-12 pb-12 bg-white flex justify-center items-center sm:grid sm:grid-cols-1 sm:pt-2">
          <div class="w- sm:m-6 p-6 mx-10 bg-white rounded-xl shadow-xl hover:scale-105 transition-all transform duration-500">
            <Image
              src="/2023-05-10_11h32_36.png"
              width={300}
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
          </div>
        </div>
        <div className="text-center">
          <button className="bg-009999 border rounded-md p-2">
            <a href="" className="uppercase text-white">
              Voir tous les articles{" "}
            </a>{" "}
          </button>
        </div>
      </div>{" "}
      <div
        id="mission"
        className="selection:bg-009999 selection:text-white pb-5 h-screen sm:h-screen bg-white"
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
          <div className="sm:pl-12 sm:pt-24 laptop:m-auto laptop:mr-48">
            <p className="text-009999 text-left text-[3rem] sm:text-5xl sm:w-full sm:pr-5 sm:text-left uppercase font-bold tracking-tighter">
              Notre mission chez UN&DEMI
            </p>{" "}
            <p className="text-black text-left text-xl sm:text-2xl sm:pr-5 pb-12 pt-12  pr-24 pr-5">
              UN&DEMI accompagne la transformation du monde vers la
              décarbonation et l’adaptation au changement climatique. Trait
              d’union entre l’excellence scientifique et le monde économique,
              nous aidons nos client·es à appréhender le monde qui se dessine,
              avec lucidité et enthousiasme. <br></br> <br></br>Notre mission :
              guider et éclairer nos client·es vers des stratégies assurant
              pérennité et résilience, dans un monde soumis à la dérive
              climatique et à des ressources finies.
            </p>{" "}
            <button className="bg-009999 border rounded-md p-2">
              <a href="" className="uppercase text-white">
                En savoir plus{" "}
              </a>{" "}
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
            <p className="text-009999 text-center text-[3rem] sm:text-5xl sm:w-full sm:pr-5 sm:text-left uppercase font-bold tracking-tighter">
             contactez-moi{" "}
            </p>{" "}
            <p className="text-black text-center text-xl sm:text-2xl sm:pr-5 pt-5 laptop:px-64">
            Pour toute question sur UN&DEMI, ou pour une demande concernant un accompagnement particulier, contactez-nous.
            </p>
          </div>
        </div>{" "}
        
        <div className="text-center pt-12">
          <button className="bg-009999 border rounded-md p-2">
            <a href="" className="uppercase text-white">
              Nous contacter{" "}
            </a>{" "}
          </button>
        </div>
      </div>{" "}
    </>
  );
}
