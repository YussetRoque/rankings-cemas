// Propuesta de Enmanuel
function getIdxAcademico(asignaturas) {
  // es la suma de los 4 meses dividido entre 4
  let promedio_asignaturas = 0;

  // array.forEach(object => {
  //   object.forEach(element)
  // });aaaaa
  
  for (let i = 0; i < asignaturas.length; i++) {
    let total1 = parseFloat(asignaturas[i].ago_sept_oct);
    let total2 = parseFloat(asignaturas[i].nov_dic_ene); ;
    let total3 = parseFloat(asignaturas[i].feb_mar);
    let total4 = parseFloat(asignaturas[i].abr_may_jun);
    let total5 = total1 + total2 + total3 + total4;
    let total = total5 / 4 ;

    console.log("Promedio total de una asignatura",total);
    console.log("Objecto con las asignaturas",asignaturas);

    return total;
  }
}

// function getIdxAcademico(asignaturas) {
//   // es la suma de los 4 semestres dividido entre 4
//   let promedio_asignaturas = 0;

//   for (let i = 0; i < asignaturas.length; i++) {
//     let total1 = parseFloat(asignaturas[i].ago_sept_oct);
//     let total2 = parseFloat(asignaturas[i].nov_dic_ene); ;
//     let total3 = parseFloat(asignaturas[i].feb_mar);
//     let total4 = parseFloat(asignaturas[i].abr_may_jun);
//     let total5 = total1 + total2 + total3 + total4;
//     let total = total5 / 4 ;
//     console.log("promedio según Enmanuel",total);
//     console.log("Adonys el bacacno",asignaturas);

//     // console.log("lo k Adonys quiere ver", asignaturas);
//     return total;

//   }
// }

function getIdxAcademico(asignaturas) {
  asignaturas.forEach((object) => {
    object.forEach((data) => {
      console.log(typeof object, typeof data);
    })
  });
}

// function getIdxAcademico(asignaturas) {
//   asignaturas.forEach(element => {
//     for (let i = 0; i < asignatura.length; i++) {
//       let sum_asignatura = parseInt(asignaturas[i].ago_sept_oct) + parseInt(asignaturas[i].nov_dic_ene) + parseInt(asignaturas[i].feb_mar) + parseInt(asignaturas[i].abr_may_jun);
//       // "ago_sept_oct"
//       // "nov_dic_ene"
//       // "feb_mar"
//       // "abr_may_jun"

//       // es la suma de los 4 meses dividido entre 4
//       let promedio_asignaturas = sum_asignatura / 4;

//       console.log('promedio de las asignaturas', promedio_asignaturas)
//       return promedio_asignaturas;
//     }
//   });
// }

// const getIdxAcademico = (asignaturas) => {
//   // es la suma de toda las asignaturas divido entre la cantidad de asignaturas
//   let promedio_academico = 0;
//   console.log("getIdxAcademico", asignaturas);

//   // Calcular idx academico

//   /**
//    * Ejemplo  de los elementos dentro de asignaturas:
//    * {
//         "codigo_asignatura": "EDAR004",
//         "ago_sept_oct": "83",
//         "nov_dic_ene": "0",
//         "feb_mar": "0",
//         "abr_may_jun": "0",
//         "cf": 21
//       }
//    */

//   /**
//    * Formula:
//     idx_academico = (sum_cf_asignaturas)/ (asignaturas_length)
//    */

//   if (asignaturas) {
//     //Calculamos index con asignaturas

//     return promedio_academico;
//   } else {
//     // Return 0 si asignaturas es null o []
//     return 0;
//   }
// };

export default getIdxAcademico;
