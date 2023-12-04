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
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proid")
    private int proid;
    @Column(name = "proname")
    private String proname;

    @ManyToOne
    @JoinColumn(name = "catid")
    private Category catid;

    @ManyToOne
    @JoinColumn(name = "brandid")
    private Brand brandid;

    
    private double price;
    private String url1;
    private String url2;
    private String url3;
    private String url4;
    private String description;

    @ManyToOne
    @JoinColumn(name = "disid")
    private Distributor disid;

    // Constructors
    public Product() {
    }

    public Product( String proname, Category catid, Brand brandid, double price,
                   String url1, String url2, String url3, String url4, String description, Distributor disid) {
        //this.proid = proid;
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

    // Getters and Setters
    public int getProid() {
        return proid;
    }

    public void setProid(int proid) {
        this.proid = proid;
    }

    public String getProname() {
        return proname;
    }

    public void setProname(String proname) {
        this.proname = proname;
    }

    public Category getCatid() {
        return catid;
    }

    public void setCatid(Category catid) {
        this.catid = catid;
    }

    public Brand getBrandid() {
        return brandid;
    }

    public void setBrandid(Brand brandid) {
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

    public Distributor getDisid() {
        return disid;
    }

    public void setDisid(Distributor disid) {
        this.disid = disid;
    }

    @Override
    public String toString() {
        return "Product [proid=" + proid + ", proname=" + proname + ", catid=" + catid + ", brandid=" + brandid
                + ", price=" + price + ", url1=" + url1 + ", url2=" + url2 + ", url3=" + url3 + ", url4=" + url4
                + ", description=" + description + ", disid=" + disid + "]";
    }
}
