import { Link } from "react-router-dom";

export default function Sugestions({people = [], beers = [], recipes = []}){

  console.log("--- DADOS NO SUGGESTIONS ---");
  console.log("People:", people);
  console.log("Beers:", beers);
  console.log("Recipes:", recipes);

  //prevenção de carregamento

if (people.length === 0 || beers.length === 0 || recipes.length === 0) {
    return <div className="text-center mt-5"><p>A carregar sugestões...</p></div>;
  }

  //arrays para ir buscar frases de sugestões

  const frasesSimples = [
    "Tens de provar esta maravilha!",
    "A minha favorita para o fim de semana.",
    "Sabor intenso e inesquecível.",
    "Ideal para beber bem fresca."
  ];

  const frasesHarmonizacao = [
    "Fica perfeita acompanhada por isto:",
    "Uma combinação dos deuses!",
    "O contraste de sabores é incrível.",
    "Experimenta juntar estes dois:"
  ];

  //logica de associação 
  const getRandomItem = (lista) => lista[Math.floor(Math.random() * lista.length)];

    return(
        <div className="page-spacer">

      <div className="container mt-5 mb-5">
      <h2 className="text-center mb-5 display-6">A Comunidade Recomenda 💬</h2>
      
      <div className="row">
        {people.map((people) => {
          
          // Decidir se é sugestão simples ou harmonização
          const isHarmonizacao = Math.random() > 0.5; // 50% de probabilidade

          // Escolher os produtos aleatórios para este utilizador 
          const cervejaSugerida = getRandomItem(beers);
          const receitaSugerida = getRandomItem(recipes);
          
          // Escolher a frase 
          const frase = isHarmonizacao 
            ? getRandomItem(frasesHarmonizacao) 
            : getRandomItem(frasesSimples);

          return (
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow p-3">
                
                {/* Cabeçalho: Foto e Nome do User */}
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={people.image} 
                    alt="user" 
                    className="rounded-circle me-3 border border-2 border-warning"
                  />
                  <div>
                    <h5 className="mb-0">{people.name}</h5>
                    <p>{people.username}</p>
                    <small className="text-muted">de {people.country}</small>
                  </div>
                </div>

                {/* Comentário */}
                <div className="card-body bg-light rounded mb-3">
                  <p className="fst-italic mb-0">"{frase}"</p>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-3">
                  
                  {/* Só Cerveja */}
                  <div className="text-center">
                    <img src={cervejaSugerida.image} alt="beer" className="img-beer-sug" />
                    <p className="small fw-bold mt-1">{cervejaSugerida.name}</p>
                    <Link to={`/beer/${cervejaSugerida.id}`} className="btn btn-sm btn-outline-dark">Ver</Link>
                  </div>

                  {/* Harmonização */}
                  {isHarmonizacao && (
                    <>
                      <div className="fs-2 text-warning">+</div>
                      
                      <div className="text-center">
                        <img 
                            src={receitaSugerida.image} 
                            alt="food" 
                            className="rounded-circle" 
                        />
                        <p className="small fw-bold mt-1">{receitaSugerida.name.substring(0, 15)}...</p>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

        </div>
    );
}