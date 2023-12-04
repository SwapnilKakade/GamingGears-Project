package com.demo.gaminggears.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "Customer",uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "custId")
    private int custId;
    private String fname;
    private String lname;
    private String mobNumber;
    private String email;
    private String pass;
    private int userStatus;
    private int isExpert;
    private String address;
//    @ManyToOne
//    @JoinColumn(name = "addressId")
//    private Address addressId;
    

    // Constructors
    public Customer() {
        // Default constructor
    }

    public Customer( String fname, String lname, String mobNumber, String email, String pass,
                    int userStatus, int isExpert,String address) {
        //this.custId = custId;
        this.fname = fname;
        this.lname = lname;
        this.mobNumber = mobNumber;
        this.email = email;
        this.pass = pass;
        //this.birthdate = birthdate;
        this.userStatus = userStatus;
        this.isExpert = isExpert;
        this.address = address;
  }

    // Getters and Setters
    public int getCustId() {
        return custId;
    }

    public void setCustId(int custId) {
        this.custId = custId;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getMobNumber() {
        return mobNumber;
    }

    public void setMobNumber(String mobNumber) {
        this.mobNumber = mobNumber;
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


    public int getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(int userStatus) {
        this.userStatus = userStatus;
    }

    public int getIsExpert() {
        return isExpert;
    }

    public void setIsExpert(int isExpert) {
        this.isExpert = isExpert;
    }

    public String getAddress() {
        return address;
    }

    public void setAddressId(String address) {
        this.address = address;
    }

    // toString method
    @Override
    public String toString() {
        return "Customer{" +
                "custId=" + custId +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", mobNumber='" + mobNumber + '\'' +
                ", email='" + email + '\'' +
                ", pass='" + pass + '\'' +
                ", userStatus=" + userStatus +
                ", isExpert=" + isExpert +
                ", address=" + address +
                '}';
    }
}
