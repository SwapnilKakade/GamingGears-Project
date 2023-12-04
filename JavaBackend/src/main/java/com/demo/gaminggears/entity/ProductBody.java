package com.demo.gaminggears.entity;


public class ProductBody {
	private String proname;
    private int catid;
    private int brandid;
    private double price;
    private String url1;
    private String url2;
    private String url3;
    private String url4;
    private String description;
    private int disid;
	public ProductBody() {
		super();
	}
	public ProductBody(String proname, int catid, int brandid, double price, String url1, String url2,
			String url3, String url4, String description, int disid) {
		super();
		this.proname = proname;
		this.catid = catid;
		this.brandid = brandid;
		this.price = price;
		this.url1 = url1;
		this.url2 = url2;
		this.url3 = url3;
		this.url4 = url4;
		this.description = description;
		this.disid = disid;
	}
	public String getProname() {
		return proname;
	}
	public void setProname(String proname) {
		this.proname = proname;
	}
	public int getCatid() {
		return catid;
	}
	public void setCatid(int catid) {
		this.catid = catid;
	}
	public int getBrandid() {
		return brandid;
	}
	public void setBrandid(int brandid) {
		this.brandid = brandid;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getUrl1() {
		return url1;
	}
	public void setUrl1(String url1) {
		this.url1 = url1;
	}
	public String getUrl2() {
		return url2;
	}
	public void setUrl2(String url2) {
		this.url2 = url2;
	}
	public String getUrl3() {
		return url3;
	}
	public void setUrl3(String url3) {
		this.url3 = url3;
	}
	public String getUrl4() {
		return url4;
	}
	public void setUrl4(String url4) {
		this.url4 = url4;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getDisid() {
		return disid;
	}
	public void setDisid(int disid) {
		this.disid = disid;
	}
    
    
    
}
