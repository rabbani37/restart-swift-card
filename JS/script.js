const allProductDataLoad = async () => {
    const url = 'https://fakestoreapi.com/products'
    const res = await fetch(url);
    const data = await res.json();
    displayAllProduct(data);
}
const displayAllProduct = (products) => {
    const trendingContainer = document.getElementById("trending_container")
    trendingContainer.innerHTML = "";

    const top3products = products.sort((p, c) => c.rating.rate - p.rating.rate)

    top3products.slice(0, 3).forEach(product => {
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `<div class="card bg-base-100  shadow-sm h-full">
                    <figure class=" bg-base-200 ">
                        <img class="w-1/2 h-52 p-3" src=${product.image} alt="" />
                    </figure>
                    <div class="card-body grow ">
                        <h2 class="card-title mb-0 truncate block">${product?.title}</h2>
                        <p class="text-xl font-bold">$<span>${product?.price}</span></p>
                        <div class="flex items-center justify-between gap-5 my-3">
                            <div class="text-blue-700 px-2 rounded-full bg-blue-200 border border-blue-700">
                            ${product?.category}
                            </div>
                            <div class="flex items-center gap-2">
                               <i class="fa-solid text-yellow-500 fa-star"></i>
                                <p class="text-gray-500"><span>${product?.rating?.rate}</span> <span>(${product?.rating?.count})</span></p>
                            </div>
                        </div>
                        <div class="card-actions grid grid-cols-2">
                            <button onclick="handleDetails(${product.id})" class="btn btn-ghost w-full btn-outline"><i class="fa-regular fa-eye"></i></i> Details</button>
                            <button class="btn btn-primary w-full"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
                        </div>
                    </div>
                </div>
        `;
        trendingContainer.appendChild(cardDiv);
    })
    // console.log(top3products)
}

const categoryNameDataLoad = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const categories = await res.json();
    categoryButton(categories);
}; categoryNameDataLoad();

const categoryButton = (categories) => {
    const categoryContainer = document.getElementById("product_category")
    categories.forEach((category, idx) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        
        <button onclick="handleByCategoryButtonClick('${category.split("'").join("\\\'")}',${idx})"
        id="category_btn_${idx}"
         class="hover:bg-primary hover:text-white border border-gray-500 rounded-full text-gray-700 px-2  category_Btn">${category}</button>
        `;
        categoryContainer.appendChild(categoryDiv)
    });
};

const handleByCategoryButtonClick = (category, idx) => {
    const allProductBtn = document.getElementById(`category_btn_all`)
    ourProductsDataLoad(category,);
    categoryStyle();
    const singleButton = document.getElementById(`category_btn_${idx}`)
    if (singleButton) {
        singleButton.classList.add("categoryStyle");
    }
    else{
        allProductBtn.classList.add("categoryStyle")
    }

}

const categoryStyle = () => {
    const allButton = document.querySelectorAll(".category_Btn")
    allButton.forEach(btn => btn.classList.remove("categoryStyle"))
}

const ourProductsDataLoad = async (category = '') => {

    const categoryUrl = `https://fakestoreapi.com/products/category/${category}`;
    const allUrl = `https://fakestoreapi.com/products`
    const url = category ? categoryUrl : allUrl;
    const res = await fetch(url);
    const data = await res.json();
    ourProductDisplay(data);

}; ourProductsDataLoad();

const ourProductDisplay = (products) => {
    const ourProductContainer = document.getElementById("ourProducts_container");
    ourProductContainer.textContent = ""
    products.forEach(product => {
        const cardDiv = document.createElement('div')
        cardDiv.className='card bg-base-100 shadow-sm h-full md:w-full w-1/2 p-0'
        cardDiv.innerHTML = `
                    <figure class=" bg-base-200 ">
                        <img class=" h-52 p-3" src=${product.image} alt="" />
                    </figure>
                    <div class="card-body ">
                        <h2 class="card-title mb-0 truncate block ">${product?.title}</h2>
                        <p class="text-xl font-bold">$<span>${product?.price}</span></p>
                        <div class="flex items-center justify-between gap-5 my-3">
                            <div class="text-blue-700 px-2 rounded-full bg-blue-200 border border-blue-700">
                            ${product?.category}
                            </div>
                            <div class="flex items-center gap-2">
                               <i class="fa-solid text-yellow-500 fa-star"></i>
                                <p class="text-gray-500"><span>${product?.rating?.rate}</span> <span>(${product?.rating?.count})</span></p>
                            </div>
                        </div>
                        <div class="card-actions grid grid-cols-2">
                            <button onclick="handleDetails(${product.id})" class="btn btn-ghost w-full btn-outline"><i class="fa-regular fa-eye"></i></i> Details</button>
                            <button class="btn btn-primary w-full"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
                        </div>
                    </div>
               
        `;
        ourProductContainer.appendChild(cardDiv);
    })
}

// Details button 
const handleDetails = (id) => {
    productDetailsDataload(id)
    const productDetails = document.getElementById("product_details");
    productDetails.showModal()
}

const productDetailsDataload = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayProductDetails(data);
}
const displayProductDetails = (product) => {
    const detailsContainer = document.getElementById("details_container");
    detailsContainer.textContent = ""

    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `<div class="card bg-base-100  shadow-sm h-full">
                    <figure class=" bg-base-200 ">
                        <img class=" h-60 p-3 " src=${product.image} alt="" />
                    </figure>
                    <div class="card-body grow ">
                        <h2 class="card-title mb-0 ">${product?.title}</h2>
                        <p><span class="font-semibold">Description: </span>${product.description}</p>
                        <p class="text-xl font-bold"><span class="font-semibold">Price: </span> $<span>${product?.price}</span></p>
                        <div class="flex items-center justify-between gap-5 my-3">
                            <div class="text-blue-700 px-2 rounded-full bg-blue-200 border border-blue-700">
                            ${product?.category}
                            </div>
                            <div class="flex items-center gap-2">
                               <i class="fa-solid text-yellow-500 fa-star"></i>
                                <p class="text-gray-500"><span>${product?.rating?.rate}</span> <span>(${product?.rating?.count})</span></p>
                            </div>
                        </div>
                        <div class="card-actions grid grid-cols-2">
                            <button onclick="" class="btn btn-ghost w-full btn-outline"><i class="fa-regular fa-eye"></i></i> Buy Now</button>
                            <button class="btn btn-primary w-full"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
                        </div>
                    </div>
                </div>
    `;


    detailsContainer.append(cardDiv)
    console.log(product)

}




allProductDataLoad()