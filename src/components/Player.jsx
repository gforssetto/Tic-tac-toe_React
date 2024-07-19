import { useState } from "react";

export default function Player ({ initialName, symbol }) {
    const [ playerName , setPlaerName ] = useState(initialName)
    const [ isEditing , setIsEditing ] = useState(false);

    function handleEditClick(){
        setIsEditing(editing => !editing)
    }

    function handleChange(event){
        setPlaerName(event.target.value);
    }

    let editPlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'

    if (isEditing) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption= "Save"
    }
    
    return(
    <li>
        <span className="player">
            {editPlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
    );
}