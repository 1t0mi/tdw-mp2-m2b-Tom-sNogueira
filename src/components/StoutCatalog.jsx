
import { useState } from "react";
import Cards from "./Cards"; 

export default function StoutCatalog({ beers, onRemove}) { // Recebe 'beers' como propriedade

  
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");


//Listagem da categoria
  const listaCategorias = [
    "Todas",
    "Barrel-Aged",
    "Imperial",      
    "Milk",          
    "Oatmeal",
    "Chocolate",
  ];

  //associação atraves do nome 
  const cervejasFiltradas = beers.filter((beer) => {
    if (categoriaSelecionada === "Todas") return true;
    return beer.name?.toLowerCase().includes(categoriaSelecionada.toLowerCase());
  });

  return (
    <section>
      {/* Botões de Filtro */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <p><strong>Filtrar Cervejas:</strong></p>

       {listaCategorias.map((categoria) => (
            <button
                className="btn"
                key={categoria} 
                onClick={() => setCategoriaSelecionada(categoria)}
            >
                {categoria}
            </button>
            ))}
      </div>

      <h3 style={{ textAlign: "center" }}> {categoriaSelecionada}</h3>

      {/* Exibição dos Cards */}
      <Cards cards={cervejasFiltradas} onRemove={onRemove}/>
    </section>
  );
}

