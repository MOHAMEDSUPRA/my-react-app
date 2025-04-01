import { useEffect, useState } from 'react';
import Product from './product';

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [categories, setCategoriesList] = useState([]);
  const [SearchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');


  // API 
  const getProduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(response => setProductList(response));
  };
  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(response => setCategoriesList(response));
  };



  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value;
    setSearchInput(searchValue);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const displayCategories = () => {
    return categories.map(category =>
      <li key={category}>
        <button className="dropdown-item" type="button" onClick={() => handleCategorySelect(category)}>{category}</button>
      </li>
    );
  };
  const displayProduct = () => {
    const productsTemp = productList.filter(product => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesSearch = product.title.includes(SearchInput) ||
        product.description.includes(SearchInput) ||
        product.id.toString().startsWith(SearchInput);
      return matchesCategory && matchesSearch;
    });
    if (productsTemp.length > 0) {
      return productsTemp.map((product, index) => {
        return <Product product={product} key={index} />;
      });
    }
    return (
      <tr>
        <td colSpan={7}>No Items</td>
      </tr>
    );
  };

  return (
    <div className="container-fluid mx-auto w-75 m-3 p-4 bg-light rounded ">
      <form className="mb-4">
        <div className="form-group d-flex align-items-center justify-content-between w-100">
          <input className="form-control me-2" id="search" type="text" placeholder="Search" onClick={handleSearch} style={{ flex: 1 }} />
          <input className="btn btn-outline-success me-2" type="submit" value="Search" onClick={handleSearch} />
          <input className="btn btn-outline-secondary me-2" type="button" value="Reset" onClick={() => { setSearchInput(''); setSelectedCategory(''); }} />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedCategory || 'categories'}
            </button>
            <ul className="dropdown-menu">
              {displayCategories()}
            </ul>
          </div>
        </div>
      </form>
      <h1 className="text-center mb-4">Liste des Produits</h1>
      <div className="table-responsive">
        <table className="table table-light table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>{displayProduct()}</tbody>
        </table>
      </div>
    </div>
  );
}
