const listPhotos= async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const photos= await response.json();
    let valores=[];
    photos.forEach(val => {
        valores.push(val.url)
        
    });
     
    

    for (let i = 0; i < 6; i++) {
        document.getElementById("img"+(i+1)).src=valores[i];
    }
}
window.addEventListener("load", function(){
    listPhotos();  
})