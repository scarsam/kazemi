import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";
import { Form } from "./components/Form";
import { FormWrapper } from "./components/FormWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col py-10 px-5">
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
        <h1 className="text-md">The Kazemis</h1>
        <h2 className="text-xs">❤️ 13/05 - 14/05 - 2024 ❤️</h2>
        <CountdownTimer endDate={new Date("2024-05-13")} />
      </section>
      <section className="pt-10">
        <FormWrapper />
      </section>
    </main>
  );
}
