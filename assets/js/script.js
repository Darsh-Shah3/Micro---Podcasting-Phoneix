// Sample pre-inserted blog posts
const preInsertedBlogs = [
    {
        title: "10 Tips for Starting Your Own Podcast✨",
        content: `Are you considering starting your own podcast but feeling overwhelmed with where to begin? Worry not, as we've curated a comprehensive guide to help you kickstart your podcasting journey with confidence. Here are 10 essential tips to set you on the path to podcasting success \n

         1. Define Your Niche: Identify a specific topic or theme that you're passionate about and knowledgeable in. Narrowing down your niche will help you attract a dedicated audience interested in your content.\n
        
         2. Plan Your Content: Outline your episodes in advance to maintain consistency and structure.Consider creating a content calendar to stay organized and ensure a steady flow of engaging topics.\n
        
         3. Invest in Quality Equipment: While you don't need to break the bank, investing in decent recording equipment, such as a microphone and headphones, can significantly improve the audio quality of your podcast.\n
        
         4. Choose the Right Format: Decide on the format that best suits your content and audience preferences.Whether it's solo monologues, interviews, or panel discussions, choose a format that showcases your strengths and aligns with your goals.\n
        
        5. Create Compelling Cover Art: Design eye- catching cover art that reflects your podcast's theme and attracts potential listeners. Your cover art is often the first impression people have of your podcast, so make it visually appealing and memorable.\n
        
        6. Develop a Consistent Brand: Establish a consistent brand identity across all your podcasting platforms, including your podcast artwork, website, and social media profiles.Consistency builds trust and helps listeners recognize your brand.\n
        
        7. Focus on Quality Content: Content is king in the podcasting world.Prioritize delivering valuable and engaging content that resonates with your audience.Strive to educate, entertain, or inspire your listeners with each episode.\n
        
        8. Master the Art of Promotion: Don't overlook the importance of promotion in growing your podcast audience. Utilize social media, email newsletters, guest appearances on other podcasts, and networking opportunities to increase your podcast's visibility.\n
        
        9. Engage with Your Audience: Foster a sense of community with your listeners by actively engaging with them through social media, listener feedback, and Q & A segments.Building a loyal and engaged audience is key to the success of your podcast.\n
    
        10. Stay Persistent and Patient: Rome wasn't built in a day, and neither is a successful podcast. Stay committed to your podcasting journey, be patient with your progress, and continuously strive for improvement. Success may not come overnight, but with dedication and perseverance, you'll achieve your podcasting goals.\n
            
        By following these 10 tips, you'll be well-equipped to embark on your podcasting adventure and make a meaningful impact in the ever-growing world of podcasting. So, grab your microphone, hit record, and let your voice be heard!`,

        img: "./assets/images/Profile-Podcaster-2.png",
        podcaster: "Chai & Chill",
        time: "March 29 <sup>th</sup>, 12:00 PM"
    },
    {
        title: "Interview with a Famous Podcaster🤓",
        content: `Dive into an illuminating exploration of the podcasting universe with our latest blog post titled 'Interview with a Famous Podcaster.' Prepare to be captivated as we delve into the realms of creativity, innovation, and success within the dynamic world of podcasting. Join us on an insightful journey as we uncover the secrets and stories behind the microphone.

        Exclusive Insights: Gain access to behind-the-scenes stories and exclusive insights shared by a famous podcaster, offering a unique perspective on the podcasting industry.
        
        Proven Strategies: Discover the proven strategies and techniques employed by the renowned podcaster to build a successful podcasting career, from content creation to audience engagement.
        
        Insider Tips: Learn valuable tips and tricks directly from the expert, covering topics such as content development, guest interviews, and audience growth strategies.
        
        Inspirational Stories: Be inspired by the podcaster's personal journey, including challenges faced, lessons learned, and milestones achieved along the way, providing motivation for aspiring podcasters.
        
        Industry Trends: Stay up-to-date with the latest trends and developments in the podcasting landscape, as discussed by one of the industry's most influential figures during the interview.
        
        Embark on a transformative experience as we unravel the intricacies of podcasting through the lens of a celebrated industry luminary. Whether you're a seasoned podcaster seeking fresh inspiration or a budding enthusiast eager to embark on your own journey, this interview promises to ignite your passion and propel your aspirations to new heights. Tune in as we delve deep into the heart of podcasting excellence.`,
        img: "./assets/images/Profile-Podcaster-3.png",
        podcaster: "Bollywood Banter",
        time: "March 29 <sup>th</sup>, 2:50 PM"
    },
    // Add more sample blog posts here
];

// Function to display pre-inserted blog posts
function displayPreInsertedBlogs() {
    const blogPostsContainer = document.querySelector('.blog-posts');
    preInsertedBlogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profile-container');
        profileContainer.innerHTML = `
        <div class="profile">
            <img
            src="${blog.img}"
            alt id="profile-img" />
            <p id="profile-name">${blog.podcaster}</p>
        </div>
        <div class="time-date">
            <time datetime="29-03-2024">${blog.time}</time>
        </div>`;

        blogPost.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
        `;
        blogPostsContainer.appendChild(profileContainer);
        blogPostsContainer.appendChild(blogPost);
    });
}

// Function to handle form submission for adding new blog
function handleBlogSubmission(event) {
    event.preventDefault();
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    var nowDate = 0, nowTime = currentMinute, nowFormat = "";
    if (currentHour > 12) {
        nowDate = currentHour - 12;
        nowFormat = "PM";
    }

    const blogTitle = document.getElementById('blog-title').value.trim();
    const blogContent = document.getElementById('blog-content').value.trim();

    if (blogTitle !== '' && blogContent !== '') {
        const blogPostsContainer = document.querySelector('.blog-posts');
        const newBlogPost = document.createElement('div');
        newBlogPost.classList.add('blog-post');
        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profile-container');
        profileContainer.innerHTML = `
        <div class="profile">
            <img
            src="./assets/images/Profile-General.png"
            alt id="profile-img" />
            <p id="profile-name">ANONYMOUS</p>
        </div>
        <div class="time-date">
            <time datetime="29-03-2024">March 30 <sup>th</sup>, ${nowDate + ":" + nowTime + " " + nowFormat}</time>
        </div>`;

        newBlogPost.innerHTML = `
            <h2>${blogTitle}</h2>
            <p>${blogContent}</p>
        `;
        blogPostsContainer.appendChild(profileContainer);
        blogPostsContainer.appendChild(newBlogPost);

        // Clear form content after submission
        document.getElementById('blog-title').value = '';
        document.getElementById('blog-content').value = '';
    } else {
        alert('Please provide a title and content for your blog before submitting.');
    }
}

// Display pre-inserted blogs on page load
window.addEventListener('DOMContentLoaded', () => {
    displayPreInsertedBlogs();
    const blogForm = document.getElementById('blog-form');
    blogForm.addEventListener('submit', handleBlogSubmission);
});


let cancelButton = document.querySelector(".logo-menu #searchbox #close-btn");

cancelButton.addEventListener("click", () => {
    const searchbox = document.getElementById('searchbox');
    searchbox.classList.remove('show');
})

let cancel = document.querySelector(".offcanvas-container .offcanvas .logo-menu #searchbox #close-btn");

cancel.addEventListener("click", () => {
    const searchbox = document.querySelector(".offcanvas-container .offcanvas .logo-menu #searchbox");
    searchbox.classList.remove('show');
});