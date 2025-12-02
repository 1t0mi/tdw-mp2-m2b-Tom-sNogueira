import {useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import IntroHeading from "./components/IntroHeading";
import AboutStout from "./components/AboutStout";
import StoutCatalog from "./components/StoutCatalog";
import AddBeer from "./components/AddBeer";
import BeerDetail from "./components/BeerDetails";
import Sugestions from "./components/Sugestions";
import Footer from "./components/Footer";


function App() {


 //constantes para guardar dados do fetch das 3 APIs
  const [dataApiBeer, setDataApiBeer] = useState([]);
  const [dataApiBrewery, setDataApiBrewery] = useState([]);
  const [dataApiRecipes, setDataApiRecipes] = useState([]);
  const [dataApiPeople, setDataApiPeople] = useState([]);

  const [cardsDataBeer, setCardsDataBeer] = useState([]);
  const [cardsDataBrewery, setCardsDataBrewery] =useState([]);
  const [cardsDataRecipes, setCardsDataRecipes] =useState([]);
  const [cardsDataPeople, setCardsDataPeople] =useState([]);




  //Loading
  const [loading, setLoading] = useState(true);
  //Error
  const [error, setError] = useState()



  useEffect(() => {
    const fetchData = async () => {
      try {

        const [responseBeer, responseBrewery, responseRecipes, responsePeople] = await Promise.all([
          fetch('https://api.sampleapis.com/beers/stouts'),
          fetch('https://api.openbrewerydb.org/v1/breweries'),
          fetch('https://api.sampleapis.com/recipes/recipes'),
          fetch('https://randomuser.me/api/?results=100'),
        
        ]);

        const resultBeer = await responseBeer.json();
        const resultBrewery = await responseBrewery.json();
        const resultRecipes = await responseRecipes.json();
        const resultPeople = await responsePeople.json();

         setDataApiBeer(resultBeer);
         setDataApiBrewery(resultBrewery);
         setDataApiRecipes(resultRecipes);
         setDataApiPeople(resultPeople.results);


        // Montagem dos Cards das informações das APIs;

        //--------------------------BEERS------------------------------------
        const cardsDataBeer = resultBeer.map((beer, index) => ({
          id: beer.id || index,
          name: beer.name,
          price: beer.price,
          image: beer.image,
          rating: beer.rating
            ? `${beer.rating.average} (${beer.rating.reviews || 0 } reviews)` 
            : 'No Rating',
        }));

      setCardsDataBeer(cardsDataBeer)

      //--------------------------BREWERY------------------------------------

      const cardsDataBrewery = resultBrewery.map((brewery, index) => ({

          id: brewery.id || index,
          name: brewery.name,
          type: brewery.brewery_type,
          city: brewery.city,
          street: brewery.street,
          website: brewery.website_url

      }));
      setCardsDataBrewery(cardsDataBrewery);

      //--------------------------RECEPIES------------------------------------

      const cardsDataRecipes = resultRecipes.map((recepies, index) => ({

          id: recepies.id || index,
          name: recepies.title,
          image:recepies.photoUrl,
          type: recepies.course,
          cusine: recepies.cuisine,
          description: recepies.description,
          website: recepies.url

      }));
      setCardsDataRecipes(cardsDataRecipes);

      //--------------------------PEOPLE------------------------------------

      const cardsDataPeople = resultPeople.results.map((people, index) => ({

          id: people.id || index,
          name: `${people.name.first} ${people.name.last}`,
          username: people.login.username,
          image: people.picture.large,
          country: people.location.country,

      }));
      setCardsDataPeople(cardsDataPeople);

//----------------------------------------------------------------

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

    };

    fetchData();
  }, []); 

  // console.log("Dados API Cervejas:", dataApiBeer)
  // console.log("Dados API Cervejarias:", dataApiBrewery)
  // console.log("Dados API Comida:", dataApiRecipes)
  // console.log("Dados API Pessoas:", dataApiPeople)

  function handleRemoveCard (id){

    const novaLista = cardsDataBeer.filter(beer => beer.id !== id);
    
    setCardsDataBeer(novaLista);
  };

  //função responsavel por lidar com o Add Card da nova cerveja
  function handleAddCard (dadosDaNovaCerveja){

    const cervejaCompleta = {
      ...dadosDaNovaCerveja, 
      id: Date.now()         // Adiciona novo ID único
    };

    const novaListaAtualizada = [...cardsDataBeer, cervejaCompleta];

    setCardsDataBeer(novaListaAtualizada);

  };





  return (
    <div>
      <header>
      <Nav/>
      </header>
      <main>

        <Routes>
          <Route path="/" element={
            <>
            <IntroHeading/>
            <AboutStout />

              <div className="container">
                 <AddBeer onAdd={handleAddCard} />
              </div>
              
              {loading ? <p>A carregar...</p> : ( //prevenção de erro e demora a carregar
                <StoutCatalog 
                  beers={cardsDataBeer} 
                  onRemove={handleRemoveCard} 
                />
              )}
            </>
          } />

          <Route path="/beer/:id" element={
            <BeerDetail 
              beers={cardsDataBeer} 
              breweries={cardsDataBrewery} 
              recipes={cardsDataRecipes} 
            />
          } />

          <Route path="/beers" element={
          <>
          <div className="page-spacer">
              <div className="container">
                 <AddBeer onAdd={handleAddCard} />
              </div>
         
            {loading ? <p>A carregar...</p> : (
                <StoutCatalog 
                  beers={cardsDataBeer} 
                  onRemove={handleRemoveCard} 
                />
              )}
          </div>
              
          </>
          } />

          <Route path="/sugestões" element={
          <>
          <Sugestions
              beers={cardsDataBeer} 
              people={cardsDataPeople} 
              recipes={cardsDataRecipes}
          />
          </>
          }/>

        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}





export default App;
