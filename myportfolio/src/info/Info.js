import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255,0,0)", "rgb(100, 0, 0)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Seun",
    lastName: "Ajetomobi",
    position: ` ☁️Solution Architect💻`,
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '😊',
            text: 'Powered by constant growth'
        },
        {
            emoji: '🌎',
            text: 'Located in Sweden'
        },
        {
            emoji: "🏢",
            text: "Helekt Africa"
        },
        {
            emoji: "📧",
            text: "solaajetomobi@aol.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },

        {
            link: "https://github.com/gullah26",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/seunajetomobi/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I happen to be a versatile and results-driven Solution Architect, I bring forth a dynamic blend of expertise in architecting comprehensive solutions coupled with hands-on proficiency across the full software development stack. With a passion for innovation and a strategic mindset, I aim to bridge the gap between conceptual design and technical implementation, ensuring seamless and efficient systems that drive business success.",
    profile: "My career spans over 2 years within the realms of software architecture and development. I possess a robust background in envisioning, designing, and deploying scalable solutions that align with organizational objectives. My ability to navigate complexities while integrating both front-end and back-end development has empowered me to craft holistic and future-ready architectures.", 
    expertise:
    { 

       solutionArchitect:[ "As a Solution Architect my specialization is crafting end-to-end solutions, leveraging my in-depth understanding of architectural patterns, system integration, and scalability considerations. This involves designing resilient and adaptable systems that evolve alongside technological advancements."],
       fullstackDevelopment:[ "Proficient across the entire development stack, I am adept in utilizing a diverse range of programming languages, frameworks, and databases to build robust applications. This includes expertise in both front-end technologies (HTML, CSS, JavaScript, React, Angular) and back-end frameworks (Node.js, Django, Flask)."],
       cloudTechnology:[ "I have a strong command over cloud platforms such as AWS, Azure, and Google Cloud, employing their services to architect cloud-native solutions, ensuring high availability, and scalability."],
       problemSolving:[ "My approach revolves around problem-solving through collaboration. I excel in cross-functional teams, effectively communicating complex technical concepts to diverse stakeholders."],
    
    
    }
    ,
    skills:
        {
            cloud: ['Administrator Associate', 'Solutions Architect Expert'],
            frontend: ['Html5', 'Css3', 'Bootstrap', 'Django', 'Flask', 'Jinja', 'Javascript', 'Reactjs'],
            backend: ['python', 'postgres', 'mongoDb'],
            versionControl: ['Git', 'Github']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://gullah26.github.io/wellness-haven/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/gullah26/wellness-haven", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://gullah26.github.io/Rock_Paper_Scissors/",
            source: "https://github.com/gullah26/Rock_Paper_Scissors",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://gullah26.github.io/New-Year-Count-Down/",
            source: "https://github.com/gullah26/New-Year-Count-Down/tree/main",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://https//shopping-list-v01.herokuapp.com/",
            source: "https://github.com/gullah26/shopping_list",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://gemsofparis.herokuapp.com/",
            source: "https://github.com/gullah26/gemsofparis",
            image: mock5
        },
        {
            title: "Project 6",
            live: "https://eazyshopper.herokuapp.com/",
            source: "https://github.com/gullah26/eazy-shopper",
            image: mock6
        }
    ]
}