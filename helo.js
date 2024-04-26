let movies = [
    {
    name:"NARNIA",
    poster:"NARNIA.jpg",
    rating:6.9,
       description: "A fantasy adventure where siblings discover a magical world; actors: Georgie Henley, Skandar Keynes, William Moseley, Anna Popplewell.",
       movielink:"https://www.youtube.com/watch?v=usEkWtuNn-w",
    },
    {
        name:"lagaan",
        poster:"lagaan original.jpg",
        rating:8.1,
        description:"An epic tale of cricket set in colonial India; actors: Aamir Khan, Gracy Singh.",
        movielink:"https://youtu.be/Nhi4Azs2nEw?si=RRwJRq4DRNlxlQZV",
    },
    {
        name:"Sita Raman",
        poster:"Sita raman.jpg",
        rating:8.5,
           description:"A soldier from Kashmir border, gets anonymous love letters from Sita,after which Ram is on a mission to find Sita and propose his love between Mrunal and Salman",
           movielink:"https://youtu.be/3UKsbXQUwqw?si=3OXcEfK6pBjSbThy",
    },
    {
        name:"Entertainment",
        poster:"entertainment.jpg",
        rating:4.5,
           description:"A heartwarming comedy illustrating the bond between a dog and its owner; actors: Akshay Kumar, Tamannaah Bhatia.",
           movielink:"https://youtu.be/N_WD28tkyEk?si=nN94NmWUiDTmcsEv",
    },
    {
        name:"Anacondas 2",
        poster:"Anaconda 2 .jpg",
        rating:4.7,
           description:"A thrilling adventure featuring a giant snake and a perilous island; actors: Morris Chestnut, KaDee Strickland.",
           movielink:"https://youtu.be/srRwIbQWTI0?si=VZ8IC_eWyJixIF4E",
    },
    {
        name:"Wolfman",
        poster:"The Wolfman.jpg",
        rating:5.8,
           description:" A gripping horror film where a man transforms into a werewolf; actors: Benicio Del Toro, Emily Blunt.",
           movielink:"https://youtu.be/5JB1NY2xut8?si=zNkO3ibdaPAxn5lz",
    },
    {
        name:"Rakshabandhan",
        poster:"Rakshabandhan.jpg",
        rating:7.5,
           description:"A touching story highlighting the love between siblings; actors: Akshay Kumar, Bhumi Pednekar.",
           movielink:"https://youtu.be/cvMttgOhpbk?si=SduMojrWKuvaULke",
    },
    {
        name:"The conjuring",
        poster:"The conjuring.jpg",
        rating:6.1 ,
        description:"A terrifying horror movie based on real-life paranormal investigations; actors: Vera Farmiga, Patrick Wilson.",
        movielink:"https://youtu.be/k10ETZ41q5o?si=SmDiZs1ZgwRD5ljJ",
       
    },
    {
        name:"Chup Chup Ke",
        poster:"Chup.jpg",
        rating:6.7 ,
         description:"it is a comedy film starring Shahid Kapoor, Kareena Kapoor, and Suniel Shetty. ",
         movielink:"https://youtu.be/NaldohJ8_js?si=RW91eHOz3mD8TE8W",
       
    },
    {
        name:"Phir Hera Pheri",
        poster:"phir.jpg",
        rating:6.9 ,
        description:"Akshay Kumar,SunielShetty,and Paresh Rawal as three hapless entangled in a series of comedic misadventures ",
        movielink:"https://youtu.be/zWtae7SeFHQ?si=x0b0Q0h6V2H9r0YW",
       
    },
    {
        name:"3 idots",
        poster:"3 idots.jpg",
        rating:8.4 ,
        description:"It  is a comedic and inspiring film featuring Aamir Khan, R. Madhavan, and Sharman Joshi as three friends navigating the challenges of college life and societal expectations ",
        movielink:"https://youtu.be/K0eDlFX9GMc?si=qexJ9uYz6sQY9mpM",
       
    },
    {
        name:"DJ",
        poster:"dj.webp",
        rating:7.1 ,
        description:"The movie  starring Allu Arjun and Pooja Hegde, delivers a mix of action and romance. ",
        movielink:"https://youtu.be/QRr7E6BUS_g?si=F_9-_OyiDR4q2YAo",
       
    },

    
];


document.getElementById('search').addEventListener('keypress', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        // Call the searchMovie function
        searchMovie();
    }
});
function searchMovie(){
    let moviename = document.getElementById('search').value;
    if(moviename!=="")
    {
       let result= movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(moviename.toUpperCase())
        })
        displayMovies(result);
    }
}

function displayMovies(data)
{
document.getElementById("movies").innerHTML="";
let htmlstring =``;

for(let i=0;i<data.length;i++)

{
   htmlstring= htmlstring+`
   <div class="movie">
<div class="overlay">
    <div class="video">
    </div>
    <div class="details">
        <h1>${data[i].name}</h1>
        <h2>IMDB:${data[i].rating}</h2>
        <p>${data[i].description}</p>
        <a href="${data[i].movielink} id="one"" >MOVIE_TRAILER LINK</a>

    </div>
</div>


<img class="poster" src="${data[i].poster}" alt="image">
</div>`;
}

 document.getElementById("movies").innerHTML=htmlstring;
}

displayMovies(movies);
