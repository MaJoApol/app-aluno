import {
  Bot,
  Volume2,
  Copy,
  RotateCw,
  ThumbsDown,
} from "lucide-react";

import { getInitials } from "../utils";

export type Role = "user" | "ai";

export interface Message {
  id: string;
  role: Role;
  content: string;
}

export interface ChatBubbleProps {
  message: Message;
  userName: string;
}

export default function ChatBubble({ message, userName }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className="flex gap-4 sm:gap-6 w-full">
      <div className="shrink-0 mt-1">
        {isUser ? (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow-sm">
            {getInitials(userName)}
          </div>
        ) : (
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm">
            <Bot size={18} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 flex-1 min-w-0 text-justify">
        <span className="font-semibold text-slate-800 text-sm">
          {isUser ? userName : "Tutor IA"}
        </span>
        
        <p className="text-slate-700 text-[15px] leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>

        {!isUser && (
          <div className="flex items-center gap-3 mt-2 text-gray-400">
            <button className="hover:text-gray-600 transition-colors" aria-label="Ouvir resposta">
              <Volume2 size={16} />
            </button>
            <button className="hover:text-gray-600 transition-colors" aria-label="Copiar texto">
              <Copy size={16} />
            </button>
            <button className="hover:text-gray-600 transition-colors" aria-label="Gerar novamente">
              <RotateCw size={16} />
            </button>
            <button className="hover:text-gray-600 transition-colors" aria-label="Avaliar negativamente">
              <ThumbsDown size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}