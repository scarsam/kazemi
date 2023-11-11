import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";
import { Form } from "./components/Form";
import { FormWrapper } from "./components/FormWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-5xl m-auto items-center justify-center flex-col py-10 px-5 prose">
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
        <h1 className="text-md mt-20">The Kazemis</h1>
        <h2 className="text-xs">❤️ 13/05 - 14/05 - 2024 ❤️</h2>
        <CountdownTimer endDate={new Date("2024-05-13")} />
      </section>
      <section className="pt-10 w-full">
        <div className="shadow-lg border border-red-200 px-8 pb-4 md:pb-10 md:px-16">
          <h2>🇮🇹 Var?</h2>
          <p>
            <strong>Pizza & mingel</strong> - Wow, kan ni tro att vi är här i
            Toscana, dagen före bröllopet? Solen håller på att gå ner, och
            doften av vedeldad pizza fyller luften - det är helt magiskt! Vi är
          </p>
        </div>
      </section>
      <section className="pt-10 w-full">
        <div className="shadow-lg border border-red-200 px-8 pb-4 md:pb-10 md:px-16">
          <h2>🍕🥂 Måndag 13/05 🥂🍕</h2>
          <p>
            <strong>Pizza & mingel</strong> - Wow, kan ni tro att vi är här i
            Toscana, dagen före bröllopet? Solen håller på att gå ner, och
            doften av vedeldad pizza fyller luften - det är helt magiskt! Vi är
            alla klädda för en perfekt sommarkväll i Italien, och jag kan inte
            få nog av det lokala vinet.
          </p>
          <p>
            Kolla in pizzakocken! Han är som en deg-jonglör, och varje pizza han
            tar ut ur ugnen är ett litet mästerverk. Jag har redan smakat på tre
            olika sorter, och jag kan inte bestämma vilken som är bäst. Och allt
            detta under en himmel som sakta tänds av ljus och lyktor, medan en
            gitarrist spelar mjuka toner i bakgrunden.
          </p>
          <p>
            Det här är verkligen den perfekta uppladdningen inför morgondagens
            &quot;Ja&quot;! Kan inte vänta på att se vad morgondagen har i
            beredskap för oss.
          </p>
        </div>
      </section>
      <section className="pt-10 w-full">
        <div className="shadow-lg border border-red-200 px-8 pb-4 md:pb-10 md:px-16">
          <h2>👰🏻‍♀️🤵🏻 Tisdag 14/05 🤵🏻👰🏻‍♀️</h2>
          <article>
            <p>
              <strong>Vigsel & fest</strong> - Snart är det dags för vår
              toskanska drömdag! Tänk er: Vi säger &quot;ja&quot; mitt bland
              vinrankor och solkyssta kullar.
            </p>
            <p>
              Och efteråt - fest under stjärnorna! Vi ska dansa på en stenlagd
              gård till lokala hits, smaska på italienska läckerheter (pasta,
              ost, och mer), och skratta tills vi inte kan mer. Och du, tårtan?
              Den blir lika storstilad som dagen själv!
            </p>
          </article>
          <article>
            <p>
              Gör er redo för en natt full av skratt, dans, och oförglömliga
              minnen. Vi ses snart i Toscana!
            </p>
          </article>
        </div>
      </section>
      <section className="pt-10 w-full">
        <div className="shadow-lg border border-red-200 px-8 pb-4 md:pb-10 md:px-16 grid grid-cols-2 gap-x-8">
          <h2 className="col-span-2">Bra att veta</h2>
          <article>
            <h3>Mat och dryck</h3>
            Förrätt, huvudrätt och traditionsenlig bröllopstårta. Vi bjuder på
            dryck såväl under middagen som i baren efteråt.
          </article>
          <article>
            <h3>Boende</h3>
            Om du kommer långväga och vill övernatta rekommenderar vi Hotell
            Rubin som ligger nära festlokalen.
          </article>
          <article>
            <h3>Klädsel</h3>
            Kavaj innebär för herrar att man ska bära kostym. Men val av färg
            både på kavajen och skjortan gör du själv. För damer innebär det
            klänning, kjol, byxdress eller dräkt.
          </article>
          <article>
            <h3>Barn</h3>
            Barn är underbara men den här dagen väljer vi att fira i vuxet
            sällskap. Spädbarn är självklart välkomna.
          </article>
        </div>
      </section>
      <section className="pt-10 w-full">
        <div className="shadow-lg border border-red-200 px-8 pb-4 md:pb-10 md:px-16 grid grid-cols-2 gap-x-8">
          <div className="text-center col-span-2">
            <h2>Bra att veta</h2>
            <p>
              OSA i formuläret nedan senast den 15/1. Om du har frågor hör gärna
              av dig till vårt värdpar.
            </p>
            <p>Välj antalet personer att OSA för:</p>
          </div>
          <FormWrapper />
        </div>
      </section>
    </main>
  );
}
