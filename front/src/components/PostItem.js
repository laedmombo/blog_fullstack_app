import '../styles/PostItem.css'
import { useNavigate } from 'react-router-dom'


function PostItem({id, author, date, content}){

    const navigate = useNavigate()

    function handleClick(){
        navigate('detail')
    }

    return(
        <li key={id} className="bg-post-item" onClick={() => handleClick()}>
            <div className='bg-post-author'>{author}, {date}</div>
            <div className='bg-post-content'>{content}</div>
        
        </li>
    )
}



export default PostItem