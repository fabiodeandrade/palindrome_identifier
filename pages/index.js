import { useState } from "react";

export function IndentifyPalin() {

  const [palindromo, setPalindromo] = useState("");
  
  return (
    <div>
        <h3>Verifique se essa palavra é palindromo.</h3>
          
          <input
          placeholder="Insira uma palavra"
          value={palindromo}
          onChange={pl =>  setPalindromo(pl.target.value)}
          />
          
          <button>Search</button>
    </div>
  
  )
}



export default IndentifyPalin;