export default function contarOvejas(ovejas) {
  // aquí tu magia
  return ovejas.filter(oveja => oveja.color === 'rojo')
  .filter (oveja => `${oveja.name}`.toLocaleLowerCase().includes ('n'))
  .filter (oveja => `${oveja.name}`.toLocaleLowerCase().includes ('a'))
} 

//*utilizando filter-toLocaleLowerCase-includes*// 


// const ovejas = [
//     { name: 'Noa', color: 'azul' },
//     { name: 'Euge', color: 'rojo' },
//     { name: 'Navidad', color: 'rojo' },
//     { name: 'Ki Na Ma', color: 'rojo'},
//     { name: 'AAAAAaaaaa', color: 'rojo' },
//     { name: 'Nnnnnnnn', color: 'rojo'}
//   ]

//   const filtrarObejas = (obj, letraUno, letraDos, color) ={
//     const filtro = obj.filter (oveja => {
//       oveja.name = oveja.name.toLowerCases () //pasando a minuscula
//       if (oveja.name.includes (letraUno)
//       && oveja.name.includes (letraDos)
//       && oveja.color.includes (color)) {
//         return oveja
//       }
      
//     })
//     return filtro 
//   }
//   console.log (filtrarObejas)
