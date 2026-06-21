import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Hero from "../components/Hero";

const InputField = ({
  text,
  placeholder,
  linkText,
}: {
  text: string;
  linkText?: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col text-left gap-2 w-full">
      <Input.Label linkText={linkText}>{text}</Input.Label>
      <Input.Field placeholder={placeholder} />
    </div>
  );
};

export default function Register() {
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
          <p className="text-3xl md:text-4xl font-bold">Cadastre-se</p>
          <p className="text-base md:text-lg text-slate-600">
            Passo 1 de 2. Por favor, insira seu CPF para prosseguir
          </p>
        </div>

        <form className="flex flex-col gap-5 w-full">
          <InputField placeholder="Insira aqui seu CPF...." text="CPF" />
          <Button
            onClick={() => navigator("/dashboard")}
            variant="primary"
            fullWidth
          >
            Prosseguir
          </Button>
        </form>
      </section>
    </main>
  );
}
