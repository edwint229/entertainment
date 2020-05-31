package org.edwin.entertainment.rest;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.edwin.entertainment.bean.FileBo;
import org.edwin.entertainment.bean.RestResult;
import org.edwin.entertainment.util.CommonUtil;
import org.edwin.entertainment.util.Consts;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/common")
public class CommonRestController {
	private static final Logger LOG = LoggerFactory.getLogger(CommonRestController.class);
	private static final int BUFFER_SIZE = 20 * 1024 * 1024;

	@Value("${file.bash.path}")
	private String baseFilePath;

	@Value("${file.types}")
	private String fileTypes;

	@RequestMapping(value = "/", method = { RequestMethod.GET })
	public String index() {
		return "forword:index.html";
	}

	@RequestMapping(value = "/files", method = { RequestMethod.GET })
	@ResponseBody
	public RestResult files() {
		File baseFolder = new File(baseFilePath);
		List<String> fileTypeList = Arrays.asList(fileTypes.split(Consts.COMMA));
		List<FileBo> fileList = CommonUtil.getFileList(baseFolder, fileTypeList);

		return RestResult.success(fileList);
	}

	@RequestMapping(value = "/files/download", method = { RequestMethod.GET })
	public String filesDownload(@RequestParam("filePath") String filePath, HttpServletResponse response)
			throws IOException {
		File baseFolder = new File(baseFilePath);
		File file = new File(filePath);

		if (!file.exists()) {
			response.sendError(HttpStatus.FORBIDDEN.value(), "File not exist.");
		}

		if (!file.getAbsolutePath().startsWith(baseFolder.getAbsolutePath())) {
			response.sendError(HttpStatus.FORBIDDEN.value(), "No access.");
		}

		response.setContentType(CommonUtil.getContentType(file.getName()));
		response.setHeader("Content-Disposition",
				"attachment;filename=" + new String(file.getName().getBytes("UTF-8"), "ISO8859-1"));
		response.setHeader("Content-Length", String.valueOf(file.length()));

		FileInputStream is = null;
		BufferedInputStream bfis = null;
		ServletOutputStream os = null;
		try {
			is = new FileInputStream(file);
			bfis = new BufferedInputStream(is, BUFFER_SIZE);
			os = response.getOutputStream();

			byte[] readByte = new byte[BUFFER_SIZE];
			int readLength = -1;
			while ((readLength = bfis.read(readByte)) > -1) {
				os.write(readByte, 0, readLength);
			}
			os.flush();
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		} finally {
			IOUtils.closeQuietly(os);
			IOUtils.closeQuietly(bfis);
			IOUtils.closeQuietly(is);
		}

		return null;
	}

}
