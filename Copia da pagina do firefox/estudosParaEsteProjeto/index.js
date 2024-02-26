let Cpm = document.getElementById('Campodepesquisa');
  Cpm.onkeyup= (insert)=>{
    let pesquisa = Cpm.value;
      console.log(insert.code)
     
      if(insert.key === 'Enter'){
    window.open(`https://www.google.com/search?query=${pesquisa}`);
            
          
      
      }
  };


