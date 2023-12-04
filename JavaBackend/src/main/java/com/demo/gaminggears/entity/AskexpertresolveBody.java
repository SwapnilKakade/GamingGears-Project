package com.demo.gaminggears.entity;

public class AskexpertresolveBody {
	private int queId;
	private String resolution;
	public AskexpertresolveBody() {
		super();
	}
	public AskexpertresolveBody(int queId, String resolution) {
		super();
		this.queId = queId;
		this.resolution = resolution;
	}
	public int getQueId() {
		return queId;
	}
	public void setQueId(int queId) {
		this.queId = queId;
	}
	public String getResolution() {
		return resolution;
	}
	public void setResolution(String resolution) {
		this.resolution = resolution;
	}
	
}
