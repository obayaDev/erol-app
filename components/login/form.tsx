"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/login/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Register (type: String){
  if(type === "register"){
    <>
      
    </>
  }
}

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          signIn("credentials", {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            // @ts-ignore
          }).then(({ ok, error }) => {
            setLoading(false);
            if (ok) {
              router.push("/protected");
            } else {
              toast.error(error);
            }
          });
        } else {
          if(e.currentTarget.code.value === "739234"){
            fetch("/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: e.currentTarget.nombre.value,
                firstName: e.currentTarget.firstName.value,
                phone: e.currentTarget.phone.value,
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
                branch: e.currentTarget.branch.value,
                role: "fam",
              }),
            }).then(async (res) => {
              setLoading(false);
              if (res.status === 200) {
                toast.success("Account created! Redirecting to login...");
                setTimeout(() => {
                  router.push("/login");
                }, 2000);
              } else {
                toast.error(await res.text());
              }
            });
          }else if(e.currentTarget.code.value === "937461"){
            fetch("/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: e.currentTarget.nombre.value,
                firstName: e.currentTarget.firstName.value,
                phone: e.currentTarget.phone.value,
                email: e.currentTarget.email.value,
                password: e.currentTarget.password.value,
                branch: e.currentTarget.branch.value,
                role: "cap",
              }),
            }).then(async (res) => {
              setLoading(false);
              if (res.status === 200) {
                toast.success("Compte creada! Redireccionant a la pàgina d'inici de sessió");
                setTimeout(() => {
                  router.push("/login");
                }, 3000);
              } else {
                toast.error(await res.text());
              }
            });
          }else{
            toast.error("Codi incorrecte, torni a provar o contacti amb Alex Obaya (tel: 634570978)");
          }
          
        }
      }}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >

      {type === "register" ? <>
      
        <div>
          <label
            htmlFor="code"
            className="block text-xs text-gray-600 uppercase"
          >
            Codi
          </label>
          <input
            id="code"
            name="code"
            type="text"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="branch"
            className="block text-xs text-gray-600 uppercase"
          >
            Branca
          </label>
          <select
            id="branch"
            name="branch"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          >
            <option value="cills">Castors i LLudrigues</option>
            <option value="llids">Llops i Daines</option>
            <option value="tiss">Tritons i Salamandres</option>
            <option value="rings">Rangers i Noies guies</option>
            <option value="pios">Pioners i Caravel·les</option>
            <option value="trucs">Trucs</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-xs text-gray-600 uppercase"
          >
            Nom
          </label>
          <input
            id="name"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs text-gray-600 uppercase"
          >
            Primer Cognom
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="firstName"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs text-gray-600 uppercase"
          >
            Telefon móbil
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
      
      </>:""}

      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Correu Electrónic
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="panic@thedis.co"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Contrasenya
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>{type === "login" ? "Sign In" : "Sign Up"}</p>
        )}
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
