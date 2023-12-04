package com.demo.gaminggears.entity;

public class OrdersBody {
	private int custid;
	
	private int proid;
	private int price;
	private int status;
	private String address;
	private String name;
    private String mobileno;
    private String deliverydate;
    private String paymentmode;
	public OrdersBody() {
		super();
	}
	public OrdersBody(int custid, int proid, int price, int status, String address) {
		super();
		this.custid = custid;
		this.proid = proid;
		this.price = price;
		this.status = status;
		this.address = address;
	}
	
	
	public OrdersBody(int custid, String address, String paymentmode) {
		super();
		this.custid = custid;
		this.address = address;
		this.paymentmode = paymentmode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getDeliverydate() {
		return deliverydate;
	}
	public void setDeliverydate(String deliverydate) {
		this.deliverydate = deliverydate;
	}
	public String getPaymentmode() {
		return paymentmode;
	}
	public void setPaymentmode(String paymentmode) {
		this.paymentmode = paymentmode;
	}
	public OrdersBody(int custid, String address, String name, String mobileno, String deliverydate,
			String paymentmode) {
		super();
		this.custid = custid;
		this.address = address;
		this.name = name;
		this.mobileno = mobileno;
		this.deliverydate = deliverydate;
		this.paymentmode = paymentmode;
	}
	public int getCustid() {
		return custid;
	}
	public void setCustid(int custid) {
		this.custid = custid;
	}
	public int getProid() {
		return proid;
	}
	public void setProid(int proid) {
		this.proid = proid;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "OrdersBody [custid=" + custid + ", proid=" + proid + ", price=" + price + ", status=" + status + "]";
	}
	
	
}
