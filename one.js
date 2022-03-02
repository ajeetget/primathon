//========= Pattern 1 =================
// for(let i = 0; i < 5; i++){
//     console.log('* * * * * ');
// }

//========= Pattern 2 ==============
// for(let i = 1; i < 6; i++){
//     console.log(i, i, i, i, i);
//     }

//========= Pattern 3 ==============
// const i = 1;
// for(let j = 1; j < 6; j++){
//     console.log(i, i+1, i+2, i+3, i+4);
//     }

//========= Pattern 4 ==============
// for(let j = 0; j < 5; j++){
//     const x = String.fromCharCode(65+j);
//     console.log(x, x , x , x, x);
//     }

//========= Pattern 5 ==============
// let k = 0;
// for(let j = 0; j < 5; j++){   
//     console.log(String.fromCharCode(65+k), String.fromCharCode(65+(k+1)) , String.fromCharCode(65+(k+2)) , String.fromCharCode(65+(k+3)), String.fromCharCode(65+(k+4)));
//     } 
    
//========= Pattern 7 ==============

// for(let j = 4; j >= 0 ; j--){  
//      let x = String.fromCharCode(65+j)
//         console.log(x, x , x, x, x);
//     }   
    
    
 //========= Pattern 8 ==============

// for(let j = 4; j >= 0 ; j--){  
//     let x = String.fromCharCode(65+j)
//        console.log(x, x , x, x, x);
//    }  
   
 //========= Pattern 9 ==============
// let i = 4
//  for(let j = 0; j < 5 ; j++){  
//        console.log( String.fromCharCode(65 + i),  String.fromCharCode(65+(i-1)) ,  String.fromCharCode(65+(i-2)),  String.fromCharCode(65+(i-3)),  String.fromCharCode(65+(i-4)));
//    }  
   
 //========= Pattern 10 ==============

//  for(let i = 1; i < 6 ; i++){ 
//     let x = ""; 
//     for(let j = 0; j < i ; j++){
//         x += "* ";
//    } 
//    console.log(x) ;
// } 

 //========= Pattern 11 ==============

//  for(let i = 1; i < 6 ; i++){ 
//     let x = ""; 
//     for(let j = 0; j < i ; j++){
//         x += i +' ';
//    } 
//    console.log(x) ;
// } 

//========= Pattern 12 ==============

// for(let i = 1; i < 6 ; i++){ 
//     let x = ""; 
//     for(let j = 1; j <= i ; j++){
//         x += j +' ';
//    } 
//    console.log(x) ;
// } 

//========= Pattern 13 ==============

// for(let i = 0; i < 5 ; i++){ 
//     let x = ""; 
//     for(let j = 0; j <= i ; j++){
//             x += String.fromCharCode(65 + i) + ' ';
//     } 
//     console.log(x) ;
// } 

//========= Pattern 14 ==============

// for(let i = 0; i < 5 ; i++){ 
//     let x = ""; 
//     for(let j = 0; j <= i ; j++){
//             x += String.fromCharCode(65 + j) + ' ';
//     } 
//     console.log(x) ;
// } 

//========= Pattern 15 ==============

// for(let i = 5; i >= 0 ; i--){ 
//     let x = ""; 
//     for(let j = 0; j < i ; j++){
//             x += '* ';
//     } 
//     console.log(x) ;
// } 

//========= Pattern 19 ==============

let n = 5;
for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n - i; j++) { string += " "; }
    for(let k = 1; k <= i; k++){ string += i;}  
    console.log(string);
}