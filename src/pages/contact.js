import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const options = [];

  // Yup error message overrides
  const errMess = {
    req: "Merci de remplir ce champ !",
  };

  // Yup Schema for this form
  const ContactSchema = yup.object().shape({
    name: yup.string().label("Nom").required(errMess.req).min(3).max(20),
    id: yup.string().label("Prénom").required(errMess.req).min(3).max(20),
    email: yup
      .string()
      .label("Adresse Email")
      .required(errMess.req)
      .email("Adresse Email Invalide"),
    entreprise: yup
      .string()
      .label("Entreprise")
      .required(errMess.req)
      .min(3)
      .max(55),
    message: yup
      .string()
      .label("Message")
      .required(errMess.req)
      .min(3)
      .max(255),
  });

  // Destruct useForm() and set our Yup schema as the validation resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // Send our valid form data to our back-end API
  const submitForm = async (data) => {
    setIsSubmitting(true);

    const res = await axios({
      method: "POST",
      url: "/api/contact-form",
      data: data,
    })
      .then((res) => {
        setIsSubmitting(false);
        return res;
      })
      .catch((e) => {
        alert("Une erreur est survenue.");
        console.error(e);
      });

    if (res.data.status === 1) {
      setIsSubmitted(true);
    } else {
      alert(res.data.message);
    }
  };

  const variants = {
    hidden: { opacity: 0, x: 0, y: -250 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Head>
        <title>UN&DEMI - Contact</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>

      <div className="h-full bg-white">
        {" "}
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
          {" "}
          <div className="h-fit py-5 text-start grid grid-cols-6">
            {" "}
            <button className="bg-009999 border rounded-md p-2 mx-auto justify-start col-start-2">
              <Link href="/">
                <Image
                  className="mx-auto"
                  src="/home1.svg"
                  alt=""
                  width={35}
                  height={15}
                />
              </Link>
            </button>
          </div>
          <div className="h-full bg-white">
            <p className="text-009999 text-[7rem] sm:text-6xl sm:pt-12 text-center font-bold tracking-wide tablet:text-6xl">
              Contact
            </p>
            {/* <div className="grid grid-cols-6">
            {" "}
            <p className="text-black text-3xl pt-10 pb-16 text-center text-justify col-start-3 col-span-2">
              Pour toute question sur UN&DEMI, ou pour une demande concernant un
              accompagnement particulier, contactez-nous.
            </p>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 col-start-3 col-span-2" />
          </div> */}

            <div className="pt-16 flex flex-col items-center bg-white h-screen">
              <div className="bg-white shadow-2xl rounded w-1/2 p-10 tablet:w-3/4 sm:w-full sm:px-5 sm:w-5/6">
                {!isSubmitted ? (
                  <>
                    <form onSubmit={handleSubmit((data) => submitForm(data))}>
                      <div className="">
                        <label
                          htmlFor="name"
                          className="text-left block text-base font-medium text-black"
                        >
                          Nom *
                        </label>
                        <p className="text-red-500 italic">
                          {errors.name?.message}
                        </p>
                        <input
                          type="text"
                          placeholder="John"
                          min={1}
                          max={25}
                          isInvalid={errors.name}
                          {...register("name")}
                          className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                        />
                        <label
                          htmlFor="id"
                          className="text-left block text-base font-medium text-black"
                        >
                          Prénom *
                        </label>
                        <p className="text-red-500 italic">
                          {errors.id?.message}
                        </p>
                        <input
                          type="text"
                          placeholder="Doe"
                          min={1}
                          max={25}
                          isInvalid={errors.id}
                          {...register("id")}
                          className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                        />
                        <label
                          htmlFor="entreprise"
                          className="text-left block text-base font-medium text-black"
                        >
                          Entreprise *
                        </label>
                        <p className="text-red-500 italic">
                          {errors.entreprise?.message}
                        </p>
                        <input
                          type="text"
                          placeholder="Exemple"
                          isInvalid={errors.entreprise}
                          {...register("entreprise")}
                          className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                        />
                        <label
                          htmlFor="email"
                          className="text-left mt-5 block text-base font-medium text-black"
                        >
                          Email *
                        </label>
                        <p className="text-red-500 italic">
                          {errors.email?.message}
                        </p>
                        <input
                          type="text"
                          placeholder="email@gmail.com"
                          isInvalid={errors.email}
                          {...register("email")}
                          className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                        />
                        <label
                          htmlFor="message"
                          className="text-left block text-base font-medium text-black"
                        >
                          Votre message *
                        </label>
                        <p className="text-red-500 italic">
                          {errors.message?.message}
                        </p>
                        <textarea
                          placeholder="Votre message"
                          isInvalid={errors.message}
                          {...register("message")}
                          className="focus:outline-none focus:ring focus:border-none focus:ring-yellow-ecf py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-5"
                        ></textarea>
                      </div>

                      <button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                        className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-009999  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <p className="text-black text-6xl font-bold mb-10">
                      Merci !
                    </p>
                    <p className="text-black text-2xl">
                      Votre demande de contact a bien été prise en compte.
                      <br></br>
                      Vous recevrez un mail de confirmation sous peu.
                    </p>
                    <p className="text-black text-lg pt-5">
                      Vous pouvez maintenant quitter cette page.
                    </p>
                    <div className="flex justify-center items-center pt-10">
                      <button className="text-xl font-bold w-auto py-2 px-5 border border-black rounded text-black bg-transparent hover:shadow-xl hover:shadow-black">
                        <Link href="/">Retour à la page principale</Link>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>{" "}
        </motion.main>{" "}
        <Footer />
      </div>
    </>
  );
}
