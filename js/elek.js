var Elec = {
    napeti: 0,
    proud: 0,
    cas: 0,
    value: function(n = this.napeti, p = this.proud, c = this.cas){
        return(n * p * c).toFixed(2);
    }
}



var result = document.getElementById('result');

document.getElementById('calc').addEventListener('click', function() {
    Elec.napeti = document.getElementById('napeti').value;
    Elec.proud = document.getElementById('proud').value;
    Elec.cas = document.getElementById('cas').value;
    document.getElementById('result').innerHTML = 'Velikost elektrické síly = ' + Elec.value();  
});