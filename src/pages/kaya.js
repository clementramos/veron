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
        <title>UN&DEMI - Kaya</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full">
        <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
          L&apos;équation de Kaya
        </p>
        <p className="text-009999 mx-12 pt-2 text-2xl">
          {" "}
          <p className="text-009999  ml-2 pt-2 text-2xl">
            L&apos;équation de Kaya nous permet d&apos;identifier les leviers
            d&apos;actions qui permettraient la réduction des émissions de GES.
          </p>
          <ol className="ml-12 list-disc">
            <li>
              <p className="text-009999  ml-2 pt-2 text-2xl">
                Décarboner l&apos;énergie avec des méthodes de production
                bas-carbone (hydro, nucléaire, éolien, solaire...)
              </p>
            </li>
            <li>
              <p className="text-009999  ml-2 pt-2 text-2xl">
                Diminuer la quantité d&apos;énergie nécessaire pour générer 1€
                de PIB (efficacité énergétique)
              </p>
            </li>
            <li>
              <p className="text-009999  ml-2 pt-2 text-2xl">
                Réduire la productivité du travail (baisser le pouvoir
                d&apos;achat)
              </p>
            </li>
            <li>
              <p className="text-009999  ml-2 pt-2 text-2xl">
                Baisser la population mondiale{" "}
              </p>
            </li>
          </ol>
          <p className="text-009999 italic ml-2 pt-2 text-2xl">
            kg CO2eq = kg CO2eq/kWh x kWh/€ x €/hab x hab
          </p>
          <p className="text-009999  ml-2 pt-2 text-2xl">
            Il est clair que les deux dernières options de sont pas
            réjouissantes. C&apos;est pourquoi il est urgent de plancher sur les
            deux premières : décarboner l&apos;économie mondiale.
          </p>
        </p>
        <Image
          className="ml-12 pt-12 pb-12 sm:mx-auto"
          src="/Kaya.png"
          alt="équation de kaya"
          width={800}
          height={200}
        />
        <button className="ml-12 pt-2 bg-009999 border rounded-md p-2">
          <Link href="/contact" className="uppercase text-white">
            être recontacté{" "}
          </Link>{" "}
        </button>
      </div>
      <Footer />
    </>
  );
}
