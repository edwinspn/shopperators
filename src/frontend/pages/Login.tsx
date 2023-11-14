import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import vite from "/vite.svg";
import Input from "../components/Input";
import { IDictionary } from "../types";
import { Link } from "react-router-dom";
import { remult } from "remult";
import { User } from "../../shared/User";
import { AuthContext, AuthContextModel } from "../Layout";

export default function Login(): ReactNode {
  const { login } = useContext<AuthContextModel>(AuthContext);

  const [fields, setFields] = useState<IDictionary<string>>({
    username: "",
    password: "",
  });

  useEffect(() => {
    fetch("/api/user").then(async (r) => {
      remult.user = (await r.json()) as User;
      if (remult.user) window.location.pathname = "/";
    });
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();

    if (login)
      await login({
        username: fields["username"],
        password: fields["password"],
      });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="flex justify-center items-center gradient-form h-full p-10">
      <article className="block rounded-lge shadow-lg bg-gray-800 text-white w-4/12 md:mx-6 md:p-12">
        <section className="text-center">
          <img className="mx-auto w-48" src={vite} alt="logo" />
          <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
            Shopperators
          </h4>
        </section>

        <form onSubmit={submit}>
          <p className="mb-4">Please login to your account</p>

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
              Log in
            </button>

            <a href="#!">Forgot password?</a>
          </section>

          <section className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">Don't have an account?</p>
            <Link
              to="/register"
              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              Register
            </Link>
          </section>
        </form>
      </article>
    </section>
  );
}
