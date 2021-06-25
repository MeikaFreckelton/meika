
const brochure = [
    {
        imagePath: "/images/brochureImages/b1.png"
    },
    {
        imagePath: "/images/brochureImages/b2.png"
    },
    {
        imagePath: "/images/brochureImages/b3.png"
    },
    {
        imagePath: "/images/brochureImages/b4.png"
    },
    {
        imagePath: "/images/brochureImages/b5.png"
    },
    {
        imagePath: "/images/brochureImages/b6.png"
    },
    {
        imagePath: "/images/brochureImages/b7.png"
    },
    {
        imagePath: "/images/brochureImages/b8.png"
    },

]

const photoshop = [
    {
        imagePath: "/images/photoshopImages/p1.png"
    },
    {
        imagePath: "/images/photoshopImages/p2.png"
    },
    {
        imagePath: "/images/photoshopImages/p3.png"
    },
    {
        imagePath: "/images/photoshopImages/p4.png"
    },
    {
        imagePath: "/images/photoshopImages/p5.png"
    },
    {
        imagePath: "/images/photoshopImages/p6.png"
    },
    {
        imagePath: "/images/photoshopImages/p7.png"
    },
    {
        imagePath: "/images/photoshopImages/p8.png"
    },
    {
        imagePath: "/images/photoshopImages/p9.png"
    },
    {
        imagePath: "/images/photoshopImages/p10.png"
    },
    {
        imagePath: "/images/photoshopImages/p11.png"
    },
    {
        imagePath: "/images/photoshopImages/p12.png"
    },
    {
        imagePath: "/images/photoshopImages/p13.png"
    },
    {
        imagePath: "/images/photoshopImages/p14.png"
    },
    {
        imagePath: "/images/photoshopImages/p15.png"
    },
]

const equinox = [
    {
        imagePath: "/images/equinoxBriefImages/e1.png"
    },
    {
        imagePath: "/images/equinoxBriefImages/e2.png"
    },
    {
        imagePath: "/images/equinoxBriefImages/e3.png"
    },
    {
        imagePath: "/images/equinoxBriefImages/e4.png"
    },
    {
        imagePath: "/images/equinoxBriefImages/e5.png"
    },
    {
        imagePath: "/images/equinoxBriefImages/e6.png"
    },
]


const mask = [
    {
        imagePath: "/images/mask-1.png"
    },
    {
        imagePath: "/images/mask-2.png"
    },
    {
        imagePath: "/images/mask-3.png"
    },
]






const designData = [
    {
        id: 1,
        imagePath: "/images/brochure.png",
        imageAlt: "travel brochure",
        downloadLink: "/images/pdf/meikaf_brochure.pdf",
        title: "Travel Brochure",
        subtitle: "Graphic Design work, 2019",
        text: "A travel brochure for Spain.",
        car: true,
        carName: brochure
    },
    {
        id: 2,
        imagePath: "/images/music-poster.png",
        imageAlt: "music poster",
        downloadLink: "/images/pdf/music-poster.pdf",
        title: "Music Poster",
        subtitle: "Graphic Design work, 2019",
        text: "A band tour poster with custom lettering, inspired by psychedelic rock posters from the 1970s.",
        car: false
    },
    
    {
        id: 3,
        imagePath: "/images/cards.jpg",
        imageAlt: "playing cards",
        downloadLink: "/images/cards_meika.pdf",
        title: "Playing Cards",
        subtitle: "Graphic Design work, 2019",
        text: "A set of playing cards loosely inspired by the classic tarot deck.",
        car: false

    },
    {
        id: 4,
        imagePath: "/images/movie-poster.png",
        imageAlt: "movie poster",
        downloadLink: "/images/movie-poster.png",
        title: "Movie Poster",
        subtitle: "Graphic Design work, 2019",
        text: "A movie poster design for the movie, 'The Fifth Element'.",
        car: false

    },
    {
        id: 5,
        imagePath: "/images/design-infographic.png",
        imageAlt: "infographic",
        downloadLink: "/images/pdf/design-infographic.pdf",
        title: "Graphic Designer Infographic",
        subtitle: "Graphic Design work, 2019",
        text: "An infographic detailing ten ways to be a better graphic designer.",
        car: false,
        

    },
    {
        id: 6,
        imagePath: "/images/ps-portfolio.png",
        imageAlt: "photoshop portfolio",
        downloadLink: "/images/pdf/meikaf_portfolio.pdf",
        title: "Photoshop Portfolio",
        subtitle: "Graphic Design work, 2019",
        text: "A portfolio of photoshop effect work.",
        car: true,
        carName: photoshop

    },
    {
        id: 7,
        imagePath: "/images/type-poster.png",
        imageAlt: "type poster",
        downloadLink: "/images/pdf/type-poster.pdf",
        title: "Typography Poster",
        subtitle: "Graphic Design work, 2019",
        text: "A poster detailing different aspects of typography.",
        car: false

    },
    {
        id: 8,
        imagePath: "/images/lightbulb_meikaf.png",
        imageAlt: "lightbulb",
        downloadLink: "/images/lightbulb_meikaf.png",
        title: "Lightbulb Packaging Design",
        subtitle: "Graphic Design work, 2019",
        text: "Design for a lightbulb and its box, with a lightbulb created using illustrator 3D techniques.",
        car: false
        

    },
]

const fashionData = [
    {
        imagePath: "/images/timeline.png",
        imageAlt: "timeline",
        downloadLink: "/images/timeline.png",
        title: "40s Fashion Timeline",
        subtitle: "Fashion work, 2018",
        text: "A poster detailing the basic timeline of fashion during the 1940s.",
        car: false

    },
    {
        imagePath: "/images/daydream-nation.png",
        imageAlt: "type poster",
        downloadLink: "/images/pdf/daydream-nation.pdf",
        title: "Fashion brand Booklet",
        subtitle: "Fashion work, 2018",
        text: "A booklet I created during my fashion studies of a brand of my own creation, named, 'Daydream Nation'.",
        car: false,
    },
    {
        imagePath: "/images/mask-1.png",
        imageAlt: "masks",
        downloadLink: "/images/pdf/masks.pdf",
        title: "Mask Rendering",
        subtitle: "Fashion work, 2018",
        text: "A series of different renderings of a chosen mask.",
        car: true,
        carName: mask
    },

]



const carouselData = {
    brochure: brochure,
    equinox: equinox, 
    photoshop: photoshop
}
    





export {designData, carouselData, fashionData}