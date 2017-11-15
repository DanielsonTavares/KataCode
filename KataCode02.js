function chop(pInt, pVetor) {
  var
    vetorInteiros = [],
    tamVetor = 0,
    idxMeio = 0,
    idxMeioAnt = 0,
    buscaProximo = true;
  
  // ordenar pVetor
  vetorInteiros = pVetor.sort();
  
  
  
  // encontrar pInt em pVetor
  tamVetor = vetorInteiros.length;
  
  idxMeio = Math.trunc( ( tamVetor - idxMeio ) / 2 );
  
  while ( buscaProximo ) {
    
      
      if ( pInt == vetorInteiros[idxMeio] ) {
      
        console.log('Achei!');
        buscaProximo = false;
      
      } else if ( pInt < vetorInteiros[idxMeio] ) {
        
        if ( Math.trunc( ( idxMeio ) / 2 ) == 1 ) {
    
          if ( pInt == vetorInteiros[idxMeio - 1 ] ) {
            console.log('Achei, finalmente! 1');
          } else if ( pInt == vetorInteiros[idxMeio - 2] ) {
            console.log('Achei, finalmente! 2');
          }
          
          buscaProximo = false;
         // console.log('Valor nao encontrado');
          
        }
        
        idxMeio -= Math.round( ( idxMeio ) / 2 );
        
        console.log('Menor');
      
      } else {
        
        idxMeio += Math.trunc( ( tamVetor - idxMeio ) / 2 );
        
        if ( Math.trunc( ( tamVetor - idxMeio ) / 2 ) == 1 ) {
    
          console.clear();
    
          if ( pInt == vetorInteiros[idxMeio + 1 ] ) {
            console.log('Achei, finalmente! 1');
          } else if ( pInt == vetorInteiros[idxMeio + 2] ) {
            console.log('Achei, finalmente! 2');
          }
          
          buscaProximo = false;
         // console.log('Valor nao encontrado');
          
        }
        console.log('Maior');
      }
  
      idxMeioAnt = idxMeio;
    
    
  }
  
  console.log(vetorInteiros);
  console.log('OK');
  
}
