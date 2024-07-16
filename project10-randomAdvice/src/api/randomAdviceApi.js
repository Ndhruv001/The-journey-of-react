import axios from 'axios';

const url = "https://api.adviceslip.com/advice";

export async function  generateRandomAdvice (){
    try {
       const response = await axios.get(url);
       return response.data.slip.advice;
    } catch (error) {
        console.log('Error while generating advice ', error);

    }
}

