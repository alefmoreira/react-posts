
import './post.css'
import { useState } from 'react'
import { FaHeart, FaRegHeart, FaTrash  } from 'react-icons/fa'

function Post({id, titulo, imagem, conteudo, onDelete}){
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(81)
    const [urlImage, setUrlImage] = useState(imagem)

    function apagar(){
        onDelete(id)
    }

    function handleLike(){
        if(isLiked){
            setLikes(likes - 1)
        } else{
            setLikes(likes + 1)
        }
        setIsLiked(!isLiked)
    }
    function handleNewImage(){
        const newImage = imagem.substring(0, imagem.length - 2) + (Math.random()* 10)
        setUrlImage(newImage)
    }

    return(
        <div className="post">
            <h1 className="header">{titulo}<FaTrash className='delete' onClick={apagar}/></h1>
            
            <img src={urlImage} alt={titulo} onClick = {handleNewImage} />
            <p className="content">{conteudo}</p>
            <div className='curtidas'><span>{likes} curtidas</span>
            {isLiked? (
                <FaHeart fill = 'f#09' onClick = {handleLike} />
            ) : (
                <FaRegHeart onClick={handleLike} />
            )}
            </div>
            
            </div>
    )

}
export default Post