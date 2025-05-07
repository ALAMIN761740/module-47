const getStoredBook =()=>{

    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR){
        storedBookDATA =JSON.parse(storedBookSTR);
        return storedBookDATA;
    }
    else{
        return[];
    }

}


const addToStoreDB = ()=>{

    const storedBookDATA =getStoredBook();

    if (storedBookDATA.includes(id)){
        alert ("bhai ei id already exist")
    }

}