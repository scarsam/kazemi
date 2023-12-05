"use client";

import { useRef, useState } from "react";
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
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded col-span-2 disabled:opacity-50 disabled:cursor-not-allowed w-full"
    >
      {pending ? "Skickar 🎉 ❤️ 🎉 ❤️ 🎉" : "Skicka"}
    </button>
  );
};

export const FormWrapper = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useFormState(createRow, { message: null });
  const [guests, setGuests] = useState(0);

  return (
    <>
      <div className="mb-4 text-center col-span-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className={`bg-green-700 text-white px-4 py-2 mx-1 rounded-sm hover:bg-green-800 ${
              guests === i ? "bg-red-500 hover:bg-red-500" : ""
            }`}
            onClick={() => {
              setGuests(i);
            }}
          >
            {i}
          </button>
        ))}
      </div>
      {guests !== 0 && (
        <form className="grid col-span-2 gap-4" ref={ref} action={formAction}>
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
