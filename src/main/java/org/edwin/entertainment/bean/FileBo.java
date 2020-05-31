package org.edwin.entertainment.bean;

import java.io.Serializable;
import java.util.Date;

import org.edwin.entertainment.util.CommonUtil;

public class FileBo implements Serializable {
	private static final long serialVersionUID = 6048913792598174107L;
	private String path;
	private String fileName;
	private long size;
	private String displaySize;
	private String fileType;
	private Date lastModified;
	private String lastModifiedStr;

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public long getSize() {
		return size;
	}

	public void setSize(long size) {
		this.size = size;
	}

	public String getDisplaySize() {
		return displaySize;
	}

	public void setDisplaySize(String displaySize) {
		this.displaySize = displaySize;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public Date getLastModified() {
		return lastModified;
	}

	public void setLastModified(Date lastModified) {
		this.lastModified = lastModified;
		this.lastModifiedStr = CommonUtil.toDateStr(lastModified);
	}

	public String getLastModifiedStr() {
		return lastModifiedStr;
	}

	public void setLastModifiedStr(String lastModifiedStr) {
		this.lastModifiedStr = lastModifiedStr;
	}

}
