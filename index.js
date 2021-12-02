// Code your solutions in this file

const name = (["Lisa", "Kaitlin", "Jan" ]);
const messages = [];

function writeCards(name,event){
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        debugger;
      }

      return messages;
    
}

function countDown(numbers) {
    let i = 10;
    while(i >= 0){
        console.log(i);
        i--;

    } 
    return numbers;
}