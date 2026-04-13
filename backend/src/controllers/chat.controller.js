import { askAI } from "../services/ai.service.js";
import { supabase } from "../config/supabase.js";

export async function chat(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem obrigatória" });
  }

  try {
    const aiResponse = await askAI(message);

    await supabase.from("messages").insert([
      {
        user_input: message,
        ai_response: aiResponse
      }
    ]);

    res.json({ response: aiResponse });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno" });
  }
}