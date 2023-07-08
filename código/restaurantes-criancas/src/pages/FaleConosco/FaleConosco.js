import styles from "./FaleConosco.module.css";

const FaleConosco = () => {
  return (
  
  <div className={styles.faleconosco}>
    <h1>Fale Conosco</h1>
    <p>Dúvidas, sugestões, reclamações?  Não deixe de escrever para a gente!</p>
    <form action="">
      <input type="text" name="nome" placeholder="Digite seu nome" />
    <input type="email" placeholder="Digite seu email"/>
    <textarea name="Text1" cols="40" rows="5"placeholder="Mensagem"s></textarea>
    
    
    <button className="btn">Enviar mensagem</button>
    </form>
    
    </div>)



};

export default FaleConosco;
