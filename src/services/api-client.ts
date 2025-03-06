

const options = {
  method : 'GET',
  url: `https://dummyjson.com/products`,
  params: {
    limit: 20,          // Limitează rezultatele la 10 produse
    skip: 5,            // Sari peste primele 5 produse (pentru paginare)
    select: 'title,price,thumbnail' // Alege doar câmpurile dorite
  }
}

export default options;