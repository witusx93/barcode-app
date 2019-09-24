package com.frontwit.barcodeapp.administration.order.processing.order.infrastructure;

import com.frontwit.barcodeapp.administration.order.processing.order.application.dto.FrontDto;
import com.frontwit.barcodeapp.administration.order.processing.order.application.dto.OrderDetailDto;
import com.frontwit.barcodeapp.administration.order.processing.order.application.dto.OrderDto;
import com.frontwit.barcodeapp.administration.order.processing.order.model.Order;
import com.frontwit.barcodeapp.administration.order.processing.order.model.UpdateStagePolicy;
import com.frontwit.barcodeapp.administration.order.processing.shared.Barcode;
import com.frontwit.barcodeapp.administration.order.processing.shared.OrderId;
import com.frontwit.barcodeapp.administration.order.processing.shared.Quantity;
import com.frontwit.barcodeapp.administration.order.processing.shared.Stage;
import com.frontwit.barcodeapp.administration.order.processing.synchronization.TargetFront;
import com.frontwit.barcodeapp.administration.order.processing.synchronization.TargetOrder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Document(collection = "order")
@Data
@NoArgsConstructor
public
class OrderEntity {

    @Id
    private Long id;
    @NotNull
    private String name;
    private LocalDate orderedAt;
    private String color;
    private String size;
    private Stage stage;
    private String cutter;
    private String comment;
    private String customer;
    private boolean isCompleted;
    private Map<Long, Stage> fronts;
    private int quantity;

    OrderEntity(TargetOrder targetOrder) {
        this.id = targetOrder.getOrderId().getOrderId();
        this.name = targetOrder.getInfo().getName();
        this.color = targetOrder.getInfo().getColor();
        this.cutter = targetOrder.getInfo().getCutter();
        this.size = targetOrder.getInfo().getSize();
        this.stage = Stage.INIT;
        this.orderedAt = targetOrder.getInfo().getOrderedAt();
        this.customer = targetOrder.getInfo().getCustomer();
        this.comment = targetOrder.getComment().compose();
        this.quantity = targetOrder.getFronts().stream()
                .map(TargetFront::getQuantity)
                .map(Quantity::getValue)
                .mapToInt(Integer::intValue).sum();
        this.fronts = targetOrder.getFronts().stream()
                .map(front -> front.getBarcode().getBarcode())
                .collect(Collectors.toMap(Function.identity(), t -> Stage.INIT));
    }

    void update(Order order) {
        this.stage = order.getStage();
        order.getFronts().forEach((barcode, stage) -> fronts.put(barcode.getBarcode(), stage));
    }

    Order toDomainModel(UpdateStagePolicy policy) {
        var domainFronts = new HashMap<Barcode, Stage>();
        fronts.forEach((key, value) -> domainFronts.put(new Barcode(key), value));
        return new Order(new OrderId(id), domainFronts, stage, policy);
    }

    OrderDetailDto detailsDto(List<FrontDto> fronts) {
        return new OrderDetailDto(id, name, color, size, cutter, comment, customer, stage, orderedAt, fronts);
    }

    OrderDto dto() {
        return new OrderDto(id, name, color, cutter, orderedAt, stage);
    }
}