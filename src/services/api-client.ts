

const options = {
  method : 'GET',
  url: `https://dummyjson.com/products`,
  params: {
    limit: 20,
    skip: 0,
    select: 'title,price,thumbnail, category' // Alege doar câmpurile dorite
  }
}

export default options;