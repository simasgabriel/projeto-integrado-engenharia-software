import styles from "./EditPost.module.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  console.log(post);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [enderecoTelefone, setEnderecoTelefone] = useState("");
  const [tipoCulinaria, setTipoCulinaria] = useState("");
  const [comodidades, setComodidades] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  // fill form data
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setEnderecoTelefone(post.enderecoTelefone);
      setTipoCulinaria(post.tipoCulinaria);
      setComodidades(post.comodidades);

      const textTags = post.tags.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("posts");

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
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    console.log(tagsArray);

    console.log({
      title,
      image,
      enderecoTelefone,
      tipoCulinaria,
      comodidades,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    const data = {
      title,
      image,
      enderecoTelefone,
      tipoCulinaria,
      comodidades,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    console.log(post);

    updateDocument(id, data);

    // redirect to home page
    navigate("/dashboard");
  };

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Altere os dados do post como desejar</p>
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
                name="enderecoTelefone"
                required
                placeholder="Insira o endereço e telefone do restaurante"
                onChange={(e) => setEnderecoTelefone(e.target.value)}
                value={enderecoTelefone}
              ></textarea>
            </label>
            <label>
              <span>Categoria do restaurante:</span>
              <textarea
                name="tipoCulinaria"
                required
                placeholder="Insira o tipo de culinária do restaurante"
                onChange={(e) => setTipoCulinaria(e.target.value)}
                value={tipoCulinaria}
              ></textarea>
            </label>
            <label>
              <span>
                Comodidades do restaurante voltados para o público infantil:
              </span>
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
                placeholder="Digite nome,bairro e cidade do restaurante, separados por vírgulas"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
