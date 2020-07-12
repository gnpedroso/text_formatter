(function(){

    var $txtArea = document.getElementById('txtArea');
    var $tudoCaps = document.getElementById('tudoCaps');
    var $inicialCaps = document.getElementById('inicialCaps');
    var $reset = document.getElementById('reset');
    var $result = document.getElementById('result');
    var $contagem = document.getElementById('contagem');
    var $copyBtn = document.getElementById('copyBtn');

    $txtArea.addEventListener('keyup', function(){
        $contagem.textContent = $txtArea.value.length;
    })

    $reset.addEventListener('click', function(){
        $txtArea.value = '';
        $contagem.textContent = 0;
        $result.innerHTML = '';
        $txtArea.focus();
        
    })

    $tudoCaps.addEventListener('click', function(){
       var textoCaps = $txtArea.value;
       result(textoCaps.toUpperCase())

    })

    function result(texto){
        $result.innerHTML = texto;
    }

    $copyBtn.addEventListener('click', function(){
        $result.select();
        document.execCommand('Copy');
        $txtArea.focus();

})   
    $inicialCaps.addEventListener('click', function(){
        $result.textContent = uppercaseFirst($txtArea.value);

    })

    function uppercaseFirst(str){

    let array1 = str.split(' ');
    let newarray1 = [];
        
    for(let x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}

})()