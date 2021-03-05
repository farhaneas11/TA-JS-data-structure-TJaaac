/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses[name]);
// 2. Log the length of the "houses" key
console.log(got.houses.length);
// 3. Log the name of all houses in got one by one

  for(let house of got.houses){    
      console.log(house.name,':names');
    }
  

// 4. Log the name of all the people in house Starks (index 0) one by one

  for(let house of got.houses[0].people){
    console.log(house.name);
  }

// 5. Log the name of all the people in house Lannisters (index 1) one by one

  for(let house of got.houses[1].people){
    console.log(house.name);
  }

// 6. Log the description of all the people in house Lannisters (index 1) one by one

for(let house of got.houses[1].people){
  
  console.log(house.description,':discription'); 
  
}    
             
 
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`

for(let house of got.houses[1].people)   {  
        console.log(`I am ${house.name} and my bio is ${house.description}`);      
    }
  

// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for(let house of got.houses[0].people)   {  
  console.log(`I am ${house.name} and my bio is ${house.description}`);      
}
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for(let house of got.houses[0].people){  
  if(house.name == "Robb Stark"){
    console.log(house.description);
  }
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
for(let house of got.houses[1].people){  
  if(house.name == "Tywin Lannister"){
    console.log(house.description);
  }
}
// 11. Push the name of the houses in an array named `houseNames` and Log the array
let houseNames = [];
for(let house of got.houses){    
  houseNames.push(house);
}
// 12. Log the size of people in Starks house
for(let house of got.houses[0].people)   {  
  console.log(house.length);     
}
// 13. Log the size of people in Lannisters house
for(let house of got.houses[1].people){  
  console.log(house.length,"length");     
}
// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 8} and log the object
for(let house of got.houses){
  for(let peoples of house.people){  
  console.log(peoples.length,"length");     
 }
}
// 15. Log the name of all the people of all the houses in got one by one
for(let house of got.houses){
  for(let peoples of house.people){  
  console.log(peoples.name,':names');     
 }
}
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople =[];
for(let house of got.houses){
  for(let peoples of house.people){  
  allPeople.push(peoples.name);      
  }
}
// 17. Log the value and length of `allPeople` array created above
console.log(allPeople.length,"length");
// 18. Push all descriptions into an array named `allDescription`
let allDescription =[];
for(let house of got.houses){
  for(let peoples of house.people){  
  allDescription.push(peoples.description);
 }
}  
// 19. Log the value and length `allDescription`
console.log(allDescription.length,"length");
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
for(let house of got.houses){
  for(let peoples of house.people){  
    if(peoples.description > 30){
      console.log(peoples.description.length,"30");
    }
 }
} 