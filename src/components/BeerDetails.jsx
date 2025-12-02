import { useParams, Link } from "react-router-dom";

export default function BeerDetail({beers, breweries, recipes}){

    const { id } = useParams()
    const beer = beers.find((b) => b.id === parseInt(id));

        // SEGURANÇA: Se a cerveja não for encontrada - mostra um aviso
        if (!beer) {
            return <div className="text-center mt-5"><h2>🔍 A procurar a cerveja...</h2></div>;
        }

        // Usamos o ID da cerveja para escolher uma posição nas outras listas.
        // O sinal '%' (módulo) faz com que, se o ID for maior que o tamanho da lista, ele dê a volta e comece do 0.
        const brewery = breweries[beer.id % breweries.length];
        const recipe = recipes[beer.id % recipes.length];
    
    return(
    <div className="container mt-5 mb-5 page-spacer" >
      {/* Botão de Voltar */}
      <Link to="/" className="btn btn-outline-dark mb-3">Voltar à Lista</Link>

      <div className="card shadow-lg">
        <div className="row g-0">
          
          {/* Coluna da Imagem */}
          <div className="col-md-4">
            <img 
              src={beer.image} 
              className="img-fluid rounded-start col-img" 
              alt={beer.name} 
            />
          </div>

          {/* Coluna da Informação */}
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title display-5">{beer.name}</h1>
              <h4 className="text-muted">{beer.price}</h4>
              <p className="badge bg-warning text-dark fs-6">{beer.rating}</p>
              
              <hr />

              {/* Informação da API Breweries */}
              {brewery && (
                <div className="mb-4 p-3 bg-light rounded">
                  <h5 className="text-primary">Produzido por: {brewery.name}</h5>
                  <p className="mb-0">
                    <strong>Tipo:</strong> {brewery.type} | <strong>Cidade:</strong> {brewery.city}
                    <br />
                    <a href={brewery.website} target="_blank" rel="noreferrer">Visitar Website</a>
                  </p>
                </div>
              )}

              {/* Informação da API Recipes */}
              {recipe && (
                <div className="mb-3 p-3 border border-warning rounded">
                  <h5 className="text-danger">Harmonização Sugerida</h5>
                  <div className="d-flex align-items-center gap-3">
                    <img src={recipe.image} alt={recipe.name} className="img-recipe" />
                    <div>
                        <p className="fw-bold mb-1">{recipe.name}</p>
                        <small>{recipe.description ? recipe.description.substring(0, 100) + "..." : "Uma combinação deliciosa."}</small>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
    );
}