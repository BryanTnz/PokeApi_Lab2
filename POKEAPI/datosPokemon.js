const consultarPokemon = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
       
      return response.json();
    })

    .then((data) => {
       
      pintarPokemon(data,number)
    })

    .catch((error) => {
      console.log(error);
    });
};




const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon,1);
  consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
  let item = lista.querySelector(`#pok-${id}`);

  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);

  item.getElementsByTagName("p")[0].innerHTML = data.name;
  item.getElementsByTagName('p')[1].innerHTML = data.order;
  

  let poke = ''
  for(let i = 0; i < data.abilities.length; i++){
    poke += `<li> ${data.abilities[i].ability.name} </li>`
     
  }
  item.getElementsByTagName('ol')[0].innerHTML = poke;

}