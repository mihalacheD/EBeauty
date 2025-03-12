

const options = {
  method : 'GET',
  url: `https://dummyjson.com/products`,
  params: {
    limit: 20,
    skip: 0,
    select: 'id,title,price,thumbnail,category,rating,brand,discountPercentage,stock,meta'
  }
}

export default options;