import Media from './media';
import {Mediana} from './mediana';
import Moda from './moda';

module.exports = function(arr) {
    if (Array.isArray(arr)) {
        return {
            get Media() {
                return Media(arr);
            },
            get Mediana() {
                return Mediana(arr);
            },
            get Moda() {
                return Moda(arr);
            },
            newarr: function(value) {
                if (Array.isArray(value)) {
                    arr = value;
                }
            }
        }
    }
}