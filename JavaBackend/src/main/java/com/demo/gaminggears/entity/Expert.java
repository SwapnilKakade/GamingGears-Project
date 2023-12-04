package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Expert")
public class Expert {
    @Id
    @Column(name = "expid")
    private int expid;
    private String expname;
    private String certification;
    private String skills;
    private int sells;
    private int experience;
    private double commission;
    private int status;

    // Constructors
    public Expert() {
    }

    public Expert(int expid, String expname, String certification, String skills, int sells, int experience, double commission, int status) {
        this.expid = expid;
        this.expname = expname;
        this.certification = certification;
        this.skills = skills;
        this.sells = sells;
        this.experience = experience;
        this.commission = commission;
        this.status = status;
    }

    // Getters and Setters
    public int getExpid() {
        return expid;
    }

    public void setExpid(int expid) {
        this.expid = expid;
    }

    public String getExpname() {
        return expname;
    }

    public void setExpname(String expname) {
        this.expname = expname;
    }

    public String getCertification() {
        return certification;
    }

    public void setCertification(String certification) {
        this.certification = certification;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public int getSells() {
        return sells;
    }

    public void setSells(int sells) {
        this.sells = sells;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public double getCommission() {
        return commission;
    }

    public void setCommission(double commission) {
        this.commission = commission;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Expert{" +
                "expid=" + expid +
                ", expname='" + expname + '\'' +
                ", certification='" + certification + '\'' +
                ", skills='" + skills + '\'' +
                ", sells=" + sells +
                ", experience=" + experience +
                ", commission=" + commission +
                ", status=" + status +
                '}';
    }
}
