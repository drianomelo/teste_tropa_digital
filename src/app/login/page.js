"use client";

import Button from "@/components/Button";
import InputEmail from "@/components/inputs/InputEmail";
import InputPassword from "@/components/inputs/InputPassword";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const fakeUser = {
    email: "teste@tropa.digital",
    senha: "123456",
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (email === fakeUser.email && senha === fakeUser.senha) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email, token: "token-fake-" + Date.now() })
      );
      setError("");
      router.push("/dashboard");
    } else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 py-10 px-5">
        <img
          className="w-[160px]"
          src="/images/logo.svg"
          alt="Desenho de boneco segurando celular"
        />

        <div>
          <h1 className="text-[26px] text-[#cc6237] font-bold">
            Bem-vindo de volta
          </h1>
          <p className="text-[13px] text-[#2A4D8E80] -mt-2">
            Entre com sua conta para acessar o painel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputEmail
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seunome@seuservidor.com"
          />

          <InputPassword
            label="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite aqui"
          />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <Button type="submit">Enviar</Button>
        </form>
      </div>

      <div className="w-[355px] h-[450px] flex items-end bg-[#cc6237] rounded-[20px] max-mobile:hidden">
        <img
          className="-ml-8"
          src="/images/login-img.svg"
          alt="Desenho de boneco segurando celular"
        />
      </div>
    </>
  );
}
