import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import vite from "/vite.svg";
import Input from "../components/Input";
import { IDictionary } from "../types";
import { remult } from "remult";
import { User } from "../../shared/User";

export default function Register(): ReactNode {
  const [fields, setFields] = useState<IDictionary<string>>({});

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: fields["username"],
        password: fields["password"],
      }),
    });

    if (res.ok) {
      remult.user = (await res.json()) as User;
      window.location.pathname = "/";
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="flex justify-center items-center gradient-form p-10">
      <article className="block rounded-lge shadow-lg bg-gray-800 text-white w-4/12 md:mx-6 md:p-12">
        <section className="text-center">
          <img className="mx-auto w-48" src={vite} alt="logo" />
          <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
            Shopperators
          </h4>
        </section>

        <form onSubmit={submit}>
          <Input
            required={true}
            onChange={onChange}
            label="Username"
            id="username"
            type="text"
            name="username"
            value={fields["username"]}
          />

          <Input
            onChange={onChange}
            required={true}
            label="Password"
            id="password"
            type="password"
            name="password"
            value={fields["password"]}
          />

          <section className="mb-12 pb-1 pt-1 text-center">
            <button
              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
            >
              Register
            </button>
          </section>
        </form>
      </article>
    </section>
  );
}
