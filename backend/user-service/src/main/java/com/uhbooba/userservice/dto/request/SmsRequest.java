package com.uhbooba.userservice.dto.request;

import jakarta.validation.constraints.NotBlank;

public record SmsRequest(

    @NotBlank(message = "휴대폰 번호를 입력해주세요")
    String phone

) {

}
