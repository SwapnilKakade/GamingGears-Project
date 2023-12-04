package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cartid")
    private int cartid;

    @ManyToOne
    @JoinColumn(name = "custid")
    private Customer custid;

    @ManyToOne
    @JoinColumn(name = "proid")
    private Product prodid;

    private int qty;
    private double price;

    // Constructors
    public Cart() {
    }

    public Cart( Customer custId, Product proId, int qty, double price) {
//        this.cartid = cartid;
        this.custid = custId;
        this.prodid = proId;
        this.qty = qty;
        this.price = price;
    }

    // Getters and Setters
    public int getCartid() {
        return cartid;
    }

    public void setCartid(int cartid) {
        this.cartid = cartid;
    }

    public Customer getCustId() {
        return custid;
    }

    public void setCustId(Customer custId) {
        this.custid = custId;
    }

    public Product getProId() {
        return prodid;
    }

    public void setProId(Product proId) {
        this.prodid = proId;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cartid=" + cartid +
                ", custId=" + custid +
                ", proId=" + prodid +
                ", qty=" + qty +
                ", price=" + price +
                '}';
    }
}
