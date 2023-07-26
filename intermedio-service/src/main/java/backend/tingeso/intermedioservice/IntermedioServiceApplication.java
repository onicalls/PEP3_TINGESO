package backend.tingeso.intermedioservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class IntermedioServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntermedioServiceApplication.class, args);
	}

}
