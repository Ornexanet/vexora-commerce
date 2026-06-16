import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returpolicy | Ornexa",
  description:
    "Läs Ornexas returpolicy, villkor för returer, återbetalningar och reklamationer.",
};

export default function ReturnsRefundPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold">Returpolicy</h1>

        <p className="mb-6 text-gray-700">
          På Ornexa vill vi att du ska känna dig trygg när du handlar hos oss.
          Här hittar du information om returer, återbetalningar och reklamationer.
        </p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. Ångerrätt</h2>
            <p>
              Du har rätt att ångra ditt köp inom 14 dagar från den dag du har
              tagit emot din vara. Produkten ska returneras i oanvänt skick och
              i originalförpackning när det är möjligt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">2. Så gör du en retur</h2>
            <p>
              För att påbörja en retur kontaktar du oss via vår kontaktsida.
              Ange ordernummer, produktnamn och orsaken till returen så hjälper
              vi dig vidare.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">3. Återbetalning</h2>
            <p>
              När vi har mottagit och kontrollerat den returnerade varan
              behandlar vi återbetalningen. Återbetalningen sker normalt till
              samma betalningsmetod som användes vid köpet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">4. Reklamation</h2>
            <p>
              Om en produkt är skadad eller felaktig vid leverans ber vi dig att
              kontakta oss så snart som möjligt. Beskriv felet och bifoga gärna
              bilder så att vi kan hantera ärendet snabbare.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">5. Returfrakt</h2>
            <p>
              Kunden ansvarar normalt för returfrakten vid ångrat köp. Vid
              godkänd reklamation står Ornexa för eventuella returkostnader.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">6. Kontakt</h2>
            <p>
              Har du frågor om returer eller återbetalningar är du välkommen att
              kontakta oss via vår kontaktsida.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
