"use client";

import { useEffect, useRef, useState } from "react";
import { Form } from "./Form";
import { createRow } from "../actions/formActions";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = ({
  status,
  clearForm,
}: {
  status: string | undefined;
  clearForm: void;
}) => {
  // const [success, setSuccess] = useState(false);
  const { pending } = useFormStatus();

  // useEffect(() => {
  //   let successTimeout: ReturnType<typeof setTimeout> | undefined;

  //   if (status === "success") {
  //     setSuccess(true);

  //     // Set a new timeout to reset the success state after 4 seconds (2 seconds for "success" and an additional 2 seconds to reset).
  //     successTimeout = setTimeout(() => {
  //       setSuccess(false);
  //     }, 4000);
  //   }

  //   // Cleanup function to clear the timeout when the component unmounts or status changes.
  //   return () => {
  //     if (successTimeout) {
  //       clearTimeout(successTimeout);
  //     }
  //   };
  // }, [status, clearForm]);

  return (
    <>
      <button
        disabled={pending}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-start-1 col-end-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Skickar 🎉 ❤️ 🎉 ❤️ 🎉" : "Skicka"}
      </button>
    </>
  );
};

export const FormWrapper = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useFormState(createRow, { message: null });
  const [guests, setGuests] = useState(0);

  return (
    <>
      <div className="mb-4">
        <p>
          OSA i formuläret nedan senast den 15/1. Om du har frågor hör gärna av
          dig till vårt värdpar.
        </p>
        <p>Välj antalet personer att OSA för:</p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className={`bg-red-200 px-4 py-2 rounded-sm hover:bg-red-300 ${
              guests === i ? "bg-red-400" : ""
            }`}
            onClick={() => setGuests(i)}
          >
            {i}
          </button>
        ))}
      </div>
      {guests !== 0 && (
        <form className="grid grid-cols-2 gap-4" ref={ref} action={formAction}>
          {[...Array(guests)].map((_, i) => (
            <Form key={i} guest={i + 1} />
          ))}
          <SubmitButton
            status={state?.message}
            clearForm={ref.current?.reset()}
          />
        </form>
      )}
    </>
  );
};
