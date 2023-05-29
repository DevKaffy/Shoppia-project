import React, { Component } from 'react'
import UploadPopup from './UploadPopup';

class ProductEntryForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        productName: '',
        productDesc: '',
        campus: '',
        productQuantity:'',
        productCategory: '',
        price: ''
      }
    }

    handleProductNameChange = (e) => {
        this.setState({ productName: e.target.value });
      };

    handleProductDescChange = (e) => {
        this.setState({ productDesc: e.target.value });
      };

      handleCampusChange = (e) => {
        this.setState({ campus: e.target.value });
      };

      handleProductQuantityChange = (e) => {
        this.setState({ productQuantity: e.target.value });
      };

      handleProductCategory = (e) => {
        this.setState({ productCategory: e.target.value });
      };
      
      handlePriceChange= (e) => {
        this.setState({ productChange: e.target.value });
      };




    handleSubmit = (e) => {
        e.preventDefault();
        // Process the form submission
        console.log('Product Name:', this.state.productName, this.state.productDesc,  this.state.campus, this.state.productQuantity, this.state.productCategory, this.state.price);
        // Additional logic for handling form data
      };

  render() {
    return (
      <div>
      <div className='addform'>
      <h2 className='add-prod'>Add a Product</h2>
      <div className='form-im'>
       
        <im alt='bac'></im>
      </div>

         

      

      


      <div className='form-qs'>
      <form onSubmit={this.handleSubmit}>

     

      <div class='form-item-div'>
      <label htmlFor="productName">Product Name: </label>
      <br />
      <input
        type="text"
        id="productName"
        value={this.state.productName}
        onChange={this.handleProductNameChange}
        required
        style={{ width: '350px'}}
      />
      </div>
     

      <div class='form-item-div'>
    <label htmlFor="description">Description: </label>
    <br />
      <input
        type="text"
        id="productdesc"
        value={this.state.productDesc}
        onChange={this.handleProductDescChange}
        required
        style={{ width: '350px'}}
      />

</div>
<div class='form-item-div'>
    <label htmlFor="campus">Campus: </label>
    <br />
      <input
        type="text"
        id="campus"
        value={this.state.campus}
        onChange={this.handleCampusChange}
        required
        style={{ width: '350px'}}
      />

</div>

<div class='form-item-div'>
    <label htmlFor="productQuantity">Quantity Available: </label>
    <br />
      <input
        type="number"
        id="productQuantity"
        value={this.state.productQuantity}
        onChange={this.handleProductQuantityChange}
        required
        style={{ width: '350px'}}
      />

</div>

<div class='form-item-div'>
      <label htmlFor="productCategory">Category: </label>
      <br />
      <select
        id="productCategory"
        value={this.state.productCategory}
        onChange={this.handleProductCategory}
        required
        style={{ width: '350px'}}
      >
        
        <option value="Apparel">Apparel</option>
        <option value="Books">Books</option>
        <option value="Electronics">Electronics</option>
        <option value="Stationery">Stationery</option>
        <option value="Snacksandbeverages">Snacks and beverages</option>
        <option value="SchoolSupplies">School Supplies</option>
        <option value="HealthandPersonalCare">Health and Personal Care</option>
        <option value="ArtandCraftSupplies">Art and Craft Supplies</option>
        <option value="SportsEquipment">Sports Equipment</option>
        <option value="HomeDecor">Home Decor</option>
        {/* Add more options as needed */}
      </select>
      </div>

<div class='form-item-div'>
<label htmlFor="price">Price: </label>
<br />
      <input
        type="number"
        id="price"
        value={this.state.price}
        onChange={this.handlePriceChange}
        required
        style={{ width: '350px'}}
      />
</div>


      
<div style={{ paddingTop: '20px', height: '50px', display: 'flex', alignItems: 'center' }}>

      <UploadPopup />
      </div>

      <div style={{ paddingTop: '20px', height: '50px', display: 'flex', alignItems: 'center' }}>
      <button type="submit" className='black-button'>Submit</button>
      </div>
      </form>
      </div>
      
    

    


      </div>
      </div>
    )
  }
}

export default ProductEntryForm