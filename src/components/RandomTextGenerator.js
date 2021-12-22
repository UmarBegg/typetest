function RandomTextGenerator() {

    fetch('https://random-word-api.herokuapp.com/all')
    .then(response => response.json())
    .then(data => console.log(data));
  

    return (
        <div></div>
    )
}

export default RandomTextGenerator
