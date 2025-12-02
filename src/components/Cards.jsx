import Card from "./Card";

export default function Cards ({cards, onRemove}) {
    return(
    <div className="container">
      <div className="row mt-3">
            {cards.map(card => (
                <Card key={card.id} {...card} onRemove={onRemove}/>
                ))}
      </div>
    </div>
    );
}