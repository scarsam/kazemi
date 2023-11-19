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
        <h1
          className={`pb-4 text-md mt-20 mb-0 text-5xl ${vibe.className}`}
        >
          The Kazemis
        </h1>
      </section>
      <section className="w-full">
        <div className="px-8 md:mx-16 text-center border-b pb-5">
        <h2 className={`text-sm mt-4 ${open.className}`}>13 - 14 maj 2024</h2>
          <p className={open.className}>
            Vi älskar varandra! Vi älskar er! Vi ska gifta oss och vill inget
            hellre än dela den glädjen med just er. Det kommer att bli ett
            ganska intimt bröllop där vi önskar att spendera två dagar i maj med
            er i en liten by i Toscana. För lite mer praktisk information läs
            gärna vidare och låt oss veta om ni kan komma. Det hoppas vi ❤️
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="px-8 md:px-16">
          <h2 className={`${vibe.className} text-4xl mb-3`}>Var och när?</h2>
          <p className={open.className}>
            Under 13-14 maj har vi abonnerat ett mysigt ställe där vi alla ska
            bo och där vi kommer att spendera dessa två dagar. I en liten by
            utanför Pisa, Toscana, i Italien.
          </p>
          <p className={open.className}>
            Man flyger enklast antingen till Pisa eller till Florens. Från Pisa
            tar det ca 30 minuter med taxi och från Florens tar det ca 1 timma
            med taxi. Man behöver således inte hyra en bil för att ta sig. Ryan
            air åker direkt från Arlanda till Pisa, annars finns det många andra
            bolag som flyger till Florens.
          </p>
          <p className={open.className}>
            Flyg ner: Det är bra om man väljer ett flyg så att man är på plats
            senast på eftermiddagen på Valle di Badia den 13 maj eftersom vi
            kommer att påbörja firandet redan den kvällen. Flyg hem: Vi
            rekommenderar att boka flyg så att ni äter frukost med oss den 15
            maj och därefter åker vidare till flygplatser för att ta er hem.
          </p>
          <p className={open.className}>
            Ett litet tips är att det är kristi himmelfärd helgen innan - så
            vill man ta en långweekend så kan man åka redan torsdag eller
            fredag.
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="px-8 md:px-16">
          <h2 className={`${vibe.className} text-4xl mb-3`}>
            Måndagen den 13 maj 2024
          </h2>
          <article className={open.className}>
            <p>Benvenuto! Prosecco! Pizza! Gelato!</p>
            <p>
              Välkomna till Valle di Bada! Vi kommer att påbörja firandet med
              lite mingel och en regelrätt pizzafest. Detta avslutas givetvis
              med gelato!
            </p>
            <p>Dress code: Sommarfin in Italy! / Dolce vita</p>
          </article>
        </div>
      </section>
      <section className="w-full">
        <div className="px-8 md:px-16">
          <h2 className={`${vibe.className} text-4xl mb-3`}>
            Tisdagen den 14 maj 2024
          </h2>
          <article className={open.className}>
            <p>Ciao ciao mr and mrs Kazemi!</p>
            <p>
              Vi börjar dagen med en gemensam frukost och därefter har ni
              möjlighet att hänga lite vid poolen. Kanske blir det pool pre
              party.
            </p>
            <p>
              Ceremonin kommer att börja runt 15.30. Det enda vi vet just nu är
              att det är fullt ös från att vi börjar till 01.00. Då är det natti
              natt som gäller.
            </p>
          </article>
        </div>
      </section>
      <section className="w-full">
        <div className="px-8 md:pb-8 md:px-16 grid grid-cols-3 gap-x-8">
          <h2 className={`col-span-3 text-4xl mb-3 ${vibe.className}`}>
            Övrig information
          </h2>
          <article className={`${open.className} col-span-2 md:col-span-1`}>
            <h4>Boende</h4>
            <p>
              Detta är ett intimt bröllop och Valle di Badia har lite olika
              lägenheter på området där vi ska bo. Man bor i lägenheter om 4-6
              personer. När vi vet hur många vi kommer att bli, kommer vi att
              göra vårt bästa för att alla ska trivas med boendet och bo med
              någon de känner.
            </p>
          </article>
          <article className={`${open.className} col-span-2 md:col-span-1`}>
            <h4>OSA</h4>
            <p>OSA gärna senast den 12 januari 2024 genom formuläret nedan. Vi
              hoppas verkligen att vi ska få fira tillsammans med er.</p>
          </article>
          <article className={`${open.className} col-span-2 md:col-span-1`}>
            <h4>Barn</h4>
            <p>We love them, but don&apos;t bring them!</p>
          </article>
        </div>
      </section>
      <section className="w-full relative">
        <div className="px-8 pb-4 md:pb-6 md:px-16 grid grid-cols-2 gap-x-8">
          <div className="text-center col-span-2">
            <h1 className={vibe.className}>Arrivederci!</h1>

            <p className={open.className}>Välj antalet personer att OSA för:</p>
          </div>
          <FormWrapper />
        </div>
      </section>
      <CountdownTimer endDate={new Date("2024-05-13")} />
    </main>
  );
}
