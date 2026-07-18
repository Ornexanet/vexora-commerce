"use client";

import { useState } from "react";

import Title from "@/components/ui/title";
import { ProductType } from "@/mockData/products";

type ProductTabsProps = {
  product: ProductType;
};

type TabId =
  | "description"
  | "specifications"
  | "delivery"
  | "reviews";

const tabs: {
  id: TabId;
  label: string;
}[] = [
  {
    id: "description",
    label: "Beskrivning",
  },
  {
    id: "specifications",
    label: "Specifikationer",
  },
  {
    id: "delivery",
    label: "Leverans & garanti",
  },
  {
    id: "reviews",
    label: "Recensioner",
  },
];

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] =
    useState<TabId>("description");

  const legacySpecifications = [
    {
      label: "Varumärke",
      value: product.brand,
    },
    {
      label: "Modell",
      value: product.model,
    },
    {
      label: "Lagring",
      value: product.storage,
    },
    {
      label: "Färg",
      value: product.color,
    },
    {
      label: "Skärm",
      value: product.display,
    },
    {
      label: "Processor",
      value: product.processor,
    },
    {
      label: "Kamera",
      value: product.camera,
    },
    {
      label: "Batteri",
      value: product.battery,
    },
    {
      label: "Operativsystem",
      value: product.os,
    },
    {
      label: "Garanti",
      value: product.warranty,
    },
    {
      label: "Lagerstatus",
      value: product.availability,
    },
  ].filter(
    (
      specification
    ): specification is {
      label: string;
      value: string;
    } => Boolean(specification.value)
  );

  const technicalSpecifications =
    product.specifications &&
    product.specifications.length > 0
      ? product.specifications
      : legacySpecifications;

  const overview =
    product.overview || product.description;

  const whyChoose =
    product.whyChoose &&
    product.whyChoose.length > 0
      ? product.whyChoose
      : product.features?.map(
          (feature) => feature.title
        ) ?? [];

  const perfectFor =
    product.perfectFor &&
    product.perfectFor.length > 0
      ? product.perfectFor
      : [
          "Daglig användning",
          "Arbete och studier",
          "Underhållning",
        ];

  const inTheBox =
    product.inTheBox &&
    product.inTheBox.length > 0
      ? product.inTheBox
      : [
          product.title,
          "Dokumentation",
          "Garantiinformation",
        ];

  return (
    <section className="mt-16 border-t border-light-gray pt-12 md:mt-20 md:pt-16">
      <div className="container">
        <div className="overflow-x-auto border-b border-light-gray">
          <div
            className="flex min-w-max gap-8"
            role="tablist"
            aria-label="Produktinformation"
          >
            {tabs.map((tab) => {
              const isActive =
                activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() =>
                    setActiveTab(tab.id)
                  }
                  className={`relative pb-4 text-lg font-semibold transition ${
                    isActive
                      ? "text-blue"
                      : "text-light-dark hover:text-foreground"
                  }`}
                >
                  {tab.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="py-10 md:py-14">
          {activeTab === "description" && (
            <div>
              <div className="max-w-4xl">
                <Title
                  size="36"
                  className="font-extrabold"
                >
                  Om produkten
                </Title>

                <p className="mt-5 text-lg leading-8 text-light-dark">
                  {overview}
                </p>
              </div>

              {product.features &&
                product.features.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-2xl font-extrabold text-foreground">
                      Produktens höjdpunkter
                    </h3>

                    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {product.features.map(
                        (feature) => (
                          <article
                            key={`${feature.title}-${feature.text}`}
                            className="rounded-2xl border border-light-gray bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4FF] text-lg font-bold text-blue">
                              ✓
                            </div>

                            <h4 className="mt-4 text-lg font-bold text-foreground">
                              {feature.title}
                            </h4>

                            <p className="mt-2 leading-7 text-light-dark">
                              {feature.text}
                            </p>
                          </article>
                        )
                      )}
                    </div>
                  </div>
                )}

              <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <article className="rounded-2xl border border-light-gray bg-white p-6">
                  <h3 className="text-xl font-extrabold text-foreground">
                    Varför välja denna produkt?
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {whyChoose.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-light-dark"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-sm font-bold text-blue">
                          ✓
                        </span>

                        <span className="leading-7">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-2xl border border-light-gray bg-white p-6">
                  <h3 className="text-xl font-extrabold text-foreground">
                    Perfekt för
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {perfectFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-light-dark"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-sm font-bold text-blue">
                          ✓
                        </span>

                        <span className="leading-7">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-2xl border border-light-gray bg-white p-6">
                  <h3 className="text-xl font-extrabold text-foreground">
                    Detta ingår i förpackningen
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {inTheBox.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-light-dark"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-sm font-bold text-blue">
                          ✓
                        </span>

                        <span className="leading-7">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          )}

          {activeTab ===
            "specifications" && (
            <div>
              <Title
                size="36"
                className="font-extrabold"
              >
                Tekniska specifikationer
              </Title>

              {technicalSpecifications.length >
              0 ? (
                <dl className="mt-7 grid grid-cols-1 gap-x-10 md:grid-cols-2">
                  {technicalSpecifications.map(
                    (specification) => (
                      <div
                        key={`${specification.label}-${specification.value}`}
                        className="grid grid-cols-[minmax(120px,180px)_1fr] gap-5 border-b border-light-gray py-4"
                      >
                        <dt className="font-bold text-foreground">
                          {
                            specification.label
                          }
                        </dt>

                        <dd className="text-light-dark">
                          {
                            specification.value
                          }
                        </dd>
                      </div>
                    )
                  )}
                </dl>
              ) : (
                <p className="mt-5 text-light-dark">
                  Tekniska specifikationer är
                  inte tillgängliga för denna
                  produkt.
                </p>
              )}
            </div>
          )}

          {activeTab === "delivery" && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <article className="rounded-2xl border border-light-gray bg-white p-6">
                <h3 className="text-xl font-bold text-foreground">
                  Leverans
                </h3>

                <p className="mt-3 leading-7 text-light-dark">
                  Normal leveranstid är 1–3
                  arbetsdagar för produkter som
                  finns i lager.
                </p>
              </article>

              <article className="rounded-2xl border border-light-gray bg-white p-6">
                <h3 className="text-xl font-bold text-foreground">
                  Lagerstatus
                </h3>

                <p className="mt-3 leading-7 text-light-dark">
                  {product.availability ||
                    "Kontakta oss för lagerstatus."}
                </p>
              </article>

              <article className="rounded-2xl border border-light-gray bg-white p-6">
                <h3 className="text-xl font-bold text-foreground">
                  Garanti
                </h3>

                <p className="mt-3 leading-7 text-light-dark">
                  {product.warranty ||
                    "Garantivillkor kan variera beroende på produkt."}
                </p>
              </article>

              <article className="rounded-2xl border border-light-gray bg-white p-6 lg:col-span-3">
                <h3 className="text-xl font-bold text-foreground">
                  Retur och öppet köp
                </h3>

                <p className="mt-3 max-w-4xl leading-7 text-light-dark">
                  Du har rätt att returnera
                  produkten enligt Ornexa Shops
                  returvillkor. Produkten ska
                  returneras i ursprungligt skick
                  med tillhörande förpackning och
                  tillbehör.
                </p>
              </article>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <Title
                size="36"
                className="font-extrabold"
              >
                Kundrecensioner
              </Title>

              <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
                <div className="rounded-2xl bg-[#F4F6F8] p-7 text-center">
                  <p className="text-5xl font-extrabold text-foreground">
                    5.0
                  </p>

                  <div
                    className="mt-3 text-xl text-[#FFBE0C]"
                    aria-label="5 av 5 stjärnor"
                  >
                    ★★★★★
                  </div>

                  <p className="mt-3 text-light-dark">
                    Baserat på 250 recensioner
                  </p>
                </div>

                <article className="rounded-2xl border border-light-gray bg-white p-7">
                  <h3 className="text-xl font-bold text-foreground">
                    Mycket bra produkt
                  </h3>

                  <div
                    className="mt-2 text-[#FFBE0C]"
                    aria-label="5 av 5 stjärnor"
                  >
                    ★★★★★
                  </div>

                  <p className="mt-4 leading-7 text-light-dark">
                    Produkten motsvarade
                    förväntningarna och fungerade
                    bra för daglig användning.
                    Leveransen var snabb och
                    produkten var väl förpackad.
                  </p>

                  <p className="mt-4 text-sm font-medium text-light-dark">
                    Verifierad kund
                  </p>
                </article>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
