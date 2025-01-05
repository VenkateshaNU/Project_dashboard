
function userdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('userid:1',))
    })
}

function userdata2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject('userid:2',))
    })
}

Promise.allSettled([userdata(),userdata2()])
.then((result)=>{
    console.log("userdata",result[1])
    console.log("userdata2",result[0])
}).catch((err)=>{
    console.log(err)
})