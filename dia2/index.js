const carta = 'bici coche balón _playstation bici coche peluche'
export default function listGifts(letter) {
  // ¡Tú puedes!
  const arr= letter.split(" ");
  
     return arr.reduce((obj,item)=>{
         if(!item.includes("_")&& item){
            obj[item]? obj[item]+=1: obj[item]=1;
         }return obj
     },{})
 }
 
   
   const regalos  = giftList(letter)
   console.log (regalos)