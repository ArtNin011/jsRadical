// Trabalhando com array
// 1° Forma: objeto

let nomes = new Array();
let cisne = {};

nomes[0] = "Minos Prime";
nomes[1] = "Santos DuMonte";
nomes[2] = "Solid Snake";
nomes[3] = "Getulio VArgas";
nomes[4] = "Dave Doidão";
nomes[5] = "MMs";
// demonstrar elemento individual


//document.writeln(`nome: ${nomes[2]}`);
//document.writeln("<p>nome: " + nomes[2]+ "</p>");


//loop
nomes.forEach(element => {
    document.writeln( "<p> nome: " + element + "</p>");   
});

document.writeln("<hr>");
//contar quantos elementos tem o array

let qtArt = nomes.length;
document.writeln(`Total: ${qtArt}`);

for(i = 0 ; i < nomes.length; i++){
    document.writeln(`<p> Nomes: ${nomes[i]} </p>`);
}