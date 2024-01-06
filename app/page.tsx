import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";
import { FormWrapper } from "./components/FormWrapper";
import { Great_Vibes } from "next/font/google";
import { Open_Sans } from "next/font/google";

const vibe = Great_Vibes({ subsets: ["latin"], weight: "400" });
const open = Open_Sans({ subsets: ["latin"], weight: "300" });

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-5xl m-auto items-center justify-center flex-col py-10 px-5 prose mb-8">
      <section className="font-mono text-center">
        <div className="mb-4 relative w-52 h-52 m-auto">
          <Image
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
            alt="Sam och Madde"
            src="/sam-madde.jpeg"
          />
        </div>
        <h1 className={`pb-4 text-md mt-20 mb-0 text-5xl ${vibe.className}`}>
          The Kazemis
        </h1>
      </section>
      <section className="w-full">
        <div className="md:mx-16 text-center border-b pb-5">
          <h2 className={`text-sm mt-4 ${open.className}`}>13 - 14 maj 2024</h2>
          <p className={open.className}>
            Vi älskar varandra! Vi älskar er! Vi ska gifta oss och vill inget
            hellre än dela den glädjen med just er. Det kommer att bli ett
            ganska litet bröllop där vi önskar att få spendera två dagar i maj
            med er i en liten by i Toscana. För lite mer praktisk information
            läs gärna vidare och låt oss veta om ni kan komma. Det hoppas vi ♥
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="md:px-16">
          <h2 className={`${vibe.className} text-4xl mb-3 mt-8`}>
            Var och när?
          </h2>
          <p className={open.className}>
            Amore ska firas under 13-14 maj i en liten by utanför Pisa i
            Italien. Den lilla mysiga byn heter{" "}
            <a target="_blank" href="https://www.valledibadia.it/en/">
              Valle di Badia
            </a>{" "}
            och där har vi bokat boende åt oss alla under dessa två dagar.
          </p>
          <p className={open.className}>
            Man flyger enklast antingen till Pisa eller till Florens. Från Pisa
            tar det ca 30 minuter med taxi och från Florens tar det ca 1 timma
            med taxi. Man behöver således inte hyra en bil för att ta sig. Ryan
            air flyger direkt från Arlanda till Pisa, annars finns det många
            andra bolag som flyger till Florens men då oftast med
            mellanlandningar.
          </p>
          <p className={open.className}>
            Flyg ner: Det är bra om man väljer ett flyg så att man är på plats
            senast på eftermiddagen i Valle di Badia den 13 maj eftersom vi
            kommer att påbörja firandet redan den kvällen.
            <span className="block">
              Flyg hem: Vi rekommenderar att boka flyg så att ni hinner äta
              frukost med oss den 15 maj och därefter åker vidare till
              flygplatsen för att ta er hem.
            </span>
          </p>
          <p className={open.className}>
            Ett litet tips är att det är Kristi Himmelfärd helgen innan så vill
            man ta en långweekend så kan man åka redan torsdag eller fredag.
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="md:px-16">
          <h2 className={`${vibe.className} text-4xl mb-3 mt-8`}>
            Måndagen den 13 maj 2024
          </h2>
          <article className={open.className}>
            <p>Benvenuto! Prosecco! Pizza! Gelato!</p>
            <p>
              Välkomna till Valle di Bada! Vi kommer att påbörja firandet med
              lite mingel och en regelrätt italiensk pizzafest. Detta avslutas
              givetvis som sig bör med gelato!
            </p>
            <p>
              Dress code: La Dolce Vita! Italian Glam! Tänk er vackra mönster i
              fina färger, tänk citrus, tänk medelhavet. Kör! More is more!
              Eller amore is amore!
            </p>
          </article>
        </div>
      </section>
      <section className="w-full">
        <div className="md:px-16">
          <h2 className={`${vibe.className} text-4xl mb-3 mt-8`}>
            Tisdagen den 14 maj 2024
          </h2>
          <article className={open.className}>
            <p>Ciao Mr and Mrs Kazemi!</p>
            <p>
              Vi börjar dagen med en gemensam frukost och därefter har ni
              möjlighet att hänga lite vid poolen. Kanske blir det lite
              poolparty om vädret tillåter.
            </p>
            <p>
              Ceremonin kommer att börja runt 15.30. Det enda vi vet just nu är
              att det är fullt ös från att vi börjar till 01.00. Sen har vi fått
              veta att det är strikt natti natti som gäller. Mer detaljerat
              schema kommer ni att få ta del av senare.
            </p>
            <p>
              Dress code: Ditt absolut snyggaste jag in Italy. Mörk kostym. Tänk
              fortsatt more is more, amore is amore!
            </p>
          </article>
        </div>
      </section>
      <section className="w-full">
        <div className="md:mx-16">
          <h2 className={`${vibe.className} text-4xl mb-3 mt-8`}>
            Övrig information
          </h2>
          <article className={open.className}>
            <Image
              alt="Valle di badia"
              src="/valle-di-badia.jpeg"
              width={900}
              height={200}
            />
            <section className="my-0">
              <h4>Boende</h4>
              <p>
                Valle di Badia har lite olika lägenheter på området där vi ska
                bo. Man bor i lägenheter om 4-6 personer. När vi vet exakt hur
                många vi kommer att bli, kommer vi att göra vårt bästa för att
                alla ska trivas med boendet och bo med någon de känner.
              </p>
              <p>
                Boendekostnad per person: 3300 kr. Swisha till Sam på telefonnr
                0763900451 i samband med att ni OSAr att ni kommer. Skulle du
                betala för fler så skriv gärna alla namnen in meddelanderaden så
                att vi vet vilka ni betalar för.
              </p>
            </section>
            <section>
              <h4>Presenter och barn</h4>
              <p>We love them but don&apos;t bring them.</p>
            </section>
          </article>
        </div>
      </section>
      <section className="w-full">
        <div className="md:mx-16 border-t mt-10">
          <h2 className={`${vibe.className} text-4xl text-center mt-12`}>
            Toastmadames
          </h2>
          <p className={`text-center ${open.className} mb-0`}>
            Skulle ni vilja hålla (korta) tal går detta bra. Låt våra
            toastmadames Sophie och Nadja få veta genom att maila dem på{" "}
            <a href="mailto: toastkazam@gmail.com">toastkazam@gmail.com</a>.
          </p>
          <p className={`text-center ${open.className} mb-0`}>
            Sophie en multitasker av rang - här dricker hon sin dricka, pratar i
            telefon och ammar samtidigt. Nadja är något av en shopoholic så
            skulle ni vilja ha en likadan huvudbonad så finns den på Moncler för
            6000 spänn. Ett kap!
          </p>
          <article className={`${open.className} mb-8`}>
            <div className="flex">
              <div className="mb-4 relative w-32 h-32 mr-5 ml-auto">
                <Image
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  className="rounded-full mt-6"
                  alt="Sophie"
                  src="/sophie.jpg"
                />
              </div>
              <div className="mb-4 relative w-32 h-32 mr-auto">
                <Image
                  fill
                  className="rounded-full mt-6"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  alt="Nadja"
                  src="/nadja.jpg"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="w-full relative mt-20">
        <div className="pb-6 md:px-16">
          <div className="text-center">
            <h2 className={`${vibe.className} text-4xl text-center mt-0`}>
              OSA
            </h2>
            <p className={`${open.className} mb-0`}>
              OSA gärna senast den{" "}
              <strong className="underline">26 januari 2024</strong> genom
              formuläret nedan.
            </p>
            <p className={`${open.className} mt-0`}>
              Vi hoppas verkligen att vi ska få fira tillsammans med er.
            </p>
            <p className={open.className}>Välj antalet personer att OSA för:</p>
          </div>
          <FormWrapper />
        </div>
      </section>
      <CountdownTimer endDate={new Date("2024-05-13")} />
    </main>
  );
}
