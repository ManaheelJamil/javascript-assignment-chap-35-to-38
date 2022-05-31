// CHAPTER NO 35 TO 38:
// Question # 1:
// var date;
// function date() {
//     document.write(new Date);
// }
// date();

// Question # 2:
// function greetUser() {
// var firstName = prompt("What is your first Name?");
// var lastName = prompt("What is your last name?");
// alert("Welcome!!" + " " + firstName +"  "+ lastName);
// }
// greetUser();

// Question # 3:
// function number() {
// var sumOne = Number(prompt("what;s the first you want to add"));
// var sumSec = Number(prompt("Enter second number"));
// alert(sumOne + sumSec);
// }
// number();

// // Question # 4:
// function summition() {
// var num1 = Number(prompt("Enter first number"));
// var num2 = Number(prompt("Enter second number"));
// var operation = prompt("Enter a binary operation");
// if (operation === "+") {
//     alert(num1 + num2);

// }
// else if (operation === "-") {
//     alert(num1 - num2);

// }
// else if (operation === "*") {
//     alert(num1 * num2);
   
// }
// else if (operation === "/") {
//     alert(num1 / num2);
    
// }
// else if (operation === "%") {
//     alert(num1 % num2);
    
// }
// }
// summition();

// Question # 5:
// function square(num){
//     return num * num;
//   }


// Question # 6:
// function factorial() {
//     var computeFac = prompt("Enter a integar");
//     if (computeFac === "0" && computeFac === "1") {
//         alert("The Factorial of"+" "+computeFac+ " "+"is"+ "1");

//     }
//     var m = "1";
//     for (var i = 0; i<=m ; i++) {
//         m * i;
//     }
//     alert("The Factorial of"+" "+computeFac+ " "+"is"+ m);
// }
// factorial();

// Question # 7:
// function counting() {
//    var firstNum = prompt("Which first number you start counting?");
//    var secNum = prompt("Which second number you end counting?");
//    for (var i = 0; i<=firstNum; i++) {
//        if (firstNum[i] === "0"){
//        document.write(i +"<br/>")
//        }
//    }
// }
//    counting();

// Question # 8:
// .................

// Question # 9:(i)
// function area() {
//     var width = Number(prompt("Write the width"));
//     var height = Number(prompt("write the height"));
//     var area = width * height;
//     alert("The Area of a Triangle is:" + "  "  +area);
// }
// area();
// Question # 9: (ii)
// function area () {
//     var width = "5";
//     var height = "9";
//     var area  = width*height;
//     alert("The Area of a Triangle is:" + "  "  +area);
// }
// area();

// Question # 10:
// .............

// Question # 11:
// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));
//  return sentence;
//  }
//  titleCase("the quick brown fox");

// Question # 12:
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// Question # 13:
// function newNum(str,letter) { 
//     var find = 0;
//     for (var i=0; i<str.length ; i++) { 
//           if(str[i] === letter) {
//               find +=1;
//           }
//     }
//     return find
// }
// var str = 'JSResources.com';
// var letter = '0';
// var result = newNum(str,letter);
// document.write('The occurance of o in the string is:'+ result );

// Question # 14;
// function calcCircumference(value){
//     var circumference=2*3.141*value;
//     return circumference
// }
//  function calcArea(value){
//      var area=3.141*(value*value);
//      return area
//  }
// var radius=+prompt('Enter radius of circle ');
// var circumference=calcCircumference(radius);
// var area=calcArea(radius);
// document.write('The Circumference of circle is '+circumference+'<br>')
// document.write('The Area of circle is '+area+'<br>')
  