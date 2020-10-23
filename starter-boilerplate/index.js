// taskqueue [4, 5, 6, 1, 2, 3]
// taskqueue [4, 5, 3, 1, 2, 6]
// taskqueue [4, 3, 1, 5, 2, 6]
// taskqueue [4, 5, 3, 6, 2, 1]
// taskqueue [4, 5, 1, 2, 3, 6]


// callstack [4, 5, 1, 2, 6, 3]
// taskqueue [2]

// timers

1 - 1000
2 - 1000
6 - 1000
1 - 2000
1 - 3000

const intervalId = setInterval(function setInt() {
    console.log('setInterval'); // 1
}, 3000);

setTimeout(function setTim1() {
    console.log('setTimeout 1'); // 2

    setTimeout(function setTim2() {
        console.log('setTimeout 2'); // 3
    }, 0);
}, 3000);

setTimeout(function setTim3() {
    console.log('setTimeout 3'); // 4

    setTimeout(function setTim4() {
        console.log('setTimeout 4'); // 5

        setTimeout(function setTim5() {
            console.log('setTimeout 5'); // 6
        }, 3000);
    }, 0);
}, 0);

console.log("hello")