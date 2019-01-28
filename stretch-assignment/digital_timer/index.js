// class Timer{
//   constructor(atr){
//     this.start = atr.start * 1000;
//     this.end = atr.end * 1000;
//     this.current = atr.start;
//     this.countSpeed = atr.countSpeed;
//   }

//   countup(){
//     console.log(this.current);
//     console.log(this.end);
//     if(this.end > this.current){
//       this.current = this.current + this.countSpeed;
//     }
//     else{
//       clearInterval(counter)
//     }
//     console.log(this.current);
//     //this.updateDom(this.current);
//   }

//   startCount(){
//     this.interval;
//   }

//   updateDom(){

//   }
// }

// const time = new Timer({
//   start: 0, // In Seconds
//   end: 10, // In Seconds
//   updateTime: 10, // In Milliseconds
//   countSpeed: 10, // In Milliseconds
// });
// console.log(time);

// time.countup();

// // const countup = () => {
// //   console.log("yes");
// // }
const stopTime = 10000;
const counter = setInterval(countup(), 1);

const countup = () => {
  
}