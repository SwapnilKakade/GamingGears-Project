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
@Table(name = "Askexpert")
public class Askexpert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "queid")
    private int queId;

    @ManyToOne
    @JoinColumn(name = "custid")
    private Customer custid;

    @ManyToOne
    @JoinColumn(name = "expid")
    private Expert expid;

    private String que;
    private int status;
    private String resolution;

    // Constructors
    public Askexpert() {
        // Default constructor
    }

    public Askexpert( Customer custId, Expert expId, String que, int status, String resolution) {
        //this.queId = queId;
        this.custid = custId;
        this.expid = expId;
        this.que = que;
        this.status = status;
        this.resolution = resolution;
    }
    
    public Askexpert( Customer custId, Expert expId, String que) {
        //this.queId = queId;
        this.custid = custId;
        this.expid = expId;
        this.que = que;
        this.status = 0;
        this.resolution = "yet to resolved";
    }
    
    // Getters and Setters
    public int getQueId() {
        return queId;
    }

    public void setQueId(int queId) {
        this.queId = queId;
    }

    public Customer getCustid() {
        return custid;
    }

    public void setCustid(Customer custId) {
        this.custid = custId;
    }

    public Expert getExpid() {
        return expid;
    }

    public void setExpid(Expert expId) {
        this.expid = expId;
    }

    public String getQue() {
        return que;
    }

    public void setQue(String que) {
        this.que = que;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    // toString method
    @Override
    public String toString() {
        return "AskExpert{" +
                "queId=" + queId +
                ", custId=" + custid +
                ", expId=" + expid +
                ", que='" + que + '\'' +
                ", status=" + status +
                ", resolution='" + resolution + '\'' +
                '}';
    }
}
