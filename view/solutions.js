export const solutions = () => {
    const divSolutions = document.createElement('div');
    divSolutions.setAttribute('class', 'div-solutions');
    const viewSolutions = ` 
    <section class=" section-hdr center-align">
      <img src='img/logo.png' alt='logo' id='logo' class='responsive-img' width='120'/>
      <p class= 'title'>Caribe</p>
      <p class= 'sub-title'>Tu huella de carbono es</p>
    </section>
    <div class=' content-result'>
  <h2 class= 'result'>${parseFloat(localStorage.getItem("calculo")*1000).toFixed(2)}</h2>
  <p class='unit-mass'>kg Co2</p>
</div>
<section class=" center-align">
<div class='content-equivalence'>
<h5>EQUIVALENCIA</h5>
 </div>
 <div class='content-solutions'>
<h5>Soluciones</h5>
 </div>
 <div class='content-saving'>
<h5>AHORRO</h5>
 </div>
</section>
    <section class=" section-hdr center-align">
    <a href='' class="btn-clo waves-effect waves-light btn">NUEVO CALCULO</a>
    </section>`
    divSolutions.innerHTML = viewSolutions;
    return divSolutions
}
