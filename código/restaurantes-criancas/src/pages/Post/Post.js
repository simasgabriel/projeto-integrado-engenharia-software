// CSS
import styles from "./Post.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <img className={styles.postImage} src={post.image} alt={post.title} />
          <h3>Restaurante {post.title}</h3>
          <h3>Endereço e contato do restaurante:</h3>
          <p>{post.enderecoTelefone}</p>
          <h3>Tipo de culinária do restaurante:</h3>
          <p>{post.tipoCulinaria}</p>
          <h3>Comodidades do restaurante voltadas ao público infantil:</h3>
          <p>{post.comodidades}</p>
        </>
      )}
    </div>
  );
};

export default Post;
