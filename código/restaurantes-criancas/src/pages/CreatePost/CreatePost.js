import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [comodidades, setComodidades] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      comodidades,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      comodidades,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });
    

    // redirect to home page
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar novo perfil de restaurante</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome do restaurante:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Digite o nome do restaurante"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            
            placeholder="Insira uma imagem do retaurante"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Endereço e contato do restaurante:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o endereço e telefone do restaurante"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Comodidades do restaurante voltados para o público infantil:</span>
          <textarea
            name="comodidades"
            required
            placeholder="O restaurante tem brinquedão ou espaço kids? Tem fraldário e cadeirão?"
            onChange={(e) => setComodidades(e.target.value)}
            value={comodidades}
          ></textarea>
        </label>
        <label>
          <span>Tags para busca:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Digite nome e bairro do restaurante, separados por vírgulas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>

       {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}

        
      </form>
    </div>
  );
};

export default CreatePost;