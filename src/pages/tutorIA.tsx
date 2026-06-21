import { useState } from "react";
import { Header } from "../components/Header";
import { useUser } from "../contexts/UserContext";
import ChatBubble, { type Message } from "../components/ChatBubble";
import {
  Paperclip,
  ArrowUp,
} from "lucide-react";

export default function TutorIA() {
  const { user } = useUser();
  const [inputValue, setInputValue] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "user",
      content: "Explique computação quântica",
    },
    {
      id: "2",
      role: "ai",
      content:
        "Computação quântica é uma forma avançada de computação que usa as leis da mecânica quântica. Em vez de usar bits tradicionais, que podem ser 0 ou 1, ela utiliza qubits, que podem ser ambos ao mesmo tempo. Isso permite que os computadores quânticos realizem cálculos muito mais rapidamente do que os computadores comuns, resolvendo problemas complexos que seriam impossíveis para a tecnologia atual.",
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", content: inputValue },
    ]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 flex flex-col items-center w-full relative">
        
        <div className="w-full max-w-3xl px-4 sm:px-6 py-10 pb-40 flex flex-col gap-8">
          {messages.map((msg) => (
            <ChatBubble 
              key={msg.id} 
              message={msg} 
              userName={user?.name || "João Silva"} 
            />
          ))}
        </div>
        <div className="fixed bottom-0 w-full flex flex-col items-center bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent pt-12 pb-6 px-4">
          
          <form 
            onSubmit={handleSendMessage}
            className="w-full max-w-3xl flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-[0_0_20px_rgba(0,0,0,0.04)] border border-gray-100 transition-shadow focus-within:shadow-[0_0_20px_rgba(0,0,0,0.08)]"
          >
            <button 
              type="button" 
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Anexar arquivo"
            >
              <Paperclip size={20} />
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pergunte alguma coisa"
              className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder:text-gray-400 text-[15px]"
            />

            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:hover:bg-[#1e293b]"
              aria-label="Enviar mensagem"
            >
              <ArrowUp size={18} />
            </button>
          </form>

          <span className="text-xs text-gray-400 mt-3 text-center">
            O Tutor pode cometer erros. Considere verificar informações importantes.
          </span>
        </div>
      </main>
    </div>
  );
}