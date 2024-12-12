/*
B1: Write a program to check if an integer n entered from the keyboard is even or odd. If it is even, print "Even number".
If it is odd, print "Odd number". For example:
Given n = 10, the output should be: "Even number". Given n = 151, the output should be: "Odd number".
-> % operator is used to find the remainder of the division of two numbers. If the remainder is 0, the number is even.
// 12 : 2 được 6 dư không
// 35 : 9 được 3 dư 8
// console.log(35 % 9); // 8
// Chẵn lẻ: 2 4 6 8 10 12 14 16 18 20 (số chia hết cho 2 hay còn gọi là chia 2 dư 0)
// đúng r, 1 số thôi là okela, nhập đi em, k fake số, prompt đấy
let number = parseInt(prompt("Input a number: "));
if (number % 2 == 0) {
  console.log("Even number");
} else {
  console.log("odd number");
}
  
B2: Write a code snippet that accepts the salaries of two people. Your task is to find out who has the higher salary.
Output: If the first person has the higher salary, the program should print "person1" on the command line. If the second person has the higher salary, the program should print "person2".
NGười thứ 2 đâu em, nhập đi, đừng fake số, prompt đấy =)) ừm, nhập đi em, đừng fake số, prompt đấy =)) hihi
let salary1 = parseInt(prompt("Input a salary of person1: "));

let salary2 = parseInt(prompt("Input a salary of person2: "));

if (salary1 > salary2) {
  console.log("higher");
} else {
  console.log("lower");
}
*/
// && || ! (and, or, not)
// Giả sử anh cao 1m7 em cao 1m3 -> anh và(&&) em đều cao hơn 1m5
// Giả sử anh cao 1m7 em cao 1m3 -> anh hoặc(||) em đều cao hơn 1m5

// Bài tập: Nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có phải là 3 cạnh của 1 tam giác không? Nếu đúng, in ra "Yes". Nếu sai, in ra "No".
// Điều kiện để 3 số a, b, c là 3 cạnh của 1 tam giác: a + b > c, a + c > b, b + c > a và a, b, c > 0

let a = parseInt(prompt("Enter a number for the triangle side "));
let b = parseInt(prompt("Enter a number for the triangle side2 "));
let c = parseInt(prompt("Enter a number for the triangle base "));

if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
  console.log("Yes");
} else {
  console.log("No");
}
// if else if else
// for
// Mình học lúc 8h tối
