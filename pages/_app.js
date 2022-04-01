import { useState } from "react";
import "./palindromeStyle.css";



export function IndentifyPalin() {
  const [palindromo, setPalindromo] = useState("");

  //essa flag aqui vai servir pra adicionar uma div de resposta caso o estado mude para verdadeiro
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="palindrome">
      <h2is>VERIFIQUE SE A PALAVRA É PALINDROMO</h2>
      
      <input
        placeholder="Insira uma palavra"
        value={palindromo}
        onChange={(pl) => setPalindromo(pl.target.value)}
      />

      <button>Search</button>

      {!isActive ? '' : <p>Trata o erro aqui dentro mano</p>}

      
    </div>
  );
}

export default IndentifyPalin;
