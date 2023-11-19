import { useState } from "react";
import Confetti from "react-confetti";

export const Form = ({ guest }: { guest: number }) => {
  const [confetti, setConfetti] = useState(false);

  const displayConfetti = () => {
    setConfetti(true)
    setTimeout(() => {
      setConfetti(false)
    }, 5000)
  }

  return (
    <div className="col-span-2 mb-2">
      {confetti && <div className='fixed left-0 top-0'><Confetti tweenDuration={800} colors={['#008C45', '#F4F9FF', '#CD212A']} /></div>}
      <p className="text-lg font-semibold">Gäst {guest}</p>
      <div className='grid grid-cols-2 gap-4'>
        <label className="mb-3 block">
          Namn
          <input
            className="border border-gray-300 rounded-md p-2 block w-full"
            type="text"
            required
            name={`firstname-${guest}`}
            placeholder="Ditt förnamn"
            />
        </label>
        <label className="mb-3 block">
          Efternamn
          <input
            className="border border-gray-300 rounded-md p-2 block w-full"
            type="text"
            required
            name={`lastname-${guest}`}
            placeholder="Ditt efternamn"
            />
        </label>
      </div>
      <label className="mb-3 block">
        E-post
        <input
          className="border border-gray-300 rounded-md p-2 block w-full"
          type="email"
          name={`email-${guest}`}
          placeholder="din@email.se"
        />
      </label>
      <label className="mb-3 block">
        Telefonummer
        <input
          className="border border-gray-300 rounded-md p-2 block w-full"
          type="tel"
          name={`phone-${guest}`}
          placeholder="073-123-4567"
        />
      </label>
      <fieldset className="block col-start-1 col-end-3 mb-3 w-full">
        <legend>Kommer du på bröllopet?</legend>
        <div className='absolute top-1 -left-1/2'>
    </div>
        <div>
          <input
            className="mr-2"
            type="radio"
            onClick={displayConfetti}
            id={`ja-${guest}`}
            name={`osa-${guest}`}
            value="ja"
          />
          <label htmlFor={`ja-${guest}`}>Ja, självklart!</label>
        </div>

        <div className="w-full">
          <input
            className="mr-2"
            type="radio"
            id={`nej-${guest}`}
            name={`osa-${guest}`}
            value="nej"
          />
          <label htmlFor={`nej-${guest}`}>Nej, tyvärr</label>
        </div>
      </fieldset>

      <label className="col-start-1 col-end-3 mb-3 w-full" htmlFor="mat">
        Har du några mat preferenser?
        <input
          className="border border-gray-300 rounded-md p-2 block w-full"
          type="textarea"
          name={`food-${guest}`}
          placeholder="Jag är vegetarian och äter kött"
        />
      </label>
    </div>
  );
};
