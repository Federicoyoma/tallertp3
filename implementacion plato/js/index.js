function OpcionesParaFrutas() {
  document.getElementById('OpcionesFrutas').style.display = 'block';
}

function OcultarOpcionesParaFrutas() {
  document.getElementById('OpcionesFrutas').style.display = 'none';
}

function Naranja() {
  document.getElementById('PlatoConFrutas').style.display = 'block';
  document.getElementById('PlatoConFrutasYLimon').style.display = 'none';
  document.getElementById('PlatoConFrutasYFrutilla').style.display = 'none';
  document.getElementById('PlatoConFrutasYManzana').style.display = 'none';
}

function Limon() {
  document.getElementById('PlatoConFrutasYLimon').style.display = 'block';
  document.getElementById('PlatoConFrutas').style.display = 'none';
  document.getElementById('PlatoConFrutasYFrutilla').style.display = 'none';
  document.getElementById('PlatoConFrutasYManzana').style.display = 'none';

}

function Frutilla() {
  document.getElementById('PlatoConFrutasYFrutilla').style.display = 'block';
  document.getElementById('PlatoConFrutas').style.display = 'none';
  document.getElementById('PlatoConFrutasYLimon').style.display = 'none';
  document.getElementById('PlatoConFrutasYManzana').style.display = 'none';
}

function Manzana() {
  document.getElementById('PlatoConFrutasYManzana').style.display = 'block';
  document.getElementById('PlatoConFrutasYFrutilla').style.display = 'none';
  document.getElementById('PlatoConFrutas').style.display = 'none';
  document.getElementById('PlatoConFrutasYLimon').style.display = 'none';
}
