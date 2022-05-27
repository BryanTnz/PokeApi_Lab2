let url = "https://jsonplaceholder.typicode.com/users";

const obtenerUsaurios = async () => {
  try {
    let response = await fetch(url);

    if(!response.ok)
    {
        throw new Error("Ourrio un Error al realizar la petición")
    }

    let data = await response.json();

    pintarUsuarios(data);

  } catch (error) 
  {
    console.log(error);
  }
};


obtenerUsaurios();

const pintarUsuarios = (data) => 
{
  let body = "";
  for (let i = 0; i < data.length; i++) 
  {
    body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
  }

  document.getElementById("data").innerHTML = body;
};

const lista2 = document.getElementById("nuevoprueba")

const prueba = () => 
{
    
    let item2 = lista2.querySelector(`my`);
    fetch('https://api.giphy.com/v1/stickers/random?api_key=Dqq6O6niJI9QpmkfNnZD8rADFcvnfctO&tag=gato')
     .then(response => response.json())
     .then(datos => console.log(datos.data.url));
     
};
prueba();
