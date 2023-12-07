import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDistributor } from './DistributorContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = (props) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const {disid}=useDistributor()
  const navigate =useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChangeCat = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [selectedBrand, setSelectedBrand] = useState('');

  const handleChangeBrand = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   // window.alert(productName + ' ' + description + ' ' + price + ' ' + selectedCategory + ' ' + selectedBrand + ' ' + image1);
    try {
      // Check if required fields are empty
      if (!productName || !description || !price || !selectedCategory || !selectedBrand) {
        toast.error('Please fill in all required fields.', { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
        return;
      }

      const productData = {
        name: productName,
        description,
        price,
        status: 'ACTIVE',
      };

      const response = await axios.post("http://localhost:8282/add/product", {
        "proname":productData.name,
        "catid":selectedCategory,
        "brandid":selectedBrand,
        "price":productData.price,
        "url1":image1,
        "url2":image2,
        "url3":image3,
        "url4":image4,
        "description":productData.description,
        "disid":disid,  
    });

     
    if (response.status === 200) {
      toast.success("Product Added !!", {
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 3000, 
      });
    } else {
     
      console.log('Registration failed');
      
    }
   

      
    } catch (error) {
      
      console.error('Error:', error);
      toast.error(error.message, { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="dashboard-header">
        <h1 className="display-4">Add Product</h1>
      </div>
      <div className="Screen">
        <div className="row">
          <div className="col-md-4 Block">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImage1(e.target.value)}
                placeholder="Add Image"
                pattern="https?://.+"
                title="Please enter a valid URL (e.g., http://example.com)"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImage2(e.target.value)}
                placeholder="Add Image"
                pattern="https?://.+"
                title="Please enter a valid URL (e.g., http://example.com)"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImage3(e.target.value)}
                placeholder="Add Image"
                pattern="https?://.+"
                title="Please enter a valid URL (e.g., http://example.com)"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setImage4(e.target.value)}
                placeholder="Add Image"
                pattern="https?://.+"
                title="Please enter a valid URL (e.g., http://example.com)"
              />
            </div>
            {/* Other image inputs */}
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <input
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Product Name"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                rows="3"
                placeholder="Add Description of Product"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <select className="form-control" value={selectedCategory} onChange={handleChangeCat}>
                    <option value="">Select category</option>
                    {categoryoption.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="form-input form-control"
                    placeholder="Enter Price"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <select className="form-control" value={selectedBrand} onChange={handleChangeBrand}>
                    <option value="">Select a brand</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <br />
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;


const categoryoption = [
  { id: '213', label: 'Processor' },
  { id: '214', label: 'Mouse' },
  { id: '215', label: 'Keyboard' },
  { id: '216', label: 'SSD' },
  { id: '217', label: 'HDD' },
  { id: '218', label: 'RAM' },
  { id: '219', label: 'Motherboard' },
  { id: '220', label: 'Graphics Card' },
  { id: '221', label: 'Cooler Fan' },
  { id: '222', label: 'PSU' },
  { id: '223', label: 'Monitor' },
  { id: '224', label: 'CPU Cabinet' },
  { id: '225', label: 'Controller' },
  { id: '226', label: 'Gaming Console' }
];
const brands = [
  { id: '1111', label: 'AMD' },
  { id: '1122', label: 'Intel' },
  { id: '1133', label: 'Zebronics' },
  { id: '1144', label: 'Arctic Fox' },
  { id: '1155', label: 'HP' },
  { id: '1166', label: 'Portronics' },
  { id: '1177', label: 'TOSHIBA' },
  { id: '1188', label: 'WD' },
  { id: '1199', label: 'G.Skill' },
  { id: '1200', label: 'XPG ADATA' },
  { id: '1201', label: 'Asus' },
  { id: '1202', label: 'MSI' },
  { id: '1203', label: 'NVIDIA' },
  { id: '1204', label: 'AMD' },
  { id: '1205', label: 'ATEKT' },
  { id: '1206', label: 'STORITE' },
  { id: '1207', label: 'Artis' },
  { id: '1208', label: 'LG' },
  { id: '1209', label: 'Dell' },
  { id: '1210', label: 'GALAX' },
  { id: '1211', label: 'Logitech' },
  { id: '1212', label: 'Xbox' },
  { id: '1213', label: 'Sony' }
];