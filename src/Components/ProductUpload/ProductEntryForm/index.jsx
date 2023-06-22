import React, { Component, useEffect, useState  } from 'react'
import UploadPopup from '../UploadPopUp';
import axios from 'axios';


class ProductEntryForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        title: '',
        description: '',
        campus: '',
        quantity:'',
        category: '',
        price: '',
        image: null
      }
    }

    handleProductNameChange = (e) => {
        this.setState({ title: e.target.value });
      };

    handleProductDescChange = (e) => {
        this.setState({ description: e.target.value });
      };

      handleCampusChange = (e) => {
        this.setState({ campus: e.target.value });
      };

      handleProductQuantityChange = (e) => {
        this.setState({ quantity: e.target.value });
      };

      handleProductCategory = (e) => {
        this.setState({ category: e.target.value });
      };
      
      handlePriceChange= (e) => {
        this.setState({ price: e.target.value });
      };

      handleFileUpload = (file) => {
        // Handle the file data received from the child component
        // You can set it in the parent component's state or perform any other necessary actions
        this.setState({ image: file });
        //console.log('handleFileUpload triggered');
        //console.log(file);
      };
      
    handleSubmit = (e) => {
        e.preventDefault();
        // Process the form submission
        //console.log('Product Name:', this.state.productName, this.state.productDesc,  this.state.campus, this.state.productQuantity, this.state.productCategory, this.state.price);
        // Additional logic for handling form data

        //console.log(this.props);


        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('price', this.state.price);
        formData.append('campus', this.state.campus);
        formData.append('quantity', this.state.quantity);
        formData.append('category', this.state.category);
        formData.append('image', this.state.image);

        const userId = localStorage.getItem('userId');

        axios.post(`https://shoppia-production.up.railway.app/api/v1/users/${userId}/products`, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem('token'),
          },
        })
      .then(response => {
        console.log('Product data submitted successfully!', response.data);// You will remove this line
        // Handle success, redirect, show success message, etc.

        /* Handle redirect after a successful upload */

        //console.log('TW Response headers:', response.headers); // Add this line to log the response headers
        //console.log('TW Response data:', response.data); 
      })
      .catch(error => {
        console.error('Error submitting product data:', error);
        // Handle error, show error message, etc.
        //console.log('t Error response headers:', error.response.headers);
        console.log('t Error response data:', error.response.data);
      });

      };

  render() {
    return (
      <div>
      <div className='addform'>
      <h2 className='add-prod'>Add a Product</h2>
      <div className='form-im'>
       
        <img alt='bac' />
      </div>

         

      

      


      <div className='form-qs'>
      <form onSubmit={this.handleSubmit}>

     

      <div className='form-item-div'>
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


<div className='form-item-div'>
  <label htmlFor="campus">Campus: </label>
  <br />
  <select
    id="campus"
    value={this.state.campus}
    onChange={this.handleCampusChange}
    required
    style={{ width: '350px' }}
  >
    <option value="">Select a campus</option>
    <option value="University of Lagos (UNILAG) - Lagos">University of Lagos (UNILAG) - Lagos</option>
    <option value="University of Ibadan (UI) - Ibadan">University of Ibadan (UI) - Ibadan</option>
    <option value="Ahmadu Bello University (ABU) - Zaria">Ahmadu Bello University (ABU) - Zaria</option>
    <option value="Obafemi Awolowo University (OAU) - Ile-Ife">Obafemi Awolowo University (OAU) - Ile-Ife</option>
    <option value="University of Nigeria, Nsukka (UNN) - Nsukka">University of Nigeria, Nsukka (UNN) - Nsukka</option>
    <option value="University of Ilorin (UNILORIN) - Ilorin">University of Ilorin (UNILORIN) - Ilorin</option>
    <option value="Covenant University - Ota">Covenant University - Ota</option>
    <option value="Lagos State University (LASU) - Lagos">Lagos State University (LASU) - Lagos</option>
    <option value="Federal University of Technology, Akure (FUTA) - Akure">Federal University of Technology, Akure (FUTA) - Akure</option>
    <option value="University of Benin (UNIBEN) - Benin City">University of Benin (UNIBEN) - Benin City</option>
  </select>
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
     /* </select>
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

      <UploadPopup onFileUpload={this.handleFileUpload}   />
      </div>

      <div style={{ paddingTop: '20px', height: '50px', display: 'flex', alignItems: 'center' }}>
      <button type="submit" className='black-button' style={{
    backgroundColor: 'black',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px'
  }}>Submit</button>
      </div>
      </form>
      </div>
      
    

    


      </div>
      </div>
    )
  }
}

export default ProductEntryForm