async function handleNameInput(event) {
    const name = event.target.value;
  //  const nameElement = document.getElementById('name');

    alert("The animal name is "+ name)

}
async function handleSubmit(event){
    event.preventDefault()
    const nameElement = document.getElementById('name')

    if (!nameElement.value){
        // alert ("The name is required")
        nameElement.classList.add('is-invalid')
        //$('#name').addClass('is-invalid')
        //return;

    }

    const breedInput = document.getElementById('breed')
    if (!breedInput.value){

        // alert("Please provide the breed")
        breedInput.classList.add('is-invalid')
    }


    const age = document.getElementById('age').value
    if (!age){
        document.getElementById('age').classList.add('is-invalid')
       // alert("Age is nothing but a number")
        //return;
    }

    const parentIput=  document.getElementById('parent')
    if(!parentIput.value){
        alert ("Please provide parent name")
        return;
    }
    try {
        const data = await fetch("http://localhost:5600/animals", 
        {
            method: "POST", 
            body:JSON.stringify({
                name: nameElement.value,
                breed: breedInput.value,
                age,

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const animal = await data.json()

        alert(`Created succesfully ${animal}`)

    } catch (error) {
        
    }
}