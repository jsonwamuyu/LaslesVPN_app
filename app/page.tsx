import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from './conponents/Navbar'
import Hero from './conponents/Hero'
import Burnner from './conponents/Burnner'
import Features from './conponents/Features';
import Plan from './conponents/Plan';
import Customers from './conponents/Customers'
import Global from './conponents/Global';
import Suscribe from './conponents/Subscribe';
import Footer from './conponents/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Burnner />
      <Features />
      <Plan />
      <Global />
      <Customers />
      <Suscribe />
      <Footer />
    </>
  )
}
















// // Readonly optional type 

// type Customer = {
//   readonly _id : string;
//   name : string;
//   hasPuchased : boolean;
//   // creditCard : number;
//   // can make credit card optional by adding ?
//     creditCard? : number;
// }

// const custo1:Customer = {
//   _id : "23232323",
//   name :"John doe",
//   hasPuchased: true,
//   creditCard : 454545454545,
// }

// console.log(custo1._id = "334343")


// const custo2 : Customer ={
//   _id:'22222',
//   name:'Jane doe',
//   hasPuchased : false,
// }

// // Type aliases

// type Person = {
//   fullNames: string;
//   idNumber: number;
//   age: number;
//   isPaid: boolean;

// }

// function employeeDetails(details:Person){
//   return `Hello ${details.fullNames} idNumber: ${details.idNumber}`
// }

// console.log(employeeDetails({fullNames:"john doe", idNumber:21212133, age:21, isPaid:true}));



// const heros = [22, 'Grut', 'Captain America', 'Spiderman'];

// heros.map((item) =>{
//   return `Hello ${item}`;
// })


// heros.map((i, index) =>(
//   <p key={i}>{i}</p>
// ))

// function addTwo(num: number){
//   return num + 2;
// }

// console.log(addTwo(23));
// console.log(addTwo(6))

// function toUpper(val: string){
//   return val.toUpperCase();
// }


// function signUpUser(id_number:number, name:string, age: number,email:string){

// }
// const mike = signUpUser(24344,"Mike mundu", 78,"mk@gmail.com");


// const multiply = (num: number):number =>{
//   // return "hello World"
//   return num * num;
// }
// console.log(multiply(34));

// toUpper("John Doe");
// toUpper("Hello world")

// interface User{
//   id_number:number,
//   name:string,
//   age:number,
//   email:string;
// }

// let user = {name:'john doe',age: 56, gender:'male', email:'johndoe@gmail.com'};

// console.log(user)
// console.log(user.name);
// console.log(user.email.toLocaleLowerCase());


// let firstname:string = "Alice Mwangi";

// console.log(firstname);

// function getAge():number{
//   return 45;
// }

// const schools = ['Aliance', 'Kenya high', 'Utumishi']

// schools.forEach(
//   function(s){
//     console.log(s.toUpperCase())
//   }
// )

// user.name.trim()

// let sentence = "This is realy awesome."

// console.log(sentence.trim())

// function printName(obj:{first:string; second?:string}){

// }

// export {}