/*<------------- gloabal variables ------------->*/
//*<----------------------------------------->*//
//*<------------- querySelectors ------------->*//
//*<----------------------------------------->*//
let userInput = document.querySelector('#userInput');
let searchButton = document.querySelector('#searchButton');
let body = document.querySelector('body');
let img = document.querySelector('#characterImg');
let characterDiv = document.querySelector('#character');
let characterLabel = document.querySelector('#characterLabel');
let characterTitle = document.querySelector('#cardTitle');
let characterInfo = document.querySelector('#characterInfo');
let characterCard = document.querySelector('.card');
let characterCard2 = document.querySelector('#card2');
let movesArrowButton = document.querySelector('#leftArrowButton');
let compareArrowButton = document.querySelector('#rightArrowButton');
let mainPageImg = document.querySelector('#mainPageCards');
let backArrowButton = document.querySelector('#backArrowButton');
let characterCard3 = document.querySelector('.card3');
let characterTitle3 = document.querySelector('#cardTitle3');
let characterInfo3 = document.querySelector('#characterInfo3');
let img3 = document.querySelector('#characterImg3');
//~~~~~~~~~~~~~~~~~~Comparison Cards~~~~~~~~~~~~~~~~~~~
let cardGroup = document.querySelector('#cardGroup');
let userInput2 = document.querySelector('#userInput2');
let searchButton2 = document.querySelector('#searchButton2');
let cardGroupImg = document.querySelector('#cardGroupImg');
let cardGroupImg2 = document.querySelector('#cardGroupImg2');
let cardGroupCharacterInfo1 = document.querySelector('#cardGroupInfo1');
let cardGroupCharacterInfo2 = document.querySelector('#cardGroupInfo2');
let cardGroupCharacterName1 = document.querySelector('#cardGroupName1');
let cardGroupCharacterName2 = document.querySelector('#cardGroupName2');
//~~~~~~~~~~~~~~~~~~Moves card~~~~~~~~~~~~~~~~~~~
let characterTitle2 = document.querySelector('#cardTitle2');
let characterInfo2 = document.querySelector('#characterInfo2');
let characterImg2 = document.querySelector('#characterImg2');
//*<------------- API Fetch Call ------------->*//
//*<----------------------------------------->*//
//hiding the cards untill user searches
characterCard.style.display = "none"
characterCard2.style.display = "none"
characterCard3.style.display = "none"
userInput2.style.display = "none"
searchButton2.style.display = "none"
cardGroup.style.display = "none"
searchButton.addEventListener('click', () => {
  //hiding the images on page
  mainPageImg.style.display = "none"
  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput.value}`)
    .then(function(response){
          return response.json()
    })
    .then(function(data){
      console.log(data);
      //Resetting character info to search another character
      characterInfo.innerText = ""
      //setting card img to user's selected character
      img.src = data.sprites.front_default;
      let character1Img = img.src
      //making the card visible
      characterCard.style.opacity = "10";
      //characters data
      characterTitle.innerHTML = `${data.name.toUpperCase()}`;
      characterInfo.innerText += `\n Height: ${data.height}'00"`;
      characterInfo.innerText += `\n Weight: ${data.weight}lbs`;
      characterInfo.innerText += `\n Type: ${data.types[0].type.name.toUpperCase()}`;
      characterInfo.innerText += `\n Abilities: ${data.abilities[0].ability.name}`;
      characterInfo.innerText += `\n Attack: ${data.stats[0].base_stat}` ;
      characterInfo.innerText += `\n Defense: ${data.stats[1].base_stat}`;
      characterInfo.innerText += `\n Special Attack: ${data.stats[2].base_stat}`;
      characterInfo.innerText += `\n Special Defense: ${data.stats[3].base_stat}`;
      characterInfo.innerText += `\n Speed: ${data.stats[4].base_stat}`;
      //resetting the character card
      characterCard.style.display = "";
      //hiding the Moves card
      characterCard2.style.opacity = "0";
      //resetting userInput
      userInput.value = "";
      //Moves arrow event listener
      movesArrowButton.addEventListener("click", () => {
      //new image for the moves card
      characterImg2.src = data.sprites.other.dream_world.front_default;
      //character moves data
      characterInfo2.innerText = `${data.name} Moves: \n`
      characterInfo2.innerText += `\n${data.moves[0].move.name.toUpperCase()} `
      characterInfo2.innerText = data.moves[0].move.name.toUpperCase() + "\n"
      characterInfo2.innerText = data.moves[0].move.name.toUpperCase() +  "\n";
      characterInfo2.innerText += data.moves[1].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[2].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[3].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[4].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[5].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[6].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[7].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[8].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[9].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[10].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += `\n${data.moves[11].move.name.toUpperCase()}`;
      characterInfo2.innerText += data.moves[12].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[13].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[14].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[15].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[16].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[17].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[18].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[19].move.name.toUpperCase() + "\n";
      characterInfo2.innerText += data.moves[20].move.name.toUpperCase() + "\n";
        //resetting first character card description
        characterInfo.innerText = ""
        //hiding first character card
        characterCard.style.display = "none"
        //resetting Moves card
        characterCard2.style.display = ""
        //viewing Moves card
        characterCard2.style.opacity = "10"
        //resetting search bar
        userInput.value = ""
      })
        backArrowButton.addEventListener("click", () => {
          characterCard.style.display = "";
          characterTitle.innerHTML = `${data.name.toUpperCase()}`;
          characterInfo.innerText += `\n Height: ${data.height}'00"`;
          characterInfo.innerText += `\n Weight: ${data.weight}lbs`;
          characterInfo.innerText += `\n Type: ${data.types[0].type.name.toUpperCase()}`;
          characterInfo.innerText += `\n Abilities: ${data.abilities[0].ability.name}`;
          characterInfo.innerText += `\n Attack: ${data.stats[0].base_stat}` ;
          characterInfo.innerText += `\n Defense: ${data.stats[1].base_stat}`;
          characterInfo.innerText += `\n Special Attack: ${data.stats[2].base_stat}`;
          characterInfo.innerText += `\n Special Defense: ${data.stats[3].base_stat}`;
          characterInfo.innerText += `\n Speed: ${data.stats[4].base_stat}`;
          characterCard2.style.display = "none"
          searchButton.disabled = "true"
        })
        compareArrowButton.addEventListener("click", () => {
          cardGroup.style.display = "";
          alert("Search for another pokemon");
          characterCard.style.display = "none"
          //displaying 2nd search bar
          userInput2.style.display = ""
          searchButton2.style.display = ""
          //hiding 1st search bar
          userInput.style.display = "none"
          searchButton.style.display = "none"
          //setting card img to user's selected character
          cardGroupImg.src = character1Img
          //making the card visible
          //characters data
          cardGroupCharacterName1.innerHTML = `${data.name.toUpperCase()}`;
          cardGroupCharacterInfo1.innerText += `\n Height: ${data.height}'00"`;
          cardGroupCharacterInfo1.innerText += `\n Weight: ${data.weight}lbs`;
          cardGroupCharacterInfo1.innerText += `\n Type: ${data.types[0].type.name.toUpperCase()}`;
          cardGroupCharacterInfo1.innerText += `\n Abilities: ${data.abilities[0].ability.name}`;
          cardGroupCharacterInfo1.innerText += `\n Attack: ${data.stats[0].base_stat}` ;
          cardGroupCharacterInfo1.innerText += `\n Defense: ${data.stats[1].base_stat}`;
          cardGroupCharacterInfo1.innerText += `\n Special Attack: ${data.stats[2].base_stat}`;
          cardGroupCharacterInfo1.innerText += `\n Special Defense: ${data.stats[3].base_stat}`;
          cardGroupCharacterInfo1.innerText += `\n Speed: ${data.stats[4].base_stat}`;
          img3.style.display = "none"
          //2nd Search Bar Event Listener
          searchButton2.addEventListener('click', () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${userInput2.value}`)
            .then(function(response2){
                  return response2.json()
            })
            .then(function(data2){
              console.log(data2);
            characterCard.style.display = "none"
            characterCard3.style.display = ""
            //2nd Characters data
            cardGroupImg2.src = data2.sprites.front_default;
            cardGroupCharacterName2.innerHTML = `${data2.name.toUpperCase()}`;
            cardGroupCharacterInfo2.innerText += `\n Height: ${data2.height}'00"`;
            cardGroupCharacterInfo2.innerText += `\n Weight: ${data2.weight}lbs`;
            cardGroupCharacterInfo2.innerText += `\n Type: ${data2.types[0].type.name.toUpperCase()}`;
            cardGroupCharacterInfo2.innerText += `\n Abilities: ${data2.abilities[0].ability.name}`;
            cardGroupCharacterInfo2.innerText += `\n Attack: ${data2.stats[0].base_stat}` ;
            cardGroupCharacterInfo2.innerText += `\n Defense: ${data2.stats[1].base_stat}`;
            cardGroupCharacterInfo2.innerText += `\n Special Attack: ${data2.stats[2].base_stat}`;
            cardGroupCharacterInfo2.innerText += `\n Special Defense: ${data2.stats[3].base_stat}`;
            cardGroupCharacterInfo2.innerText += `\n Speed: ${data2.stats[4].base_stat}`;
        })
          })})})})
          userInput.value = ""
          /*
          MAIN ISSUES
          -cannot click compare w/out clicking moves first
          -cannot show description of character when clicking back button from moves b/c the description will repeat it self
          -search button will change the contents of first card when trying to compare to display 2nd character
          -characters over 900 will not display
          -cannot access keys with hyphens using bracket notation
          */