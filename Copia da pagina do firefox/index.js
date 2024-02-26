let Cpmpic = document.getElementById('input-box-firepic');
  Cpmpic.onkeyup= (funcaoPic)=>{
    let pesquisaPic = Cpmpic.value;
      if(funcaoPic.key === 'Enter'){
    window.open(`https://www.google.com/search?query=${pesquisaPic}`);
            

      }
  };
