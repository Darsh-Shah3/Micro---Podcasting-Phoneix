let cancelButton = document.querySelector(".logo-menu #searchbox #close-btn");

cancelButton.addEventListener("click", () => {
    const searchbox = document.getElementById('searchbox');
    cancelButton.style.color = "black"
    searchbox.classList.remove('show');
});

let cancel = document.querySelector(".offcanvas-container .offcanvas .logo-menu #searchbox #close-btn");

cancel.addEventListener("click", () => {
    const searchbox = document.querySelector(".offcanvas-container .offcanvas .logo-menu #searchbox");
    searchbox.classList.remove('show');
});

const abouts = {
    "Bollywood Banter": `## Masala in My Ears: Bollywood Obsessed!

    Hey there, Bollywood fanatics!   I'm Bollywood Banter, your host for Masala in My Ears, a podcast dedicated to diving deep into the crazy, colorful world of Hindi cinema. 
    
    Join me as we chat with industry insiders, unpack the social commentary hidden in dance numbers, and maybe even shed a tear (or two) over those classic Bollywood romances.  
    
    So, grab some samosas, put on your dancing shoes (metaphorically, for now!), and get ready to be entertained!    
    
    **P.S.**  Follow me on social media @MasalaInMyEars for exclusive content, polls, and behind-the-scenes peeks!  
    `,

    "Chai & Chilli": `Spice Up Your Life: The Chai & Chilli Bollywood Podcast
    Howdy, Bollywood buffs!
    
    Calling all masala movie aficionados – this is Chai and Chilli, your one-stop shop for spicing up your life with all things Bollywood! ️☕️
    
    Join us as we chat with industry insiders, get the lowdown on the latest dance trends, analyze the hidden social messages in those catchy tunes, and maybe even shed a few happy tears over timeless Bollywood romances.
    
    So, grab your favorite snacks (we recommend some piping hot samosas!), put on your dancing shoes (metaphorically, for now!), and get ready for a fun ride!
    
    P.S. Don't forget to follow us on social media @ChaiAndChilliBollywood for exclusive content, polls, and behind-the-scenes glimpses! Don't miss out on the masala!`,

    "Mic Masala": `Mic Masala: The Bollywood Beat Drops Here!
    What's up, Bollywood fam? Buckle up because Mic Masala is here to take you on a wild ride through the vibrant world of Hindi cinema!
    
    Calling all die-hard fans, casual viewers, and everyone in between – this is your one-stop shop for all things Bollywood.
    
    Join me, Mic Masala, as we chat with industry insiders, unpack the social commentary woven into those captivating stories, and maybe even shed a tear or two over those classic Bollywood romances (hey, even the toughest mics need a good cry sometimes!).
    
    So, grab some popcorn, crank up the volume, and get ready to be entertained!
    
    P.S. Don't forget to follow @MicMasalaBollywood on social media for exclusive content, polls, and behind-the-scenes access. It's gonna be a masala party you won't want to miss!`

}

let podcaster = document.querySelectorAll("#podcasters .container .podcaster-list .podcast-card")

for (let i of podcaster)
    i.addEventListener("click", () => {
        let image = i.querySelector(".card-banner img").src
        let podcasterName = i.querySelector(".card-content h3").innerText;
        let episodes = +i.querySelector(".card-content .card-meta p").innerText.substr(-1, 2) - 1;
        const newPageUrl = 'Profile.html?image=' + encodeURIComponent(image) + "&podName=" + encodeURIComponent(podcasterName) + "&episode=" + encodeURIComponent(episodes);
        window.location.href = newPageUrl;
        console.log(image)
    });

let image = document.querySelector("#profile-img");
let podcasterName = document.querySelector(".column-2 h1");
let episodes = document.querySelector(".episodes");
let aboutMe = document.querySelector(".about-me");

image.src = new URLSearchParams(window.location.search).get('image');
podcasterName.innerText = new URLSearchParams(window.location.search).get('podName');
episodes.innerText = "Episodes : " + new URLSearchParams(window.location.search).get('episode');
aboutMe.innerText = abouts["Mic Masala"];

