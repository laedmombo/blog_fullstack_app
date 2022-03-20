import '../styles/PostItem.css'

function handleClick(nom){
    alert("Vous avez choisi l'article de " + nom + " ✨")
}

function PostItem({id, author, date, content}){
    return(
        <li key={id} className="bg-post-item" onClick={() => handleClick(author)}>
            <div className='bg-post-author'>{author}, {date}</div>
            <div className='bg-post-content'>{content}</div>
        
        </li>
    )
}



export default PostItem