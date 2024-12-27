'use strict'

console.log(this)

function fnvalue(){
    console.log(this) 
}
fnvalue()

let obj1={
    age:"24",
    name: "venki",
    fn:function(){
        console.log(this)
    }

}
obj1.fn()

let obj2 = {
    age: "24",
    name: "vikas",
    fn1: function () {
        const fn2 = () => {
            console.log(this); // Refers to obj2
        };
        fn2(); // Call fn2
    }
};

obj2.fn1(); // Logs obj