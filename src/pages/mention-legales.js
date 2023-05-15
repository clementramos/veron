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
        <title>UN&DEMI - Mentions légales et crédits</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full">
        <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12">
          Mentions légales et crédits
        </p>
        <p className="text-009999 mx-12 pt-2 text-2xl">
          {" "}
          <p className="text-009999 pb-12 ml-2 pt-2 text-2xl">
            Le présent site est la propriété de la société UN&DEMI.<br></br> Dénomination
            sociale : UN&DEMI<br></br> Hébergeur : OVH cloud - SAS au capital de 10 174
            560 € - RCS Lille Métropole 424 761 419 00045 - Code APE 2620Z - N°
            TVA : FR 22 424 761 419 - Siège social : 2 rue Kellermann - 59100
            Roubaix - France <br></br>Webmaster : UN&DEMI <br></br><b>Propriété intellectuelle :</b> <br></br> Les
            marques, logos, textes et tout autre élément figurant sur ce site
            sont la propriété de UN&DEMI ou de ses éventuels partenaires et ne
            peuvent donc être exploités sans le consentement préalable et écrit
            des titulaires des droits sur ces éléments, sous peine de
            contrefaçon.<br></br> UN&DEMI interdit toute exploitation des éléments
            figurant sur son site, et de son lien hypertexte, à des fins
            illicites. Elle se réserve le droit de poursuivre les tiers
            exploitant ses éléments et créations sur des sites aux contenus
            illicites et de réclamer les dommages et intérêts qui résulteraient
            du préjudice.<br></br> Les utilisateurs peuvent toutefois communiquer sur
            l&apos;existence du site, ainsi que toute personne dans l&apos;exercice de la
            liberté d&apos;information (journalistes, blogueurs, etc.) à des fins de
            présentation et de mise en avant sur les réseaux sociaux et leurs
            sites Internet ou blogs.<br></br> <b>Responsabilité :</b> <br></br>UN&DEMI ne saurait être tenu
            pour responsable du non fonctionnement, d&apos;une impossibilité d&apos;accès
            ou du dysfonctionnement des services du fournisseur d&apos;accès des
            utilisateurs ou du réseau internet. Il en sera de même pour toutes
            autres évènements liés à une cause extérieure de UN&DEMI.<br></br> Vis-à-vis
            des tiers, les utilisateurs sont responsables des informations,
            éléments et données qu&apos;ils sont amenés à fournir sur ce site avec
            leur consentement. Ils sont également responsables de leurs contenus
            postés dans la partie Feedbacks du site.<br></br> UN&DEMI se réserve le droit
            de procéder, a posteriori, au retrait de tout contenu que serait
            manifestement illicite (dénigrement, diffamation, injures,
            incitations haineuses, publicité en faveur de produits et services
            illicites, etc.) ou qui seraient irrespectueux vis-à-vis des autres
            utilisateurs.<br></br><b>Traitement des données personnelles :</b> <br></br> <b>Dispositions
            générales :</b> <br></br> Le responsable du traitement des données concernant les
            utilisateurs est UN&DEMI. UN&DEMI s&apos;engage à se conformer à ses
            obligations légales en matière de données personnelles et à
            respecter la stricte confidentialité du traitement des données et
            informations fournies par les utilisateurs et non visibles par le
            public. <br></br>Les données collectées dans le formulaire destiné à recevoir
            la newsletter et dans le formulaire contact sont strictement
            nécessaires pour fournir le service proposé, assurer le bon
            fonctionnement du site et répondre à la demande de l&apos;utilisateur. Le
            traitement ne peut se faire sans son consentement. Les données et
            informations transmises sont destinées à UN&DEMI et ne feront
            l&apos;objet d&apos;aucun transfert à des tiers. Des cookies strictement
            nécessaires à l&apos;utilisation du site sont déposés.<br></br> Sans ces cookies,
            le service proposé sur ce site ne pourrait être fourni. <br></br>D&apos;autres
            cookies sont déposés, avec le consentement de l&apos;utilisateur, pour
            réaliser des statistiques d&apos;audience (Google Analytics). Ces cookies
            dépendent principalement de ce tiers émetteur, UN&DEMI n&apos;en a pas la
            maîtrise. L&apos;utilisateur est invité à se référer à la politique de
            confidentialité de ce tiers et à exercer ses droits directement
            auprès de ce tiers :<br></br>
            https://policies.google.com/technologies/cookies?hl=fr
            https://tools.google.com/dlpage/gaoptout <br></br>Les cookies peuvent aussi
            être supprimés via le paramétrage des navigateurs. <br></br>Pour en savoir
            plus sur ce paramétrage
            : https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser <br></br>
            <b>Destinataires :</b> <br></br>Les données et informations transmises par
            l&apos;utilisateur sont destinées à UN&DEMI et ne feront l&apos;objet d&apos;aucun
            transfert à des tiers pour une utilisation marketing ou commerciale,
            encore moins dans des Etats ne remplissant pas les garanties
            suffisantes conformément aux prescriptions de l&apos;UE. Seuls les
            prestataires de UN&DEMI (hébergeur, webmaster, Google analytics,
            Power BI), dument habilités, peuvent avoir accès à ces données.<br></br>
            <b>Droits de l&apos;utilisateur :</b><br></br>Conformément à la loi n°78–17 du 6 janvier
            1978 modifiée, l&apos;utilisateur dispose, à tout moment, d&apos;un droit
            d&apos;accès, d&apos;opposition, de modification et de suppression des données
            personnelles le concernant, en s&apos;adressant
            à victor.veron@unetdemi.fr <br></br><b>Sécurité des données personnelles :</b> <br></br>
            Conformément à la loi n°78-17 du 6 janvier 1978 modifiée, UN&DEMI
            s&apos;engage à prendre toute précaution utile pour préserver la sécurité
            des données personnelles concernant l&apos;utilisateur et, notamment,
            empêcher que ses données personnelles ne soient endommagées ou que
            des tiers non autorisés y aient accès.
          </p>
          
        </p>
        
        <button className="ml-12 pt-2 bg-009999 border rounded-md p-2">
          <Link href="/contact" className="uppercase text-white">
            retour{" "}
          </Link>{" "}
        </button>
      </div>
      <Footer />
    </>
  );
}
