package com.uhbooba.financeservice.dto.response;

import com.uhbooba.financeservice.entity.AccountType;
import lombok.Builder;

@Builder
public record AccountResponse(
    String username,
    String accountNo,
    String accountName,
    AccountType accountTypeCode,
    String accountTypeName,
    Long balance
) {

}
