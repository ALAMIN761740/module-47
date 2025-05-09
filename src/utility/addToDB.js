const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookDATA = JSON.parse(storedBookSTR);
        return storedBookDATA;
    } else {
        return [];
    }
}



const addToStoreDB = (id)=>{

    const storedBookDATA =getStoredBook();

    if (storedBookDATA.includes(id)){
        alert ("ভাই, এই আইডি আগেই আছে!")
    }
    else{
        storedBookDATA.push (id);
        const data =JSON.stringify(storedBookDATA);
        localStorage.setItem("readList",data)

    }

}

export {addToStoreDB, getStoredBook};