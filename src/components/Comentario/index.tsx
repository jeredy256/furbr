import React, { useState, useEffect } from "react";

function Comentarios() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Adicionar o comentário ao array de comentários no estado local
    setComentarios([...comentarios, comentario]);
    setComentario("");

    // Atualizar o arquivo JSON local com o novo comentário
    const novoComentario = { comentario: comentario };
    const novoComentariosArray = [...comentarios, novoComentario];
    const novoComentariosJSON = JSON.stringify({ comentarios: novoComentariosArray });

    // Enviar o JSON para atualizar o arquivo
    await fetch("atualizar-comentarios.php", {
      method: "POST",
      body: novoComentariosJSON,
    });
  };

  useEffect(() => {
    // Carregar os comentários existentes do arquivo JSON local
    async function carregarComentarios() {
      const response = await fetch("comentarios.json");
      if (response.ok) {
        const data = await response.json();
        setComentarios(data.comentarios);
      }
    }

    carregarComentarios();
  }, []);

  return (
    <div>
      {/* ... código anterior do componente ... */}
    </div>
  );
}

export default Comentarios;