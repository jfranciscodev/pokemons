import React from 'react'
import './PokemonItem.css'

const PokemonItem = ({ pokemon }) => {
    const { id, name, types, sprites } = pokemon;
    const image = sprites.other.dream_world.front_default;
    const type = types[0].type.name;
    const itemClass = `${type} thumb-container`;

    return (
        <div className={itemClass}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Tipo: {type}</small>
            </div>
        </div>
    )
}

export default PokemonItem;