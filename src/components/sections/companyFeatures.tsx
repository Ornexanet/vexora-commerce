"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Title from "../ui/title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VexoraFeatures = [
  {
    icon: (inView: boolean) => <IconOne inView={inView} />,
    title: "Avancerade produkter",

    description:
  "Ornexa erbjuder ett noggrant utvalt sortiment av modern elektronik och smarta tillbehör från ledande varumärken.",


  },
  {
    icon: (inView: boolean) => <IconTwo inView={inView} />,
    title: "Hög kvalitet",

    description:
    "Alla produkter är utvalda med fokus på kvalitet, prestanda och lång hållbarhet för en trygg köpupplevelse.",

  },
  {
    icon: (inView: boolean) => <IconThree inView={inView} />,
    title: "Modern design",

    description:
    "Upptäck innovativ teknik och stilren design som passar både arbete, fritid och vardagens behov.",

  },
  {
    icon: (inView: boolean) => <IconFour inView={inView} />,
    title: "Kundupplevelse",

    description:
    "Vi strävar efter att erbjuda snabb service, säker betalning och en smidig shoppingupplevelse från början till slut.",

  },
];

const CompanyFeatures = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-[714fr_785fr] xl:gap-x-[101px] gap-x-10 gap-y-10">
          <div>
            <Image
              width={714}
              height={860}
              sizes="100vw"
              src={"/images/companyFeatures.png"}
              alt="img"
              className="rounded-lg"
            />
          </div>
          <div>
            <Title className="max-w-[785px] xl:leading-[78px]">
              Gör ditt köp smartare: Upptäck produkter som passar 
              din digitala vardag
            </Title>
            <div className="grid sm:grid-cols-2 gap-x-[30px] gap-y-16 mt-14">
              {VexoraFeatures.map(({ description, icon, title }, index) => {
                return (
                  <div key={index} ref={ref}>
                    <div className="mb-6">{icon(inView)}</div>
                    <Title asChild size="28">
                      <h6>{title}</h6>
                    </Title>
                    <p className="text-light-dark text-lg mt-3">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
            <Button asChild className="rounded-lg mt-12">
              <Link href={"/about"}>Läs mer om oss</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyFeatures;

function IconOne({ inView }: { inView: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={73}
      height={73}
      viewBox="0 0 73 73"
      fill="none"
    >
      <motion.path
        d="M1 72V2L71 72H1Z"
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M15.6914 57.4527V2.14404L71 57.4527H15.6914Z"
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}
function IconTwo({ inView }: { inView: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={70}
      viewBox="0 0 70 70"
      fill="none"
    >
      <motion.rect
        x="0.5"
        y="0.5"
        width={69}
        height={69}
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M63.1338 51.5H5.86621L34.5 1.99707L63.1338 51.5Z"
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.line
        x1="34.5"
        y1={70}
        x2="34.5"
        y2={35}
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  );
}
function IconThree({ inView }: { inView: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={71}
      height={71}
      viewBox="0 0 71 71"
      fill="none"
    >
      <motion.rect
        x="0.566162"
        y="0.566406"
        width={69}
        height={69}
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.rect
        x="15.1744"
        y="0.612372"
        width="56.2628"
        height="56.2628"
        transform="rotate(15 15.1744 0.612372)"
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}
function IconFour({ inView }: { inView: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={78}
      height={78}
      viewBox="0 0 78 78"
      fill="none"
    >
      <motion.rect
        x="56.5591"
        y="38.5"
        width="35.0591"
        height="35.0591"
        transform="rotate(90 56.5591 38.5)"
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.circle
        cx={39}
        cy={39}
        r="38.5"
        stroke="#ACB7C2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}
