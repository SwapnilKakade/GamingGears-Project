package com.demo.gaminggears.entity;

public class AskexpertBody {
	private int custid;
	private int expid;
	private String que;
	public AskexpertBody() {
		super();
	}
	public AskexpertBody(int custid, int expid, String que) {
		super();
		this.custid = custid;
		this.expid = expid;
		this.que = que;
	}
	public int getCustid() {
		return custid;
	}
	public void setCustid(int custid) {
		this.custid = custid;
	}
	public int getExpid() {
		return expid;
	}
	public void setExpid(int expid) {
		this.expid = expid;
	}
	public String getQue() {
		return que;
	}
	public void setQue(String que) {
		this.que = que;
	}
	@Override
	public String toString() {
		return "AskexpertBody [custid=" + custid + ", expid=" + expid + ", que=" + que + "]";
	}
	
	

}
