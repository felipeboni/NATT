import { useState, useRef } from "react";

import toast from "react-hot-toast";
import { useRouter } from "next/router";

import { signIn } from "next-auth/react";

export default function SignIn() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const usernameInput = useRef<HTMLInputElement>(null);

  const showFieldError = (field: string) => {
    toast.dismiss();
    toast.error(`Preencha o campo ${field} corretamente!`)
  }

  const updateSubmitStatus = (status: boolean) => {
    if (status) {
      toast.loading('Entrando...');
      setSubmitting(true);

      return
    }

    toast.dismiss();
    setSubmitting(false);
  }

  const submitLoginForm = () => {
    updateSubmitStatus(true);

    if (!usernameInput || !usernameInput.current || !usernameInput.current.value) return showFieldError("PIX")

    signIn("credentials", { redirect: false, username: usernameInput.current.value }).then(res => {
      updateSubmitStatus(false);

      if (res && !res.ok) return toast.error("Usuário não encontrado");
      router.push("/");
    }).catch(err => {

      console.log(err);
      toast.error("Erro ao realizar login");
    })
  }

  return (
    <section className="relative flex items-center justify-center px-3 py-20 min-h-[100dvh]">
      <div className="rounded-lg max-w-[600px] w-full mx-auto relative bg-white p-5 gap-2 flex flex-col items-center justify-center">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="username">Usuário</label>
          <input placeholder="Digite qualquer usuário aqui..." type="text" id="username" className="bg-gray-200 rounded p-2" ref={usernameInput} />
        </div>

        <button className="p-2 bg-blue-500 rounded w-full text-white" onClick={submitLoginForm}>Entrar</button>
      </div>
    </section >
  );
}
