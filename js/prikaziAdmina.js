fetch('https://randomuser.me/api/?results=12')
	.then(response => response.json())
	.then(podaci => prikaziAdmina(podaci))


function prikaziAdmina(korisnici) {
	const Admin = document.getElementById('AdminDiv');

	let kartica = ``;
	for (let i = 0; i < korisnici.results.length; i++) {
		const admin = korisnici.results[i];


		kartica += `
       
        <div class="col-sm-12 col-md-4 col-lg-4>
        <div class="card">
        <div class="card-body kard">
        <img src="${admin.picture.large}" value=" class="card-img-top" alt="${admin.name.first}"> 
          <h5 class="card-title velikoSlovo">${admin.name.first} ${admin.name.last}</h5>
          <p class="card-text">Email: ${admin.email}</p>
          <p class="card-text">Mobilni telefon:${admin.phone}</p>     
        </div>
      </div>
      </div>
        
        `
	}

	Admin.innerHTML = kartica;
}