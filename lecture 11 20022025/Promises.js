// PROMISE 

const { error } = require("radius");

// const myPromiseFromnetflix = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("fetched from Netflix");
//     }, 3000);
// })
// const myPromiseFromGithub = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("fetched from gitHub");
//     }, 2000);
// })
// const myPromiseFromHotstar = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("fetched from Hotstar");
//         // reject("error in twitter");
//     }, 1000);
// })
// const myPromiseFromTwitter = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("fetched from twitter");
//         reject("error in twitter")
//     }, 4000);
// })
// -------------------------x------------------x----------------x-----------------x-----------------
// PROMISE ALL 

// const datafromAll=Promise.all([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);
// // // console.log(datafromAll)

// // Correct way to log the resolved values
// datafromAll.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });
// -------------------------x------------------x----------------x-----------------x-----------------
// PROMISE RACE 
// const datafromRace=Promise.race([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);
// // console.log(datafromAll);

// // Correct way to log the resolved values
// datafromRace.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });
// ------------------------------------x------------------x----------------x-------------x------------
// PROMISE ALL SETTLE
// const datafromAllSettle=Promise.allSettled([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);
// // console.log(datafromAll);

// // Correct way to log the resolved values
// datafromAllSettle.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });
// ------------------------------------x------------------x----------------x-------------x------------
// PROMISE ANY 
// const datafromAny=Promise.any([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);
// // console.log(datafromAll);

// // Correct way to log the resolved values
// datafromAny.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });
// ---------------------------------ASync-Await-----------------------------------------------
// console.log("hello class");
// function techMahindra(){
//     console.log("Ayush");
// }

// console.log("class end");
// techMahindra();
// const ayushPromise= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // resolve("ayush gay");
//         reject("ayush lesbian");
//     },2000)
// })
// ayushPromise.then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })/

// async function techDirectFunction(){
//     console.log("this is hello techMahindra");
// }
// const techData= techDirectFunction();

// techData.then((res)=>{
//     return res;
// })

// const projectSubmissionByAyush= new Promise (function(res,rej){
//     setTimeout(()=>{
//         res("ayush subbmited file");
//     },4000);
// });

// async function projectEvaluation(){
//     const projectFile= await projectSubmissionByAyush;
//     console.log(projectFile);
// }
// projectEvaluation();

// console.log("Class start");
// const projectSubmissionByAyush= new Promise (function(res,rej){
//     setTimeout(()=>{
//         res("ayush file writting");
//     },10000);
//     console.log("attandeance marked");
//     console.log("file checked");
//     console.log("class end");
//     console.log("console(class end)");
// });

// async function projectEvaluation(){
//     const projectFile= await projectSubmissionByAyush;
//     console.log(projectFile);
// }

// projectEvaluation();
// // OUTPUT->
// // Class start
// // attandeance marked
// // file checked
// // class end
// // console(class end)
// // ayush file writting

// -------------------Fetch API--------------------
async function fetchApiData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);

    }
    catch(err){
        console.log(err);
    }
}
fetchApiData();