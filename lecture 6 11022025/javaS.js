// closures-(MDN site)
// what is closure
// A closure is a function that has access to its own scope, the scope of its outer functions,

// set timeout vs set setInterval(are asynchronus function)
// asynchronous vs a call back function
// setinterval
// ==================================x====================x===============x===============x===================
// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3);
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(5);
// },5000)
// console.log(6);
// ----------------------------------x---------------x------------x--------------x------------------------------


// for(let i=1;i<=6;i++){
   
    
//      setTimeout(()=>{
//          console.log(i);
//      },1000); 
//  }
// ===================x===============x==============x===============x=================
// // setTimeout goes into que(box)
// for(var i=1;i<=6;i++){
   
//    function x(i){
//     setTimeout(()=>{
//         console.log(i);
//     });
//    } 
//    x(i);
// }

// function x(i){
//         setTimeout(()=>{
//             console.log(i);
//         },1000);
        
//        } 
       
//        for(var i=1;i<=6;i++){
//         console.log(x(i));
//        }
// ===============x===============x=============x============x================
// function x(){
//     var a=7;

//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);

// z();
// ===================x==============x===========x=============x================
// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();
// ===================x==============x===========x=============x================
// function z(){
//     var count=0;
//     function inc(){
//         count++;
//         console.log(count);
//     }
//     return inc;
// }
// var x=z();
// x();
// x();
// x();
// ===================x==============x===========x=============x================
// HOF higher order function
//this key word