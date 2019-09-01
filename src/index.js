import {HTML , CSS} from "./vanilla/vanilla";
import Statistics from "./Estatística/statistics";

var teste = Statistics([2,4,10,5])
teste.newarr([2,2,4,4,5,5,5])
HTML({
    txt: `${teste.Mediana}`,
    name: '#app',
})
CSS({
    name: '#app',
    atr: 'fontSize',
    value: '25px'
})
// Espero que goste do vídeo, vou coloca os código no github.
// Link estará na descrição, abraços amigos.