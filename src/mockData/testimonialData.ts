export interface testimonialType {
    id: number,
    name: string,
    position: string,
    image: string,
    review: string,
    rating: number
}

export const testimonialData: testimonialType[] = [
    {
        id: 1,
        name: "John W.",
        position: "Teknikbloggare",
        image: "/images/testimonial/user-1.png",
        review: "Som teknikrecensent testar jag många ljudprodukter, och Vexoras hörsnäckor ger fantastisk ljudkvalitet i sin prisklass. Brusreduceringen imponerar särskilt och gör dem perfekta för pendling och kontorsarbete.",
        rating: 5.00
    },
    {
        id: 2,
        name: "Sarah K.",
        position: "Personlig tränare",
        image: "/images/testimonial/user-2.png",
        review: "Vexoras smartklocka har blivit min självklara träningspartner. Den registrerar steg, puls och träningspass utan problem. Det anpassningsbara gränssnittet är en extra fördel som gör den både praktisk och snygg.",
        rating: 5.00
    },
    {
        id: 3,
        name: "David M.",
        position: "Fotograf",
        image: "/images/testimonial/user-3.png",
        review: "Jag använder drönare för flygfotografering, och Vexoras drönare överträffade mina förväntningar. Kameran med 4K-upplösning och den stabila flygningen ger material av professionell kvalitet, vilket gör den oumbärlig för fotografer som jag.",
        rating: 5.00
    },
    {
        id: 4,
        name: "Emily R.",
        position: "Resevloggare",
        image: "/images/testimonial/user-4.png",
        review: "Jag har testat många actionkameror på mina äventyr, men Vexoras actionkamera sticker verkligen ut. Bildkvaliteten är kristallklar och kameran är tålig nog för extrema förhållanden. Vexora har verkligen lyckats!",
        rating: 4.00
    },
    {
        id: 5,
        name: "Michael T.",
        position: "Ljudtekniker",
        image: "/images/testimonial/user-5.png",
        review: "För en ljudtekniker är klart ljud avgörande, och det levererar Vexoras smarta högtalare. Basen är djup, diskanten tydlig och röstassistenten fungerar smidigt. Jag rekommenderar dem varmt till musikälskare.",
        rating: 5.00
    },
    {
        id: 6,
        name: "Jessica L.",
        position: "Produktchef",
        image: "/images/testimonial/user-6.png",
        review: "Jag använder Vexoras hörsnäckor till konferenssamtal och musik på språng. De sitter bekvämt och håller sig på plats under träning. Batteritiden imponerar och räcker hela min intensiva arbetsdag.",
        rating: 4.5
    },
    {
        id: 7,
        name: "Tom B.",
        position: "",
        image: "/images/testimonial/user-7.png",
        review: "Vexoras drönare ger flygbilder av professionell kvalitet med smidig navigering och exakt styrning. Jag har använt den till flera kortfilmer, och den presterar lika bra som vissa betydligt dyrare modeller.",
        rating: 5.00
    },
    {
        id: 8,
        name: "Anna P.",
        position: "Yogainstruktör",
        image: "/images/testimonial/user-8.png",
        review: "Vexoras smartklocka hjälper mig att följa mina träningsmål, registrera yogapass och hålla koll på sömnen. Den är smidig och snygg, så jag bär den hela dagen, även under mina klasser.",
        rating: 5.00
    },
    {
        id: 9,
        name: "James D.",
        position: "Äventyrssportare",
        image: "/images/testimonial/user-9.png",
        review: "Oavsett om jag surfar eller åker snowboard fångar Vexoras actionkamera varje ögonblick med imponerande detaljrikedom. Den är lätt, enkel att montera och har fantastisk bildstabilisering. Perfekt för adrenalinsökare som jag!",
        rating: 5.00
    }
]