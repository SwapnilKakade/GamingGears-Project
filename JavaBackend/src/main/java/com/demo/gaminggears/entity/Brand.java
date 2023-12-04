package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Brand")
public class Brand {
	@Id
	@Column(name = "brandid")
    private int brandid;
    private String brandname;

    // Constructors
    public Brand() {
    }

    public Brand(int brandid, String brandname) {
        this.brandid = brandid;
        this.brandname = brandname;
    }

    // Getters and Setters
    public int getBrandid() {
        return brandid;
    }

    public void setBrandid(int brandid) {
        this.brandid = brandid;
    }

    public String getBrandname() {
        return brandname;
    }

    public void setBrandname(String brandname) {
        this.brandname = brandname;
    }

	@Override
	public String toString() {
		return "Brand [brandid=" + brandid + ", brandname=" + brandname + "]";
	}
    
}
