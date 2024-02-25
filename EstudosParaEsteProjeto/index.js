  let CampoPesquisa = document.getElementById('Senha');
  
    CampoPesquisa.onkeyup= (insertx)=>{
      let pesquisa = CampoPesquisa.value;
     
          if(insertx.key === 'Enter'){
         if (pesquisa == 'Prog') {
          CampoPesquisa.style.color = 'green';
           alert('Você Digitou a senha correta !');
         }
         else{
             CampoPesquisa.style.color = 'red'
            alert('Digite a senha correta e tente novamente');
        }

        if (pesquisa === '') {
            CampoPesquisa.style.color = 'yellow';
          alert('digite sua senha ! para continuar');
        }
      }
    
    
      
  };