let dashboard = document.getElementById('dashboard');
// console.log(dashboard);
let design = document.getElementById('design');
// console.log(design);
let products = document.getElementById('products');
// console.log(products);
let materials = document.getElementById('materials');
// console.log(materials);
let calculator = document.getElementById('calculator');
// console.log(calculator);
let profile = document.getElementById('profile');
// console.log(profile);
let settings = document.getElementById('settings');
// console.log(settings);
let logout = document.getElementById('logout');
// console.log(logout);


if (document.title === 'smart kitchen Dashboard'){


dashboard.classList.add('active');

}else if(document.title === 'smart kitchen products') {

products.classList.add('active');
dashboard.classList.remove('active');
}else if(document.title === 'smart kitchen desighn') {

design.classList.add('active');
products.classList.remove('active');
dashboard.classList.remove('active');

}else if(document.title === 'smart kitchen materials') {

materials.classList.add('active');
products.classList.remove('active');
dashboard.classList.remove('active');
design.classList.remove('active');

}

;



