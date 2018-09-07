document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
    //getting number for jokes
    const number = document.querySelector('input[type=number]').value;

    if(isNaN(number) || number === 0 || number ===''){
        alert('enter the value First ');
        document.querySelector('input[type=number]').value = '';

    }else{
        //instantiating xhr objext 
    const xhr = new XMLHttpRequest();

    xhr.open('get',`http://api.icndb.com/jokes/random/${number}`,true);
    
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            //console.log(response);

            let output;
            if(response.type ==='success'){
                response.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`
                });

            }else{
                output += `<li> Something went wrong </li>`;
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();


    e.preventDefault();
    }
    
}