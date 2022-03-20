import { useEffect } from 'react'
import '../styles/Categories.css'


function Categories({setActiveCategory, categories, activeCategory}){
    useEffect(() => {
        document.title = 'bg-BD: ' + activeCategory
    }, [activeCategory])
    return (
        <div className='bg-categories'>
            <select 

                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='bg-categories-select'
            >
                <option value=''>-------</option>
                {categories.map((cat) => (
                    <option value={cat} key={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}


export default Categories