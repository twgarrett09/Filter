const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];
 
  //Dom elements references for rendering and user interaction

  const productsContainer = document.querySelector(".products")
    const searchinput = document.querySelector(".search")
    const categoriesContainer = document.querySelector(".cats")
    const priceRange = document.querySelector("priceRange")
    const priceValue = document.querySelector(".priceValue")

    //crate a function to dispaly the products
    const displayProducts = (filterProducts) => {
        productsContainer.innerHTML = filterProducts.map(product =>
            `
            <div class ="product">
                      <img src = ${product.img} alt= "">
                      <span class="name">${product.name}</span>
                      <span class="priceText">${product.price}</span>
                
            </div>
            `




        ).join("")
    }

    displayProducts(data);

    searchinput.addEventListener("keyup", (e)=>{
        const value = e.target.value.toLowerCase();

        if(value){

            displayProducts(data.filter(iteam => iteam.name.toLocaleLowerCase().indexOf(value) !== -1))
        }else{
            displayProducts(data)
        }
    })





    const setCategories = () =>{

        const allCats = data.map(item => item.cat)
        const categories =[
            "All",
            ...allCats.filter((item, i)=>{
                return allCats.indexOf(item) === i
            })
        ]

        categoriesContainer.innerHTML = categories.map(cat =>
            `
            <span class = 'cat'${cat}</span>
            `

 ).join('')


 categoriesContainer.addEventListener("click", (e)=>{
    const selectedCat = e.target.textContent;

    if(selectedCat ==='All'){
        displayProducts(data)
    }else{

        displayProducts(data.filter(item =>
            item.cat === selectedCat
        ))
    } 
})
    }