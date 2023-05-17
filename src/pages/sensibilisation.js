import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
export default function Expertise() {
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
        <p className="text-009999 text-4xl font-bold uppercase  pt-12 mb-12">
          Sensibilisation et formation - Enjeux climatiques
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
          faut comprendre. Depuis sa création en 2018, la Fresque du Climat est
          devenue l&apos;outil de référence qui permet aux individus et aux
          organisations de s&apos;approprier le défi de l&apos;urgence
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
          La Fresque du Climat est un outil neutre et objectif. Il se fonde sur
          les données issues des rapports scientifiques du GIEC (Groupe
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
          Présentation académique énergie climat à la manière JMJ{" "}
        </p>
        <p className="text-sm italic  pb-12 text-gray-500 text-sm">
          1h avec présentation PowerPoint
        </p>
        <p className="text-black   pt-2 pb-12 text-2xl">
          Vous découvrirez ou redécouvrirez notre « petite » histoire d&apos;énergie
          et de climat. Nous vous inviterons à cette occasion à prendre le recul
          nécessaire afin d&apos;appréhender les enjeux de notre temps avec un nouvel
          œil. Cette présentation se veut entièrement interactive et
          collaborative dans la juste continuité de l&apos;atelier précédent.
        </p>
        <button className=" pt-2 bg-009999 border rounded-md p-2">
          <Link href="/contact" className="uppercase text-white">
            être recontacté{" "}
          </Link>{" "}
        </button>
      </div>
      <Footer />
    </>
  );
}
