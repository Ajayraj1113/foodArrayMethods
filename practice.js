// usecase of Interval

function greet(){

    let interval = setInterval(()=> {
        console.log("hello")
    },2000)

    console.log("hiiiiiiiiiiiiiiiiiiiiii");

    
    setTimeout(() => {
        clearInterval(interval)
    },10000)

    // setTimeout(clearInterval(interval), 10000)

}

greet()
