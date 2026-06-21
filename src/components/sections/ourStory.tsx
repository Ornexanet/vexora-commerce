import React from "react";
import Title from "../ui/title";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-[720fr_780fr] items-center gap-x-25 gap-y-10">
          <div>
            <Image
              width={720}
              height={850}
              sizes="100vw"
              src="/images/ornexa-about-hero.webp"
              alt="Our Story"
            />
          </div>
          <div>
            <Title size="60" className="tracking-[-1.5px] mb-4">
              Om Ornexa
            </Title>
            <div className="text-light-dark sm:text-xl text-lg space-y-4">
             <p>
  På Ornexa gör vi modern elektronik enklare att välja. Vi erbjuder noggrant utvalda mobiler,
  smartklockor, hörlurar och tillbehör för kunder som vill ha kvalitet, funktion och en smidig
  köpupplevelse.
</p>

<p>
  Vårt mål är att samla produkter som passar både vardag, arbete och träning – från pålitliga
  smartphones till smarta tillbehör som gör tekniken mer användbar i livet varje dag.
</p>

<p>
  Vi bygger Ornexa som en tydlig, snabb och pålitlig e-handelsbutik där produkterna presenteras
  med relevant information, enkel navigering och ett professionellt fokus på kundens behov.
</p>

<p>
  Välkommen till Ornexa – din butik för smart elektronik och tillbehör.
</p>

            </div>
            <Button asChild className="mt-10">
              <Link href={"/shop"}>Utforska våra produkter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
