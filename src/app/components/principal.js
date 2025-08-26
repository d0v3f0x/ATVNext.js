import React from 'react';
import Default from '../default/page';

function Index () {  // Função nomeada
    return(
        <div>
            <h1>Pagina principal 1</h1>
        </div>
    )
}
export default Index;

// const Index = function () {  //Função anônima
//     return (
//         <div>
//             <h1>Pagina principal 2</h1>
//         </div>
//     )
// }
// export default Index;

// export default function Index() { //Exportando a função diretamente
//     return (
//         <div>
//             <h1>Pagina principal 3</h1>
//         </div>
//     )
// }

// export default function () { //Exportando a função diretamente sem nome
//     return(
//         <div>
//             <h1>Pagina principal 4</h1>
//         </div>
//     )
// }

// export default () => { //Arrow function exportando diretamente
//     return(
//         <div>
//             <h1>Pagina principal 5</h1>
//         </div>
//     )
// }

// export default () => <div><h1>Pagina principal 6</h1></div> //Arrow function em uma linha

// export default () => {  //Arrow function exportando diretamente multi-linhas
//     <div>
//         <h1>Pagina principal 7</h1>
//     </div>
// } 