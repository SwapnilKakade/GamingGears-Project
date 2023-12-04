package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "Distributor", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Distributor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "disid")
    private int disid;
    private String disname;
    private String address; // Assuming this is a String, update if it's a different type
    private String licence;
    private String storename;
    private String mobile;
    private String email;
    private String pass;
    private int status;

    // Constructors
    public Distributor() {
    }

    public Distributor(String disname, String address, String licence, String storename, String mobile, String email, String pass) {
        this.disname = disname;
        this.address = address;
        this.licence = licence;
        this.storename = storename;
        this.mobile = mobile;
        this.email = email;
        this.pass = pass;
        this.status = 0;
    }

    // Getters and Setters
    public int getDisid() {
        return disid;
    }

    public void setDisid(int disid) {
        this.disid = disid;
    }
    

    public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getDisname() {
        return disname;
    }

    public void setDisname(String disname) {
        this.disname = disname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLicence() {
        return licence;
    }

    public void setLicence(String licence) {
        this.licence = licence;
    }

    public String getStorename() {
        return storename;
    }

    public void setStorename(String storename) {
        this.storename = storename;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    @Override
    public String toString() {
        return "Distributor{" +
                "disid=" + disid +
                ", disname='" + disname + '\'' +
                ", address='" + address + '\'' +
                ", licence='" + licence + '\'' +
                ", storename='" + storename + '\'' +
                ", mobile='" + mobile + '\'' +
                ", email='" + email + '\'' +
                ", pass='" + pass + '\'' +
                '}';
    }
}
