import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { remult } from "remult";
import { User, UserLoginModel } from "../shared/User";

interface Props {
  children: JSX.Element;
}

const items = [{ name: "your nav name", path: "/pathhere" }];

export type AuthContextModel = {
  currentUser?: User;
  login?: (model: UserLoginModel) => Promise<void>;
  register?: (model: UserLoginModel) => Promise<void>;
  logout?: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextModel>({});

export default function Layout({ children }: Readonly<Props>): ReactNode {
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    fetch("/api/user").then(async (r) => {
      remult.user = (await r.json()) as User;
      setCurrentUser(remult.user as User);
    });
  }, []);

  const login = useCallback(async (model: UserLoginModel) => {
    const res = await fetch("/api/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: model.username,
        password: model.username,
      }),
    });

    if (res.ok) {
      remult.user = (await res.json()) as User;
      setCurrentUser(remult.user as User);
      window.location.pathname = "/";
    } else {
      alert("Invalid login information");
    }
  }, []);

  const register = useCallback(async (model: UserLoginModel) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: model.username,
        password: model.password,
      }),
    });

    if (res.ok) {
      remult.user = (await res.json()) as User;
      setCurrentUser(remult.user as User);
      window.location.pathname = "/";
    }
  }, []);

  const logout = useCallback(async () => {
    await fetch("/api/signOut", {
      method: "POST",
    });

    remult.user = undefined;
    setCurrentUser(undefined);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentUser,
      login,
      register,
      logout,
    }),
    [currentUser, login, logout, register]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <Navbar items={items} />
      <main className="bg-gray-900 text-white">{children}</main>
      <Footer />
    </AuthContext.Provider>
  );
}
