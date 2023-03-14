import React, { useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = useCallback(() => {
    setComments([...comments, { text: newComment, date: new Date() }]);
    setNewComment("");
  }, [comments, newComment]);

  const sortedComments = useMemo(() => {
    return comments.sort((a, b) => b.date - a.date);
  }, [comments]);

  return (
    <div classNameName="BlogPost">
      <div>
        <h2>Vente de vêtements</h2>
        <p>
          Découvrez notre sélection de vêtements pour hommes, femmes et enfants
          à prix réduits !
        </p>
        <a href="#">Voir les offres</a>
      </div>

      <div className="sale-card">
        <div className="sale-image">
          <img src="image.png" alt="Produit en solde" />
        </div>
        <div className="sale-details">
          <h2>Produit en solde</h2>
          <p>
            Profitez de cette offre spéciale pour économiser sur votre achat
            aujourd'hui!
          </p>
          <a href="#" className="btn">
            Acheter maintenant
          </a>
        </div>
      </div>

      <h2>Commentaires</h2>
      <ul>
        {sortedComments.map((comment, index) => (
          <li key={index}>
            <p classNameName="CommentText">{comment.text}</p>
            <p classNameName="CommentDate">{comment.date.toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <h3>Ajouter un commentaire</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
        }}
      >
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          classNameName="CommentInput"
        />
        <button type="submit" classNameName="CommentButton">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default App;
