export async function askAI(prompt) {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3",
        prompt: `
Você é um assistente útil.

- Sempre responda em português do Brasil
- Seja claro e direto
- Use linguagem simples

Pergunta: ${prompt}
Resposta:
`,
        stream: false
      })
    });

    const data = await response.json();

    return data.response;

  } catch (err) {
    console.error(err);
    return "Erro ao chamar IA";
  }
}