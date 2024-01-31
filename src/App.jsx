import { useState } from "react";
import Post from "./components/Post";
import { FaPlus } from "react-icons/fa";



function App(){
  const [postagens, setPostagens] = useState([
{ 
      id : 1,
      titulo:"Resulatado Sisu",
      imagem:"https://picsum.photos/200/200?random=1",
      conteudo:"Mec e inep libream resultados enem"

},
{
      id : 2,
      titulo :"Resulatado Sisu",
      imagem:"https://picsum.photos/200/200?random",
      conteudo:"Mec e inep libream resultados enem"
}

  ])

  const novoPost= {

    id:Math.random *100,
    titulo :"lorem Sisu",
    imagem:"https://picsum.photos/200/200?ramdom" + (Math.random() * 10),
    conteudo:"lorem"
  }

  function addNovoPost(){
    setPostagens([...postagens, novoPost])
  }

  function apagarPost(postId){
      setPostagens(postagens.filter(p => p.id !== postId))
  }
  return(

    <div>
      <h1>React Blog</h1>
      <FaPlus onClick={addNovoPost} />
      <p>Postagens do blog</p>
      {postagens.map(p => (
          <Post 
          key ={p.id} 
          {...p}
          onDelete = {apagarPost}
          />
        ))}

    </div>
  );

}
export default App;