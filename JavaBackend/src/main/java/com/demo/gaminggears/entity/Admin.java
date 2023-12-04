package com.demo.gaminggears.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Admin")
public class Admin {
	@Id
	private String username;
	private String password;
	public Admin() {
		super();
	}
	public Admin(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPass(String password) {
		this.password = password;
	}
}

