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
@Table(name = "Orders")
public class Orders {
    @Id
    @Column(name = "orderid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderid;
    
    @ManyToOne
    @JoinColumn(name = "custid")
    private Customer custid;
    
    @ManyToOne
    @JoinColumn(name = "proid")
    private Product proid;
    
    private String odate;
    private int status;
    private String paymentmode;
    private double price;
    private String transactionid;
    private String address;
//    private String name;
//    private String mobileno;
//    private String deliverydate;
//    

    // Constructors
    public Orders() {
    }

    public Orders( Customer custid, Product proid, String odate, int status, String paymentmode, double amount, String transactionid,String address) {
        //this.orderid = orderid;
        this.custid = custid;
        this.proid = proid;
        this.odate = odate;
        this.status = status;
        this.paymentmode = paymentmode;
        this.price = amount;
        this.transactionid = transactionid;
        this.address = address;
    }

    // Getters and Setters
    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Customer getCustid() {
        return custid;
    }

    public void setCustid(Customer custid) {
        this.custid = custid;
    }

    public Product getProid() {
        return proid;
    }

    public void setProid(Product proid) {
        this.proid = proid;
    }

    public String getOdate() {
        return odate;
    }

    public void setOdate(String odate) {
        this.odate = odate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getPaymentmode() {
        return paymentmode;
    }

    public void setPaymentmode(String paymentmode) {
        this.paymentmode = paymentmode;
    }


    public String getTransactionid() {
        return transactionid;
    }

    public void setTransactionid(String transactionid) {
        this.transactionid = transactionid;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "orderid=" + orderid +
                ", custid=" + custid +
                ", proid=" + proid +
                ", odate=" + odate +
                ", status=" + status +
                ", paymentmode='" + paymentmode + '\'' +
                ", amount=" + price +
                ", transactionid=" + transactionid +
                '}';
    }
}
