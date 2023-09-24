<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $novoComentariosJSON = file_get_contents('php://input');

    // Atualizar o arquivo JSON com os novos comentários
    file_put_contents("comentarios.json", $novoComentariosJSON);

    // Responder com uma mensagem de sucesso
    echo json_encode(["mensagem" => "Comentário adicionado com sucesso"]);
}
?>