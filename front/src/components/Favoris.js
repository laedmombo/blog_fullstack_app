import '../styles/Favoris.css'
import { useState } from 'react'


function Favoris({favoris, updateFavoris}){
    const [isOpen, setIsOpen] = useState(true)


    return isOpen ? (
        <div className="bg-favoris">
            <button 
                onClick={() => setIsOpen(false)}
                className="bg-favoris-toggle-button"
            >
                    Ferme
            </button>
            <h2>Articles favoris</h2>
            {favoris.map(({author, date, content}, id) => (
                <div key={id}>{author}, {date} <br /> {content} </div>
            ))}

            <button onClick={() => updateFavoris([])}>Vider favoris</button>  
        </div>
    ) : (
        <div className='bg-favoris-closed' >
            <button 
                onClick={() => setIsOpen(true)} 
                className="bg-favoris-toggle-button"
            >
                Ouvrir les favoris
            </button>
        </div>
    )
}

export default Favoris