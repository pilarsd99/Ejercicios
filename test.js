function suma (a,b){
    return a + b;
}
function divicion (a,b){
    return a / b;
}
function devuelvoObjeto(){
    return{
        nombre: 'tita',
        edad: 120
    }
}
/*test('suma 1 + 2 es igual a 3', ()=>{
    const valorObtenido = suma(1,2);
    const valorEsperado = 3;
    expect(valorObtenido).toBe(valorEsperado);
});
test('divicion 2 / 0 es igual a Infinity', ()=>{
    const valorObtenido = divicion(1,2);
    const valorEsperado = 0.5;
    expect(valorObtenido).toBe(valorEsperado);
});*/
test('espero que tita tenga 120 años',()=>{
const result = devuelvoObjeto();
const expected = {
    nombre: 'tita',
    edad: 120
}
expect(result).toHaveProperty('edad',12);
});