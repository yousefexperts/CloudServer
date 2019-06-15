package com.experts.core.biller.statemachine.api.ddd.domain.command;

import com.experts.core.biller.statemachine.api.ddd.domain.vo.CustomerId;
import com.experts.core.biller.statemachine.api.ddd.domain.vo.PaymentId;
import lombok.Value;

import java.time.LocalDateTime;

@Value(staticConstructor = "commandOf")
public class ConfirmPayment implements PaymentCommand {
    private final PaymentId paymentId;
    private final CustomerId customerId;
    private final LocalDateTime timestamp = LocalDateTime.now();
}
