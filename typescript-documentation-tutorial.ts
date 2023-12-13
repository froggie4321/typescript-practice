function greet(person: string, date: Date):void {
    console.log(`Hello ${person}, today is ${date}!`);
  }
 
function main():void{
    greet("Bob",new Date());
}
main();
greet("Bob",new Date());
