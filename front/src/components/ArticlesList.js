import { useState } from "react";
import { postList } from "../datas/postList";
import '../styles/ArticlesList.css'
import Categories from "./Categories";
import PostItem from "./PostItem";

function ArticlesList({favoris, updateFavoris}){
    const [activeCategory, setActiveCategory] = useState('')
    const categories = postList.reduce(
        (acc, post) => 
                acc.includes(post.category) ? acc : acc.concat(post.category),
        []
    )

    function addToFavoris(author, date, content){
        const currentFavorisSaved = favoris.find((post) => post.content === content)
        if(currentFavorisSaved){
            const favorisFilterCurrent = favoris.filter(
                (post) => post.content !== content
            )
            updateFavoris([
                ...favorisFilterCurrent,
                {author, date, content: currentFavorisSaved.content}
            ])
        } else {
            updateFavoris([...favoris, {author, date, content}])
        }
    }

    return (
        <div className="bg-article-list">
            <Categories 
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className="bg-post-list">
                {postList.map(({id, author, date, content, category}) =>
                    !activeCategory || activeCategory === category? (
                        <div key={id}>
                        <PostItem 
                            author = {author}
                            date = {date}
                            content = {content}
                        />
                        <button onClick={() => addToFavoris(author, date, content)} >Ajouter</button>
                    </div>
                    ) : null
                    
                )}
            </ul>
        </div>
    )
}


export default ArticlesList