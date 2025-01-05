const p=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve('Promise is resolved')
    },2000) 
   
})

function Fetchdata(){

    p.then((res)=>console.log(res))
}

// Fetchdata()

async function datahandeler(){
    const responce=await p
    console.log(responce)
}

datahandeler()