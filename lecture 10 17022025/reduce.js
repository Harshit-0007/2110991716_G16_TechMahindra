// // Reduce

// const users=[
//     {firstName:"pritush",lastName:"ray",age:25},
//     {firstName:"ayush",lastName:"jane",age:22},
//     {firstName:"Harshit",lastName:"john",age:22},
//     {firstName:"ritish",lastName:"jane",age:22},
//     {firstName:"Chapta",lastName:"john",age:26},
// ]

// // find people of same age
// const ans= users.filter((user)=> { 
//     return user.age==22
// })

// console.log(ans);

// // let newage=users.reduce

// const users = [
//     {firstname:"Pratiyush",lastName:"Ray",age:25},
//     {firstname:"Piyush",lastName:"Saini",age:22},
//     {firstname:"Ayush",lastName:"Jawa",age:22},
//     {firstname:"Daksh",lastName:"Raj",age:22},
//     {firstname:"Pratiyush",lastName:"Kumar",age:29},
// ]

// let newD = users.filter((user)=>{
//     return user.age===22;
// });

// console.log(newD);

// -------------------x------------------x------------------x-------------x---------------------
// PROMISESSS

// dhaba(()=>{
//     table(()=>{
//         menu(()=>{
//             price(()=>{
//                 starter(()=>{
//                     main(()=>{
//                         desert(()=>{
//                             bill(()=>{
//                                 left(()=>{
//                                     console.log("all done");
//                                     });
//                             });
//                             });
//                     });
//                 });
//             });
//         });
//     });
// });
// pyramidal loop solution promises
// const promise1 = new Promise((resolve, reject) => {
// }

// const cart=["shoes","watches","bags","glasses","shirts"];
// function createOrder(cart){
//     const myPromise = new Promise(function(resolve,reject){
//         if(cart.length>0){
//             console.log("Order Created Succesfully");
//             resolve("12345");
//         }
//         else{
//             const err=new Error("ORDER FAILED")
//             reject(err.message);
//         }
//     });
//     return myPromise;
// }
// function orderPayment(orderId){
//     console.log("order Payment Successfull",orderId);
// }
// function orderSummary(orderId){
//     console.log("Order Summary Created",orderId);

// }
// function updateWallet(){
//     console.log("Wallest Updated");
// }

// // console.log(createOrder(cart));

// createOrder(cart)
// .then(function (orderId){
//     return orderPayment(orderId);
// })
// .then(function (orderId){
//     return orderSummary(orderId);

// })
// .then(function (orderId){
//     return updateWallet();
// })

// // createOrder(cart)
// // .then(function orderPayment(orderId){
// //     console.log("Order Paymenyt Successfull"),orderId;
// // })
// // .then(function orderSummary(orderId){
// //     console.log("Order Summary",orderId);
// // })

// // createOrder(cart)
// // .then(orderPayment(orderId))
// // .then(orderSummary(orderId))
// // .then(updateWallet)
// -------------------x------------------x------------------x-------------x---------------------
// PROMISE APIs
Promise.all()
Promise.allSettled()
Promise.any()
Promise.race()
