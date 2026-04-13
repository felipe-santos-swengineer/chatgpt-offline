async function testOllama() {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3",
        prompt: "Responda apenas: conexão ok",
        stream: false
      })
    });

    const data = await response.json();

    console.log("Resposta completa:", data);

    console.log("\n✅ Resposta da IA:\n");
    console.log(data.response);

  } catch (err) {
    console.error("❌ Erro:", err.message);
  }
}

testOllama();