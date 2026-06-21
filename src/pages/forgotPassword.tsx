import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { InputField } from "../components/InputField";
import Hero from "../components/Hero";

export default function ForgotPassword() {
  const navigator = useNavigate();
  return (
    <main className="flex w-full min-h-screen flex-col md:flex-row">
      <Hero/>
      <section
        className="
        flex flex-1
        md:max-w-[50%]
        flex-col items-center justify-center
        bg-white
        px-6 md:px-20
        py-12 md:py-0
        gap-10
      "
      >
        <div className="flex flex-col gap-2 text-left w-full">
          <p className="text-3xl md:text-4xl font-bold">Esqueci Minha Senha</p>
          <p className="text-base md:text-lg text-slate-600">
            Informe seu e-mail para enviarmos o link para redefir sua senha.
          </p>
        </div>

        <form className="flex flex-col gap-5 w-full">
          <InputField placeholder="user@email.com" text="E-mail" />
          <Button
            onClick={() => navigator("/nova-senha")}
            variant="primary"
            fullWidth
          >
            Enviar
          </Button>
        </form>
      </section>
    </main>
  );
}
