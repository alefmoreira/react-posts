import { useState } from "react";
import Post from "./components/Post";
import { FaPlus } from "react-icons/fa";




function App(){
  const [postagens, setPostagens] = useState([
{ 
      id : 1,
      titulo:"Imagens aleatórias",
      imagem:"https://picsum.photos/200/200?random=1",
      conteudo:"Utilizando o Lorem picsum"

},
{
      id : 2,
      titulo :"Resultado Sisu",
      imagem:"https://picsum.photos/200/200?random",
      conteudo:"Mec e inep libream resultados enem"
}

  ])

  const novoPost= {

    id:Math.random *100,
    titulo :"Novo post",
    imagem:"https://picsum.photos/200/200?ramdom" + (Math.random() * 10),
    conteudo:"Texto do novo post"
  }

  function addNovoPost(){
    setPostagens([...postagens, novoPost])
  }

  function apagarPost(postId){
      setPostagens(postagens.filter(p => p.id !== postId))
  }
  return(

    <div className="app">
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