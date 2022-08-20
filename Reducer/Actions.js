export let UserSelecOption=(Qu,In)=>
{
    return{
        type:"Selected",
        payload:{
            Qu,
            In
        }
    }
}

export let Inc=()=>
{
    return{
        type:"Inc"
    }
}
export let Dec=()=>
{
    return{
        type:"Dec"
    }
}
export let ShowResult=()=>
{
    return{
        type:"ShowResult"
    }
}