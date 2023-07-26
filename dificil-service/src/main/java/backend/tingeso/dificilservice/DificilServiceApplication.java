package backend.tingeso.dificilservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class DificilServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DificilServiceApplication.class, args);
	}

}
