package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Category")
public class Category {
	
	@Id
	@Column(name = "catid")
    private int catid;
    private String catname;

    // Constructors
    public Category() {
    }

    public Category(int catid, String catname) {
        this.catid = catid;
        this.catname = catname;
    }

    // Getters and Setters
    public int getCatid() {
        return catid;
    }

    public void setCatid(int catid) {
        this.catid = catid;
    }

    public String getCatname() {
        return catname;
    }

    public void setCatname(String catname) {
        this.catname = catname;
    }

	@Override
	public String toString() {
		return "Category [catid=" + catid + ", catname=" + catname + "]";
	}
    
}
