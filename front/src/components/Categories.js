import { useEffect } from 'react'
import '../styles/Categories.css'
import { useNavigate } from 'react-router-dom'


function Categories({setActiveCategory, categories, activeCategory}){
    useEffect(() => {
        document.title = 'bg-BD: ' + activeCategory
    }, [activeCategory])
    const navigate = useNavigate()
    return (
        <div className='bg-categories'>
            <select 

                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='bg-categories-select'
            >
                <option value='all'>-------</option>
                {categories.map((cat) => (
                    <option value={cat} key={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('all')}>Réinitialiser</button>
            <button onClick={() => {navigate('newpost')}}>
                New post
                </button>
        </div>
    )
}


export default Categories