export const fetchData = async () => {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=281407&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "86e99e5390mshfeb39ad2d57aac9p11fba1jsnd992ebfb8d09",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return(result);
  } catch (error) {
    console.error(error);
  }
};
