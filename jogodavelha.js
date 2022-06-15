console.log('Bem Vindos ao Jogo da Velha!!!')
let jogodavelha = [[], [], []]; 
 jogodavelha[2][2] = undefined; 
 let jogada = ""; 
 let item; 
 let player1 = 0; 
 let player2 = 0; 
 let repete = "sim"; 
game(); 
 displayItem(); 
 updateLayout(); 
 console.log(); 
 console.log(jogada);
  
 function jogar() { 
   jogada = `${escolha(jogodavelha[0][0])} | ${escolha( 
     jogodavelha[0][1] 
   )} | ${escolha(jogodavelha[0][2])} 
 --------- 
 ${escolha(jogodavelha[1][0])} | ${escolha( 
     jogodavelha[1][1] 
   )} | ${escolha(jogodavelha[1][2])} 
 --------- 
 ${escolha(jogodavelha[2][0])} | ${escolha( 
     jogodavelha[2][1] 
   )} | ${escolha(jogodavelha[2][2])}`; 
 } 
  
 function escolha(item) { 
   return item === undefined ? " " : item; 
 } 
 escolha(); 
 jogar(); 
 console.log(jogada); 
 function game() { 
   for (let i = 1; i > 0; ) { 
     console.log("Jogador1, por favor selecione o simbulo 'x' ou 'o'"); 
     jogador1 = prompt(); 
     console.log("Jogador2, por favor selecione o simbulo 'x' ou 'o'"); 
     jogador2 = prompt(); 
     if (jogador1 == "x" && jogador2 == "o") { 
       console.log("tudo certo, vamo pro jogo"); 
     } else if (jogador1 == "o" && jogador2 == "x") { 
       console.log("tudo certo, vamo pro jogo"); 
     } else { 
       console.log("Selecione simbolos diferente"); 
  
       console.log("Jogador1, por favor selecione o simbulo 'x' ou 'o'"); 
       jogador1 = prompt(); 
       console.log("Jogador2, por favor selecione o simbulo 'x' ou 'o'"); 
       jogador2 = prompt(); 
     } 
  
     console.log("selecione as rodadas"); 
     i = +prompt(); 
     let jogadas = 0; 
     if (repete.toLowerCase() == "sim") { 
       while (i > 0) { 
         console.log(i); 
         jogadas++; 
         console.log(`selecione a linha e a coluna, sendo de 1 a 3 para linhas, de A a c para colunas e x ou o 
       ex: 1a x`); 
         selecao = prompt(); 
  
         if (selecao.toLowerCase() == "1a x" && jogodavelha[0][0] == undefined) { 
           (jogodavelha[0][0] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "1a o" && 
           jogodavelha[0][0] == undefined 
         ) { 
           (jogodavelha[0][0] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "1b x" && 
           jogodavelha[0][1] == undefined 
         ) { 
           (jogodavelha[0][1] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "1b o" && 
           jogodavelha[0][1] == undefined 
         ) { 
           (jogodavelha[0][1] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "1c x" && 
           jogodavelha[0][2] == undefined 
         ) { 
           (jogodavelha[0][2] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "1c o" && 
           jogodavelha[0][2] == undefined 
         ) { 
           (jogodavelha[0][2] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "2a x" && 
           jogodavelha[1][0] == undefined 
         ) { 
           (jogodavelha[1][0] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "2a o" && 
           jogodavelha[1][0] == undefined 
         ) { 
           (jogodavelha[1][0] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "2b x" && 
           jogodavelha[1][1] == undefined 
         ) { 
           (jogodavelha[1][1] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "2b o" && 
           jogodavelha[1][1] == undefined 
         ) { 
           (jogodavelha[1][1] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "2c x" && 
           jogodavelha[1][2] == undefined 
         ) { 
           (jogodavelha[1][2] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "2c o" && 
           jogodavelha[1][2] == undefined 
         ) { 
           (jogodavelha[1][2] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "3a x" && 
           jogodavelha[2][0] == undefined 
         ) { 
           (jogodavelha[2][0] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "3a o" && 
           jogodavelha[2][0] == undefined 
         ) { 
           (jogodavelha[2][0] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "3b x" && 
           jogodavelha[2][1] == undefined 
         ) { 
           (jogodavelha[2][1] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "3b o" && 
           jogodavelha[2][1] == undefined 
         ) { 
           (jogodavelha[2][1] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "3c x" && 
           jogodavelha[2][2] == undefined 
         ) { 
           (jogodavelha[2][2] = "x"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else if ( 
           selecao.toLowerCase() == "3c o" && 
           jogodavelha[2][2] == undefined 
         ) { 
           (jogodavelha[2][2] = "o"), escolha(); 
           jogar(); 
           console.log(jogada); 
         } else { 
           console.log("opção invalida"); 
           jogadas--; 
         } 
  
         if ( 
           jogodavelha[0][0] == jogodavelha[0][1] && 
           jogodavelha[0][1] == jogodavelha[0][2] && 
           jogodavelha[0][0] != undefined 
         ) { 
           console.log(jogodavelha[0][0], "ganhou!"); 
           if (jogodavelha[0][0] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
             i--; 
           } else if (jogodavelha[0][0] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
  
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if ( 
           jogodavelha[1][0] == jogodavelha[1][1] && 
           jogodavelha[1][1] == jogodavelha[1][2] && 
           jogodavelha[1][0] != undefined 
         ) { 
           console.log(jogodavelha[1][0], "ganhou!"); 
           if (jogodavelha[1][0] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
  
             i--; 
  
             console.log(jogodavelha[0]); 
           } else if (jogodavelha[1][0] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
  
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if ( 
           jogodavelha[2][0] == jogodavelha[2][1] && 
           jogodavelha[2][1] == jogodavelha[2][2] && 
           jogodavelha[2][0] != undefined 
         ) { 
           console.log(jogodavelha[2][0], "ganhou!"); 
           if (jogodavelha[2][0] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
             i--; 
           } else if (jogodavelha[2][0] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if ( 
           jogodavelha[0][0] == jogodavelha[1][0] && 
           jogodavelha[1][0] == jogodavelha[2][0] && 
           jogodavelha[0][0] != undefined 
         ) { 
           console.log(jogodavelha[0][0], "ganhou!"); 
           if (jogodavelha[0][0] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
             i--; 
           } else if (jogodavelha[0][0] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if ( 
           jogodavelha[0][1] == jogodavelha[1][1] && 
           jogodavelha[1][1] == jogodavelha[2][1] && 
           jogodavelha[0][1] != undefined 
         ) { 
           console.log(jogodavelha[0][1], "ganhou!"); 
           if (jogodavelha[0][1] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
             i--; 
  
             console.log(jogodavelha[0]); 
           } else if (jogodavelha[0][1] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if ( 
           jogodavelha[0][2] == jogodavelha[1][2] && 
           jogodavelha[1][2] == jogodavelha[2][2] && 
           jogodavelha[0][2] != undefined 
         ) { 
           console.log(jogodavelha[0][2], "ganhou!"); 
           if (jogodavelha[0][2] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
             i--; 
           } else if (jogodavelha[0][2] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if ( 
           jogodavelha[2][0] == jogodavelha[1][1] && 
           jogodavelha[1][1] == jogodavelha[0][2] && 
           jogodavelha[2][0] != undefined 
         ) { 
           console.log(jogodavelha[2][0], "ganhou!"), (i = 0); 
           if (jogodavelha[2][0] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
             i--; 
           } else if (jogodavelha[2][0] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if ( 
           jogodavelha[2][2] == jogodavelha[1][1] && 
           jogodavelha[1][1] == jogodavelha[0][0] && 
           jogodavelha[2][2] != undefined 
         ) { 
           console.log(jogodavelha[2][2], "ganhou!"); 
           if (jogodavelha[2][2] == "x") { 
             if (jogador1 == "x") { 
               player1++; 
             } else if (jogador2 == "x") { 
               player2++; 
             } 
             i--; 
           } else if (jogodavelha[2][2] == "o") { 
             if (jogador1 == "o") { 
               player1++; 
             } else if (jogador2 == "o") { 
               player2++; 
             } 
             i--; 
           } 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
           console.log("Jogador 1", player1, "Jogador 2", player2); 
         } else if (jogadas >= 9) { 
           escolha(); 
           jogar(); 
           console.log(jogada); 
           console.log("Velha"), i--; 
           jogodavelha = [[], [], []]; 
           jogadas = 0; 
         } 
       } 
     } 
  
     console.log("hahaha, isso foi divertido. Deseja jogar de novo?"); 
     repete = prompt(); 
     if (repete.toLowerCase() == "sim") { 
       (i = 1), (player1 = 0), (player1 = 0); 
       console.log(i); 
       jogador1; 
       jogador2; 
     } else { 
       console.log("ok, até mais"); 
     } 
   } 
 } 