// TODO: 1. Arrayda m herfi ile biten sozleri cixardin
// let arr = ['salam' , 'arif' , 'kelam', 'yapim', 'heheh']
// function endOfM(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].charAt(arr[i].length - 1) == 'm') {
//         console.log(arr[i])
//       }
//     }
// }
// endOfM(arr)


// TODO: 2. Arrayda sozde butun herflerin boyuk olub olmadigina bax
// let arr = ['Salam', 'HELLO', 'alma' , 'aRmud', 'HOW U DOIN']
// function toUpper(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i].toUpperCase()) {
//             console.log(`butun herfleri boyukdur ${arr[i]}`)
//         }
//     }
// }
// toUpper(arr)

// TODO: 3. Array icersine 0-9 kimi reqemler var, hansisa bir reqem catmir tap
// let arr = ['0','1','2','3','4','6','7','8','9']
// function emptyNum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].trim() != i) {
//             return console.log(`bosh olan eded : ${i}`)
//        }
//     }
// }
// emptyNum(arr)



// TODO: 4. Arraydaki guzgu ededleri tapin
// let arr = ['121', '123', '848', '435', '989', '153', '12421', '233232']
// function mirrorNum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let newMirrorNum = "",
//         word = arr[i];
//         for (let j = word.length -1 ; j>=0 ;j--) {
//             newMirrorNum += word[j] 
//         }
//         if (newMirrorNum == arr[i]) {
//             console.log(newMirrorNum);
//         }
//     }
// }

// mirrorNum(arr);

// TODO: 5.Istifadeci 0 daxil edene qeder ededleri arrayda goster

let arr = [];
let i =0;
function zeroNum(arr) {
    while (true) {

        arr[i] = +prompt("eded daxl edi");

        if (arr[i] == 0) {
           return console.log(arr);
        }
        i++;
    }
}
zeroNum(arr)

// TODO: 6. Arraydaki ededlerin cemi cutdurse --true, tekdirse --false
// let arr = [1,23,3,4,5,6,73,2]

// function sumOfArr() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//          sum = sum + arr[i]
//     }
//     console.log(sum)

//     if (sum % 2 == 0) {
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// sumOfArr()















