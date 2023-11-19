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
    initials: "Seun", // the example uses first and last, but feel free to use three or more if you like.
    position: "Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '😊',
            text: 'fueled by originality'
        },
        {
            emoji: '🌎',
            text: 'located in Sweden'
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
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
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
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello!, I'm a dynamic full stack developer, who merges creativity with technical prowess. Proficient in front-end languages and can seamlessly integrates them with back-end technologies and databases. With a knack for problem-solving, crafting efficient and user-centric web applications is my finesse. I have passion for continuous learning that drives me to explore new frameworks and tools, ensuring top-notch solutions in every project.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'django', 'flask', 'jinja'],
            exposedTo: ['python', 'postgres']
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