/*1) Observe o trecho de código abaixo: 

 	int INDICE = 13, SOMA = 0, K = 0; 

 	enquanto K < INDICE faça 

	{ 

		K = K + 1; 

		SOMA = SOMA + K; 

	} 

 	imprimir(SOMA); 

  

Ao final do processamento, qual será o valor da variável SOMA? */

function somar() {
  
    let i = 13;
    let soma = 0;
    let k = 0;
    
    while (k < i) {
        k = k + 1;
        soma = soma + k;
    }
    
    console.log(soma);
}
somar()

