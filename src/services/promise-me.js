

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */

export async function grabQuotes() {
    console.log('first')
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    console.log('second')

    const result = await res.json();
    console.log('third')
    return result;
    
}

export function getQuotes(){
    return 1;
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */

export function thenGetQuotes(){
    console.log('before the fetch');
    return fetch('https://futuramaapi.herokuapp.com/api/quotes/1').then((res)=> res.json()
    )
    .then((result)=> ({quote: result[0], totalResults: result.length}))
    // .then(({quote})=> quote); single quote
    .then(({quote})=> quote) //single quote
    .then(()=> console.log('.then chain complete!'))
    .catch((error)=> console.error('ohh no it broke'))
    .finally(()=>console.log('everythings kosher ')); //runs code after try catch(weather or not it passes, used for cleanup like clearing cache)

    // console.log('after the function'); //dont know why it wont work
    // return result;

}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */

export async function asyncTryGetQuotes(){
 try{
    console.log('first')
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    console.log('second')

    const result = await res.json();
    console.log('third')
    return result;
 } catch {
     console.log(error); // makes error message inside try catch 
 } finally {
     console.log('all good!');
 }
}
/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

export function thenAsyncGetQuotes() {
    return asyncTryGetQuotes().then(()=>
    console.log('i forgot to make new code for each exercise :('))
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

