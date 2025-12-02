import marzenImg from "../assets/marzen.png";
import guinnessImg from "../assets/68116fafcb14f3c98a484bf3_November Test1.webp";

export default function AboutStout(){
    return (
    <div className="cont-about-stout">

      {/* Historia da cerveja */}

        <div className="cont-hist-beer">
          <h1>HISTÓRIA DA <br /> CERVEJA <hr /></h1>
          <img src={marzenImg} alt="" className="img-ilustrativo" />
          <p>A cerveja é uma das bebidas alcoólicas mais antigas da humanidade, com origens que remontam a cerca de 5.000 a.C. na Mesopotâmia, região correspondente ao atual Iraque. 
            <br />
            Os sumérios foram os primeiros a registrar receitas e práticas de produção, utilizando cevada fermentada, e consideravam a bebida tão importante que dedicaram hinos à deusa Ninkasi, padroeira da cerveja. Ao longo dos séculos, a cerveja espalhou-se pelo Egito, Grécia e Europa, sendo aprimorada por monges medievais que desenvolveram técnicas de fermentação mais consistentes e começaram a adicionar lúpulo, que conferia sabor e ajudava na conservação. Com a Revolução Industrial, a produção de cerveja tornou-se mais padronizada e acessível, permitindo o surgimento das grandes cervejarias modernas, mas mantendo tradições e estilos que refletem séculos de história cultural e social.</p>
        </div>
        
        {/* historia da stout */}
        <div className="stout-beer">
            <h1>STOUT <br />  <hr />A CERVEJA IRLANDESA</h1>
            <img src={guinnessImg} alt="" />
            <span>
            <h5 className="lead">A cerveja escura e robusta, famosa pelos seus sabores intensos.</h5>
            <br />
            <p>A stout tem a sua origem no Reino Unido, mais concretamente na Irlanda e Inglaterra, durante os séculos XVII e XVIII. Originalmente, o termo “stout” não se referia à cor da cerveja, mas sim à sua força — era usada para descrever cervejas mais robustas e alcoólicas, conhecidas como “stout ales”. Com o tempo, algumas dessas stouts tornaram-se mais escuras devido ao uso de maltes torrados, adquirindo o perfil de sabor característico que conhecemos hoje, com notas de café, chocolate e caramelo.
              <br />
              No século XIX, a Irlanda destacou-se como centro de produção de stouts, sendo a Guinness, fundada em 1759, o exemplo mais famoso mundialmente. As stouts evoluíram em várias variantes: dry stout (seca), milk stout (com lactose), oatmeal stout (com aveia) e imperial stout (mais forte e complexa). A bebida tornou-se não apenas uma tradição cultural, mas também um símbolo da cervejaria artesanal irlandesa, mantendo até hoje grande popularidade global.
             <br />
              Se quiser, posso criar também um parágrafo resumido e chamativo, ideal para apresentação em site ou redes sociais.</p>
            </span>
           </div>
  
  {/* outras informações complementares */}
    <div className="section">
      <h2>PRINCIPAIS CARACTERÍSTICAS</h2>
      <ul>
        <li><strong>Cor:</strong> Escura, do castanho profundo ao negro quase opaco.</li>
        <li><strong>Sabor:</strong> Café, chocolate, cacau, caramelo, notas torradas.</li>
        <li><strong>Amargor:</strong> Moderado, equilibrado com a doçura do malte.</li>
        <li><strong>Corpo:</strong> Médio a encorpado, textura cremosa.</li>
        <li><strong>Teor Alcoólico:</strong> 4% a 12% ou mais nas versões fortes.</li>
      </ul>
    </div>

    <div className="section">
      <h2>TIPOS DE STOUTS</h2>
      <ul>
        <li><strong>Dry Stout (Seca):</strong> Mais leve, final seco <br />exemplo: Guinness.</li>
        <li><strong>Sweet / Milk Stout:</strong> Contém lactose, cremosa e suave.</li>
        <li><strong>Oatmeal Stout:</strong> Aveia na receita, textura sedosa.</li>
        <li><strong>Imperial Stout:</strong> Forte, intenso, muitas vezes envelhecida em barris.</li>
        <li><strong>Coffee / Chocolate Stout:</strong> Aromatizada com café ou chocolate.</li>
      </ul>
    </div>

    <div className="section">
      <h2>HARMONIZAÇÕES</h2>
      <ul>
        <li><strong>Entradas</strong>Queijos fortes - cheddar envelhecido ou gorgonzola</li>
        <li><strong>Prato Principal</strong>Carnes grelhadas ou estufadas</li>
        <li><strong>Sobremesas</strong>chocolate  <br /> cremes</li>
      </ul>
    </div>

    <div className="section ">
      <h2>CURIOSIDADES</h2>
      <ul>
        <li>O termo “stout” originalmente significava “forte” e não se referia à cor.</li>
        <li>Guinness é servida com nitrogénio, criando espuma cremosa e textura suave.</li>
        <li>Algumas stouts são envelhecidas em barris de whisky, aumentando complexidade e intensidade.</li>
      </ul>
    </div>
  </div>

)
}