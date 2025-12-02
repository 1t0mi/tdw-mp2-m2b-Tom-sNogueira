import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card ({id,image,name, onRemove}){

const styleBackgroundNormal = {
    backgroundColor: "#fafafa",
};

const styleBackgroundOver = {
    backgroundColor: "#ffc75752",
};

 const [bgStyle, setBgStyle] = useState(styleBackgroundNormal);

function handleMouseEnter() {
    setBgStyle(styleBackgroundOver);
  }
  function handleMouseLeave() {
    setBgStyle(styleBackgroundNormal);
  }

    return(
        <div className="col-md-3 mb-3">

            <div className="card result-card"
                style={bgStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                <img
                src={image}
                className="card-img-top"
                alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemove(id)} // Dispara a função do App.jsx com o ID deste cartão
                >
                    X
                </button>

                    <Link to={`/beer/${id}`} className="btn btn-more">
                    Saber Mais
                    </Link>
                </div>   

            </div>

        </div>
    )
}

