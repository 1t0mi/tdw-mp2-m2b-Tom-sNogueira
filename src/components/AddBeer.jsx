import { useState } from "react";

export default function AddBeer({onAdd}) {

    // "Memória local" para os campos a preencher
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevenir a reload/refresh da pagina 

    if (!nome || !preco) 
        return;

    const novaCerveja = {
        name: nome,
        price: `${preco}`, 
        image: "./src/assets/IMPERATIVA-33CL.png", // Imagem padrão
        rating: "New!"
        };

    onAdd(novaCerveja);

    // Limpa os campos para poderes adicionar outra
    setNome("");
    setPreco("");
  };

return(

    <div className="form-onAdd-Beer">
      <h4>Adicionar Nova Stout</h4>
      <form onSubmit={handleSubmit} className="d-flex gap-2 justify-content-center">
        
        {/* Campo Nome */}
        <input 
          type="text" 
          placeholder="Nome da Cerveja" 
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)} // Atualiza a memória 
        />

        {/* Campo Preço */}
        <input 
          type="number" 
          placeholder="Preço" 
          className="form-control"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button type="submit" className="btn btn-success">Adicionar</button>
      </form>
    </div>



);

}
