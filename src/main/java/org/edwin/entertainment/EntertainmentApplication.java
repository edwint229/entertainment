package org.edwin.entertainment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class EntertainmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(EntertainmentApplication.class, args);
	}

}
