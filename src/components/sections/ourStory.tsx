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
              src="/images/our-story.png"
              alt="Our Story"
            />
          </div>
          <div>
            <Title size="60" className="tracking-[-1.5px] mb-4">
              Our Story
            </Title>
            <div className="text-light-dark sm:text-xl text-lg space-y-4">
              <p>
                At Vexora, we believe technology isn’t just about performance —
                it’s about connection, creativity, and lifestyle. What began as
                a small passion project by a group of tech enthusiasts turned
                into a full-fledged destination for the latest and smartest
                gadgets.
              </p>
              <p>
                From the first smartwatch we sold, to today`s expansive lineup
                of earbuds, action cameras, drones, smart speakers, and more —
                our mission has remained the same:
              </p>
              <p>
                Today, Vexora is trusted by thousands of customers and
                professionals across the globe, not just because of what we sell
                — but because of how we make you feel supported, inspired, and
                confident in your choices.
              </p>
              <p> Welcome to Vexora.Where technology meets personality.</p>
            </div>
            <Button asChild className="mt-10">
              <Link href={"#"}>See Our History</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
