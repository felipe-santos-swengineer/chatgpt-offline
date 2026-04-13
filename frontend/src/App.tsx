import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // scroll automático
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  async function sendMessage() {
    if (!message.trim()) return;

    const currentMessage = message; // guarda antes de limpar

    // limpa o campo IMEDIATAMENTE (igual GPT)
    setMessage("");

    const userMsg: Message = { role: "user", text: currentMessage };
    setChat((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: currentMessage })
      });

      const data = await res.json();

      const aiMsg: Message = {
        role: "ai",
        text: data.response
      };

      setChat((prev) => [...prev, aiMsg]);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#343541] text-white">

      {/* HEADER */}
      <header className="p-4 text-center text-lg font-medium border-b border-gray-700">
        Chat llama3 ^-^
      </header>

      {/* CHAT */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">

          {chat.length === 0 && (
            <div className="text-center text-gray-400 mt-20">
              <h1 className="text-xl">Como posso ajudar?</h1>
            </div>
          )}

          {chat.map((msg, i) => {
            const isUser = msg.role === "user";

            return (
              <div
                key={i}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-2xl ${isUser
                      ? "bg-[#19c37d] text-black"
                      : "bg-[#444654]"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="text-gray-400 text-sm">
              Pensando...
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </main>

      {/* INPUT */}
      <footer className="p-4 border-t border-gray-700 bg-[#343541]">
        <div className="max-w-2xl mx-auto flex gap-2">

          <input
            className="flex-1 p-3 rounded-xl bg-[#40414f] outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Envie uma mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="px-4 bg-[#19c37d] rounded-xl hover:opacity-90 transition"
          >
            ➤
          </button>

        </div>
      </footer>
    </div>
  );
}