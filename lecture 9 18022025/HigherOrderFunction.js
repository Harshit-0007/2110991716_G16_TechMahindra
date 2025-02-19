// function x(){
//     console.log("i am x");
// }
// // call back Function
// function y(args){
//     console.log("i am y");
//     args();
// }
// y(x);
// // HOF(higher order function)

// -------------------x------------x----------------x-----------------x-----------------------------
// Higher Order Function


// function paisaDouble(data){
//     for(i=0;i<=data.length;i++){
//         data[i]=data[i]*2;
        

//     }
//     return data;
   
// }
// paisaDouble(data);
// data=[2,4,6,8,10];

// const calculateDoubleData= function (data){
//     const output=[];
    
//     for(i=0;i<data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;

// }
// const calculatehalf= function (data){
//     const output=[];
    
//     for(i=0;i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;

// }

// const calculateadd10= function (data){
//     const output=[];
    
//     for(i=0;i<data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;

// }
// console.log(calculateadd10(data));
// console.log(calculatehalf(data));
// console.log(calculateDoubleData(data));
// ---------------------x-----------------x-------------------x----------------x-------------------
// data=[100,200,500];
// const twentyPercentage= function (data){
//      x=data;
//     const output=[];
//     for(i=0;i<data.length;i++){
//         output.push(data[i]*0.2);
        
//     }
//     return output;
    
// }
// console.log(twentyPercentage(data));
// ------------------------x-------------x------------x------------------------x--------------

// function addTen(data){
//     let newData = data.map((num)=>{
//         return num+10;
//     })
//     console.log(newData);
// }
// function DoubleData(data){
//     let newData = data.map((num)=>{
//         return num*2;
//     })
//     console.log(newData);
// }
// function HalfData(data){
//     let newData = data.map((num)=>{
//         return num/2;
//     })
//     console.log(newData);
// }

// function x(data,callback){
//     callback(data);
// }
// const data = [1,2,3,4,5];
// x(data,addTen);
// x(data,DoubleData);
// x(data,HalfData);
// -----------------------x----------------x---------------x-----------------x-----------------
// polyfill of Map Feature of JS 
// by using prototype

// Array.prototype.mapp=functio(logic){
//     var output=[];
//     for(var i=0;i<this.length;i++){
//         output.push(logic(this[i]));
// }return output;
// }
// console.log(data.mapp(DoubleDatadata));
// Double data missing
// ------------------x----------------x-----------------x--------------x-----------------------
// // fn diameter
// // find area 
// // find circuference
// const data=[2,9,16,42,7];
// function diameter(data){
//     let newData = data.map((num)=>{
//         num= num*2;//return num*2;
//         return num;//return num*2;
//     })
//     console.log(newData);    
// }
// function area(data){
//     let newData=data.map((num)=>{
//         return 3.14*(num**2);
//     })
//     console.log(newData);
// }
// function circuference(data){
//     let newData=data.map((num)=>{
//         return 3.14*2*num;
//     })
//     console.log(newData);
// }
// function x(data,callback){
//     callback(data);
// }
// x(data,diameter);
// x(data,area);
// x(data,circuference);
// diameter(data);
// ------------------x-------------x-----------------x----------------x-----------------
// FILTER 
// const data=[2,5,4,6,9];
// function odd(data){
//     let oddnumber=data.filter((num)=>{
//         if(num%2==0){
//             return num;
//         }
//     });
//     console.log(oddnumber);
// }
// odd(data);
// ------------------x-------------x-----------------x----------------x----------------
const users=[
    {firstName:"pritush",lastName:"ray",age:25},
    {firstName:"ayush",lastName:"jane",age:22},
    {firstName:"Harshit",lastName:"john",age:22},
    {firstName:"ritish",lastName:"jane",age:22},
    {firstName:"Chapta",lastName:"john",age:26},
]

// let combine first and last name
const fullname=users.map((num)=>{
     return num.firstName+" "+num.lastName;
});
console.log(fullname);
// let filter user who is 25 years old or bigger
const twentyfive=users.filter((num)=>{
    // if(num.age<=25){
    //     return num;
    // }
    return num.age>=25;
});
console.log(twentyfive);


