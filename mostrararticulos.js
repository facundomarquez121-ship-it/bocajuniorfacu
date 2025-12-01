function mostrarArticulos(rubro){
    //guardamos el rubro elegido
    localStorage.setItem('rubroSelecionado', rubro);
    //redireccion a otra pagina,
    window.location.href = "articulosdelrubro.html";
}