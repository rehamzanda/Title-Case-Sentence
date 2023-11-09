//Wednesday : Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

//For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

//For this algorithm, you can use the split() method.


 //my answer: 
// declare a new function that return a string
//define a new var array to save the converted str as an array
//for loop inside the array
//define a new var to make the elements in array in lowercase
//make the first character in each element of array to uppercase
// slice the first character from each element
// creat the new element of array from = the firt uppercase characters +  the sliced elements
//join method to convert it to str
//retun the str
const Capitalize= (str)=>{
    let array= str.split(" ");
    for(let i=0; i< array.length ; i++){ 
        let loweCaseWord= array[i].toLowerCase();
        array[i] = array[i][0].toUpperCase()+ loweCaseWord.slice(1)
      
    }
    return array.join(' ')
}


const titleCase = ("I'm a little tea pot");
const testStr2= ("sHoRt AnD sToUt")
console.log(Capitalize(testStr2));