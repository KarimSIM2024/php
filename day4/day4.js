


// var arr= [10,11,12,13,14,15,16,17,18,19]
// var arr2= [1,2,3,4,5,6,7,8,9]
  
//  //arr.pop()
//  //arr.push(20)

//  //arr.shift()
//  //arr.unshift(9)

//   // 2=index  0=number of elements to remove  
//   //arr.splice(2,0,100,200)

//   //2=index 1=number of elements to remove
//   //arr.splice(2,2)

//   var newArr= arr2.concat(arr)
 


// for(var i=0; i<newArr.length; i++){
//     console.log(newArr[i])
// }


//var d1 = new Date(2026,10,20,10,30,20,6)

//var d = new Date()

//   d.setFullYear(2026)
//   d.setMonth(10)
//   d.setDate(20)
//   d.setHours(10)
//   d.setMinutes(30)
//   d.setSeconds(20)
//   d.setMilliseconds(6)

// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDate())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())

// console.log(d.toLocaleString())
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleTimeString())

// console.log(Math.round(4.8))
// console.log(Math.round(4.4))

//console.log(Math.pow(3,3))

//console.log(Math.sqrt(4))

//console.log(Math.abs(-4))

//console.log(Math.ceil(4.1))
//console.log(Math.floor(4.9))

// console.log(Math.min(4,5,6,7,8,9));
// console.log(Math.max(4,5,6,7,8,9));

// 0-10 
// 0-10 

//console.log(Math.floor(Math.random()*10))

//exception handling

// try {   
//     console.log("Hello World")
//     //throw new Error("This is an error")
//     console.log("Hello World 2")
// }
// catch (e) {
//     console.log("Error: " + e.message)
// }
// finally {
//     console.log("Finally block executed")
// }


/// regular expressions
// patterns modifiers

//i = /i  // case insensitive

//var ex = /pattern/modifiers

// var str = "Visit W3Schools";
// var patt1 = /w3schools/i;
// var result = str.match(patt1);
// console.log(result);


// var str = "Is this all there is?";
// var patt1 = /is/gi;
// var result = str.match(patt1);
// console.log(result);


// var str = "\nIs th\nis it? is";
// var patt1 = /^is/m;
// var result = str.match(patt1);
// console.log(result)


// var reg=/i.*I/ ;
// var t= reg.test("iTI")
// console.log(t)

// var reg=/j.*t/i;
// var str="Jscript is the same of javascript";
// var res= reg.exec(str);
// console.log(res)


// var str = "Is this is it?";
// var patt1 = /TH/gi;
// var result = str.match(patt1);
// console.log(result)

// var str = "Is this is it?";
// var patt1 = /is/gi;
// var result = str.search(patt1);
// console.log(result)


// var str = "Is this all there is?";
// var patt1 = /[h]/g;
// var result = str.match(patt1);
// console.log(result)

// var str = "123456789";
// var patt1 = /[0-9]/g;
// var patt1 = /[a-z]/g;
// var result = str.match(patt1);
// console.log(result)

// var str = "re, green, red, green, gren, gr, blue, yellow";
// var patt1 = /(red|green)/g;
// var result = str.match(patt1);
// console.log(result)


// var str = "Give 100%!";
// var patt1 = /\d/g;
// var result = str.match(patt1);
// console.log(result)


// var str = "Is this all there is?";
// var patt1 = /\s/g;
// var result = str.match(patt1);
// console.log(result)


// var str = "HELLO, LOOK AT YOU!";
// var patt1 = /\bLO/;
// var result = str.search(patt1);
// console.log(result);



// var str = "Hellooo World! Hello W3Schools!";
// var patt1 = /o+/g;
// var result = str.match(patt1);
// console.log(result) 

// var str = "Hellooo World! Hello W3Schools!";
// var patt1 = /lo*/g;
// var result = str.match(patt1)
// console.log(result) // l,looo,l,l,lo,l


// var str = "1, 100 or 1000?";
// var patt1 = /10?/g;
// var result = str.match(patt1);
// console.log(result) // 1,10,10