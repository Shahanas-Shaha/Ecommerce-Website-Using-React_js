import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults ="Showing 01 - 12 of 146 Results"
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'

const Shop = () => {
  const [GridList, setGridList] = useState(true)
  const [products, setproducts] = useState(Data)
 

   //Pagination
const [currentPage, setCurrentPage]  = useState(1)
const productsPerPage = 12

const indexOfLastProduct = currentPage * currentPage
const indexOfFirstProduct = indexOfLastProduct - productsPerPage
const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)


   // function to change currentpage content
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}

// filter product based on category
const [selectedCategory, setSelectedCategory] = useState("All")
const menuItem = [...new Set(Data.map((val) => val.category))]

const filterItem = (curcat) =>{
  const newItem = Data.filter((newVal) =>{
    return newVal.category === curcat
  })

   setSelectedCategory(curcat)
   setproducts(newItem)
}
  return (
    <div>
      <PageHeader title="Our Shop page" curPage="Shop"/>
      {/* shop content*/}
      <div>
        <div className="shop-page padding-tb">
          <div className="container">
            <div className="row justify-content center">
              <div className="col-lg-8 col-12">
                {/*left*/}
                <article>
                  {/*layout and title */}
                  <div className="shop-title d-flex flex-wrap justify-content-center between">
                    <p>{showResults}</p>
                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                      <a className='grid' onClick={() => setGridList(!GridList)}>
                        <i className="icofont-ghost"></i>
                      </a>
                      <a className='list' onClick={() => setGridList(!GridList)}>
                        <i className="icofont-listine-dots"></i>
                      </a>
                    </div>
                  </div>

                  {/* products cards */}
                  <div>
                    <ProductCards GridList={GridList} products={currentProducts}/>
                  </div>

                  <Pagination 
                  productsPerPage={productsPerPage}
                  totalProducts = {products.length}
                  paginate ={paginate}
                  activePage ={currentPage}
                  />

                </article>
              </div>
              <div className="col-lg-4 col-12">
                {/*right side*/}
                <aside>
                  <Search products={products} GridList={GridList}/>
                  <ShopCategory
                  filterItem={filterItem}
                  setItem={setproducts}
                  menuItem={menuItem}
                  setproducts={setproducts}
                  selectedCategory={selectedCategory}
                  />
                  <PopularPost/>
                  <Tags/>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
