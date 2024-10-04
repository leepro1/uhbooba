package com.uhbooba.userservice.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(security = @SecurityRequirement(name = "bearerAuth"), servers = {
    @Server(url = "/", description = "Default Server URL")})
@SecurityScheme(name = "bearerAuth", type = SecuritySchemeType.HTTP, scheme = "Bearer", bearerFormat = "JWT")
@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI().info(new Info().title("사용자 API")
                                            .version("1.0")
                                            .description("사용자 API 문서"));
    }
}
