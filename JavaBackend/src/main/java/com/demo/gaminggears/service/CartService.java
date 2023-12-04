package com.demo.gaminggears.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Cart;
import com.demo.gaminggears.entity.CartBody;
import com.demo.gaminggears.entity.Customer;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.repository.CartRepository;
import com.demo.gaminggears.repository.CustomerRepository;
import com.demo.gaminggears.repository.ProductRepository;

@Service
public class CartService implements ICartService {
    @Autowired
    CartRepository cartRepository;
    
    @Autowired
    ProductRepository productRepository;
    
    @Autowired
    CustomerRepository customerRepository;
    
    @Override
    public void addtoCart(CartBody cartBody) {
        System.out.println("customer id " + cartBody.getCustid());
        
        // Check if the product is already in the cart
        List<Cart> existingCarts = cartRepository.existsByCustIdProdId(cartBody.getCustid(), cartBody.getProid());
        
        if (!existingCarts.isEmpty()) {
            Product p = productRepository.findById(cartBody.getProid()).orElse(null);
            
            // Check if an item with the same product id exists in the cart
            Cart existingCart = existingCarts.get(0); // Assuming the first item in the list
            existingCart.setQty(existingCart.getQty() + 1);
            existingCart.setPrice(p.getPrice() * existingCart.getQty());
            
            cartRepository.save(existingCart);
            // Update the cart item in the database
            // Add code here to update the cart item in the repository
        } else {
            Product p = productRepository.findById(cartBody.getProid()).orElse(null);
            System.out.println(p);
            
            Customer c = customerRepository.findById(cartBody.getCustid()).orElse(null);
            
            // Create a new cart item
            Cart newCart = new Cart(c, p, 1, p.getPrice());
            
            // Save the new cart item in the database
            cartRepository.save(newCart);
        }
    }

    @Override
    public List<Cart> getCart(int custID) {
        return cartRepository.findAllByCustId(custID);
    }

	@Override
	public void deleteFromCart(int cartid) {
		// TODO Auto-generated method stub
		Cart existedCarts = cartRepository.findById(cartid).orElse(null);
		 if (existedCarts.getQty()>1) {
	            
	            //System.out.println("cart quantity "+existedCarts.get(0).getQty());
	            // Check if an item with the same product id exists in the cart
	            Cart existingCart = existedCarts; // Assuming the first item in the list
	            existingCart.setQty(existingCart.getQty() - 1);
	            existingCart.setPrice(existingCart.getProId().getPrice() * existingCart.getQty());
	            
	            cartRepository.save(existingCart);
	            // Update the cart item in the database
	            // Add code here to update the cart item in the repository
	        } else {
	           
	           
	            // Save the new cart item in the database
	            cartRepository.deleteById(cartid);
	        }
		
	}
    
    // Add an update method here to update the cart item in the repository
}
