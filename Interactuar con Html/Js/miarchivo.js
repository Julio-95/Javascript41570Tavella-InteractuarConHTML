let cart = JSON.parse(localStorage.getItem("productosAgregadosJSON")) || [];

let automovil = [
	{ id: 0, name: 'Focus', price: 500000, category: 'Autos', brand: 'Ford', img: 'https://d171xgro1r36rb.cloudfront.net/1wRP95xW4ZIL0RGitI4UhdidoPrLZKEjO.jpg' },
	{ id: 1, name: 'Fiesta', price: 600000, category: 'Autos', brand: 'Ford', img: 'https://img.remediosdigitales.com/13ecaf/ford-fiesta-st-edition-2021-05/840_560.jpeg' },
	{ id: 2, name: 'Ranger', price: 800000, category: 'Camionetas', brand: 'Ford', img:'https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/Nueva-ranger/2020/colours-models/xls/colorizer/azul-belice/far-ranger-xls-azul-belice.jpg.dam.full.high.jpg/1593576091045.jpg'},
	{ id: 3, name: 'Corsa', price: 400000, category: 'Autos', brand: 'Chevrolet', img: 'https://d171xgro1r36rb.cloudfront.net/19etcV41rJRXOaSdXrMVHOjrQkkCIUp7B.jpg' },
	{ id: 4, name: 'cruze', price: 550000, category: 'Autos', brand: 'Chevrolet', img: 'https://img.remediosdigitales.com/31ea35/2014-cruze-diesel-1/1366_2000.jpg' },
	{ id: 5, name: 'Blazer',price: 750000, category: 'Camionetas',brand: 'Chevrolet', img:'https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/suv-and-crossovers/2019-blazer/colorizer/01-images/2021/blazer-colorizer-cl-roja.jpg?imwidth=960'}
  ];
  
  const automovilarray = [...automovil];
  
  function setCategoryFilter(category) {
	automovil = [...automovilarray];
	if (category == 'Autos' || category == 'Camionetas') {
		automovil = automovil.filter((item) => item.category == category);
	}
	renderAutomovil();
  }
  
  let saveToLocalStorage = () =>{
    let storageJSON = JSON.stringify(cart);
    localStorage.setItem("productosAgregadosJSON", storageJSON);
}

  function renderAutomovil() {
	let html = '';
	for (let i = 0; i < automovil.length; i++) {
	  html =
		html +
		`
	  <div onclick="addToCart(${automovil[i].id});saveToLocalStorage();" style="border: 1px solid blue;margin: 10px;">
		<p>id: ${automovil[i].id}</p>
		<p>nombre: ${automovil[i].name}</p>
		<p>precio: ${automovil[i].price}</p>
		<p>categoria: ${automovil[i].category}</p>
		<p>Marca: ${automovil[i].brand}</p>
		<p>
		  <img style="width:100px;height:100px;" src="${automovil[i].img}" />
		</p>
		</div>
	  `;
	}
	document.getElementById('div-automovil').innerHTML = html;
  }
  
  function renderCart() {
	if (cart.length == 0) {
	  document.getElementById('div-cart').innerHTML = '<h3>Aqui vera su proximo vehiculo</h3>';
	} else {
	  let html = '';
	  for (let i = 0; i < cart.length; i++) {
		html =
		  html +
		  `
		<div style="border: 1px solid blue;margin: 10px;">
		<p>id: ${cart[i].id}</p>
		<p>nombre: ${cart[i].name}</p>
		<p>precio: ${cart[i].price}</p>
		<p>categoria: ${cart[i].category}</p>
		<p>
		<img style="width:100px;height:100px;" src="${cart[i].img}" />
		</p>
		<span style="cursor:pointer;" onclick="removeFromCart(${i});">-🚗</span>
		</div>
		`;
	  }
	  document.getElementById('div-cart').innerHTML = html;
	}
  }
  
  function addToCart(id) {
	const foundAutomovil = automovil.find((item) => item.id == id);
	cart.push(foundAutomovil);
	renderCart();
	saveToLocalStorage();
  }
  
  function removeFromCart(id) {
	cart.splice(id, 1);
	renderCart();
	saveToLocalStorage();
  }
  
  renderAutomovil();

  console.log("productosAgregadosJSON")

