let input = "bici coche (balón) bici coche peluche" 

function isValid (letter) {
  let characters = letter.split('')
  console.log (characters)
  
  //variable para guardar caracteres abiertos y cerrados
  let openParenthesis = 0
  let closeParenthesis = 0
  
  //recorrido de caracteres con map
  //aumento  o reduc de parentecis que encuentre +1
  characters.map (character => {
    if (character === '(') {
      openParenthesis += 1
    } else if (character === ')') {
      closeParenthesis += 1
    }
  })
  //compara si la cantidad de panrentesis que abre o cierra son iguales
  
  if (openParenthesis === closeParenthesis
        && openParenthesis > 0
    	&& closeParenthesis > 0
        && !letter.match (/\[\[{}/g) //expresion regular / si existe esta cadena retorna false
        && !letter.match (/[(]\w+a+b+c[ )]|[(][ )]/) //expresion regular / si existe esta cadena retorna false
     ) {
    return true
  } else {
    return false
  }
  
  return true
}

const isValidLetter = isValid(input)
console.log(isValidLetter)