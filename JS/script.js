const allProductDataLoad = async () => {
    const url = 'https://fakestoreapi.com/products'
    const res = await fetch(url);
    const data = await res.json();
    displayAllProduct(data);
}
const displayAllProduct = (products) => {
    const trendingContainer = document.getElementById("trending_container")
    trendingContainer.innerHTML = "";
    products.slice(0, 3).forEach(product => {
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `<div class="card bg-base-100  shadow-sm h-full">
                    <figure class=" bg-base-200 ">
                        <img class="w-1/2 h-52 p-3" src=${product.image} alt="" />
                    </figure>
                    <div class="card-body grow ">
                        <h2 class="card-title mb-0">${product?.title}</h2>
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
                        <img class=" h-60 p-3" src=${product.image} alt="" />
                    </figure>
                    <div class="card-body grow ">
                        <h2 class="card-title mb-0">${product?.title}</h2>
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