// My Personal Libray  3

const books = [
{

    title: 'The Subtle Art of Not Giving a F*ck A Counterintuitive Approach to living a Good Life',
    description:'Unconventional Pragmatic advice',
    Numberofpages: 100,
    author:'Mark Manson',
    reading:true,
},
{
    title: ' My Bed Time Story',
    description:'Children bed time stories',
    Numberofpages: 6,
    author:'Super Mummy',
    reading:true,
},
{
    title: 'Test Automation Simplified',
    description:'A simple guide to your automation journey',
    Numberofpages: 15,
    author:'Ibironke Yekini',
    reading:true,
} ,
{
    title: 'The Lady Her Lover and her Lord',
    description:'Unconventional Pragmatic advice',
    Numberofpages: 105,
    author:'T D Jakes',
    reading:false,
},
{
    title: 'The Richest Man in Babylon',
    description:'Unconventional Pragmatic advice',
    Numberofpages: 115,
    author:'George S Clason',
    reading:true,
 }
]

for (let t=0; t<books.lenght; t++){
    if (books[t].reading === true) {
        console.log(books[t])


    }
}
