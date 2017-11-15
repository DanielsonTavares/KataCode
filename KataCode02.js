function chop(pInt, pVetor) {
  var
    vetorInteiros = [],
    tamVetor = 0,
    idxMeio = 0,
    idxMeioAnt = 0,
    buscaProximo = true,
    vetorIni = 0,
    vetorFim = 0,
    k = 0;
  
  // ordenar pVetor
  vetorInteiros = pVetor.sort();
  
  
  
  // encontrar pInt em pVetor
  tamVetor = vetorInteiros.length;
  vetorFim = tamVetor - 1;

  //idxMeio = Math.trunc( ( tamVetor - idxMeio ) / 2 );
  
  while ( buscaProximo ) {
    
      idxMeio = Math.trunc( ( vetorFim - vetorIni ) / 2 );
      idxMeio += vetorIni;
    
      if ( pInt == vetorInteiros[idxMeio] ) {
      
        console.log('Achei!');
        buscaProximo = false;
      
      } else if ( pInt <= vetorInteiros[idxMeio] ) {
        
        vetorFim = idxMeio;
        
        console.log('Menor');
      
      } else {
        
        
        vetorIni = idxMeio;
        console.log('Maior');
      }
  
    
      k++;
      if (k > 10) {
        buscaProximo = false;
      }
  }
  

  
  console.log(vetorInteiros);
  console.log('OK');
  
}
