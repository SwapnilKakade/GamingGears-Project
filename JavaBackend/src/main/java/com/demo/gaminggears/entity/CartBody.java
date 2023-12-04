package com.demo.gaminggears.entity;

public class CartBody {
	private int custid;
	private int proid;
	public CartBody() {
		super();
	}
	public CartBody(int custid, int proid) {
		super();
		this.custid = custid;
		this.proid = proid;
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
	@Override
	public String toString() {
		return "CartBody [custid=" + custid + ", proid=" + proid + "]";
	}
	
}
