const url='https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.NASA_API_KEY;
const dateInput = document.querySelector("input[type='date']");
const currentDate = new Date().toISOString().slice(0,10);  

let newDate = "&date="+dateInput.value+"&";

const fetchNASAData = async () => {
    try{
        const response = await fetch (`${url}${api_key}${newDate}`)
        const data = await response.json()
        console.log('NASA APOD data', data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

const displayData = data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('date').textContent = data.date;
    document.getElementById('picture').src = data.hdurl;
    document.getElementById('explanation').textContent = data.explanation;
    
    dateInput.max=currentDate;
    dateInput.min="1995-06-16"; 
    
    if (data.hasOwnProperty("copyright")){
        copyright.innerHTML=data.copyright;
    } else{
        copyright.innerHTML=""
    }

}

fetchNASAData()

dateInput.addEventListener('input', (e)=>{
    e.preventDefault();
    fetchNASAData();
})

fetchNASAData().onload
