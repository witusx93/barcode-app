package com.frontwit.barcodeapp.administration.catalogue.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class UpdateOrderDto {
    long deadline;
    BigDecimal price;
}