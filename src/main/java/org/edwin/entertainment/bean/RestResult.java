package org.edwin.entertainment.bean;

import java.io.Serializable;

public class RestResult implements Serializable {
	private static final long serialVersionUID = 976923579894408697L;
	private int returnCode;
	private String message;
	private Object result;

	public static RestResult success(Object result) {
		RestResult restResult = new RestResult();
		restResult.setReturnCode(1);
		restResult.setResult(result);
		return restResult;
	}

	public static RestResult fail(String message) {
		RestResult restResult = new RestResult();
		restResult.setReturnCode(0);
		restResult.setMessage(message);
		return restResult;
	}

	public int getReturnCode() {
		return returnCode;
	}

	public void setReturnCode(int returnCode) {
		this.returnCode = returnCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getResult() {
		return result;
	}

	public void setResult(Object result) {
		this.result = result;
	}
}
