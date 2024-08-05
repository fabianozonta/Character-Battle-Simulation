const perso1Name = prompt('Digite o nome do seu personagem: ') 
const perso1PoderAtaque = parseFloat(prompt('Digite o seu poder de ataque: '))

const perso2Name = prompt('Digite o nome do seu personagem: ') 
let perso2PontosVida = parseFloat(prompt('Digite quantos pontos de vida o personagem tem: '))
const perso2PoderDefesa = parseFloat(prompt('Digite quano tem de poder de defesa do oponente'))
const perso2Escudo = prompt('Oponente em escudo? digite S para sim ou N para não')

let dano = 0

if (perso1PoderAtaque > perso2PoderDefesa && perso2Escudo == 'Não'){
    dano = perso1PoderAtaque - perso2PoderDefesa
}else if(perso1PoderAtaque > perso2PoderDefesa && perso2Escudo == 'Sim'){
    dano = (perso1PoderAtaque - perso2PoderDefesa) / 2
}

perso2PontosVida -= dano

alert(perso1Name + " causou " + dano + " pontos de dano em " + perso2Name)
alert(
  perso1Name + "\nPoder de ataque: " + perso1PoderAtaque + "\n\n" +
  perso2Name + "\nPontos de vida: " + perso2PontosVida +
  "\nPoder de defesa: " + perso2PoderDefesa + "\nPossui escudo: " + perso2Escudo
)

