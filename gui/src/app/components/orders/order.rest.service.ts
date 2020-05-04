import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderDetails} from 'src/app/components/orders/types/OrderDetails';
import {RestService} from "../../services/rest.service";
import {map} from "rxjs/operators";
import {Page} from "../types/Page";
import {SearchCriteria} from "./types/SearchCriteria";
import {UpdateOrder} from "./order-detail/order-details.dialog";

@Injectable()
export class OrderRestService {
    private static readonly ORDERS_ENDPOINT = "/api/orders";

    constructor(private restService: RestService) {
    }

    public getOrderDetails(id: number): Observable<OrderDetails> {
        return this.restService.get<OrderDetails>(OrderRestService.ORDERS_ENDPOINT + '/' + id)
            .pipe(map(response => response.body));

    }

    public getOrders(page: Page<SearchCriteria>): Observable<any> {
        return this.restService.post<any>(OrderRestService.ORDERS_ENDPOINT + '?page=' + page.page + '&size=' + page.size, page.content)
            .pipe(
                map(response => response.body)
            );
    }

    public changeStatus(id: number): Observable<boolean> {
        return this.restService.put(OrderRestService.ORDERS_ENDPOINT + '/' + id + '/status', {})
            .pipe(map(response => response == null));
    }

    synchronize(): Observable<any> {
        return this.restService.post(OrderRestService.ORDERS_ENDPOINT + '/synchronize', {})
            .pipe(map(response => response.body));
    }

    updateOrder(id: number, updateOrder: UpdateOrder): Observable<boolean> {
        return this.restService.put(OrderRestService.ORDERS_ENDPOINT + '/' + id + '/deadline', updateOrder)
            .pipe(map(response => response == null));
    }
}
