import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { MapDialog } from "./map-dialog/map.dialog";
import { SnackBarService } from "../../../services/snack-bar.service";
import { MatDialog } from "@angular/material/dialog";
import { GoogleApi } from "./GoogleApi";
import { CustomerAddress } from "./CustomerAddress";
import { LoadingService } from "../../../services/loading.service";
import { Observable, Subject } from "rxjs";
import { MatDialogRef } from "@angular/material/dialog/typings/dialog-ref";

@Injectable()
export class RouteComputer implements OnDestroy {
    private static DEPARTURE = "Twardogóra, Polska";
    private worker: Worker;
    private notify = new Subject<CustomerAddress[]>();
    private dialogRef: MatDialogRef<MapDialog>;

    constructor(private snackBarService: SnackBarService,
        private dialog: MatDialog,
        private googleApi: GoogleApi,
        private loadingService: LoadingService) {
    }

    ngOnDestroy(): void {
        this.notify.complete();
    }

    compute(addresses: CustomerAddress[]): Observable<CustomerAddress[]> {
        this.loadingService.show();
        this.googleApi.getDetails(addresses.concat(new CustomerAddress("Frontwit", RouteComputer.DEPARTURE)))
            .subscribe(customerAddresses => {
                const duplicates = this.getDuplicates(customerAddresses)
                if (duplicates.length != 0) {
                    const duplicateNames = duplicates.reduce((allCustomers, customer) => allCustomers + ", " + customer);
                    this.snackBarService.failure(`Wystąpił błąd. Sprawdź poprawność adresów dla klientów: ${duplicateNames}`);
                    this.loadingService.hide();
                    return;
                }
                this.runWorker(customerAddresses);
            }, e => {
                this.loadingService.hide();
                console.info(e);
            });
        return this.notify.asObservable();
    }

    private runWorker(customerAddresses: CustomerAddress[]): void {
        if (typeof Worker == 'undefined') {
            this.snackBarService.failure("Operacja nie powiodła się");
            this.loadingService.hide();
            return;
        }
        this.worker = new Worker('./routes.worker', { type: 'module' });
        this.worker.onmessage = (result: any) => {
            this.loadingService.hide();
            if (!result.data) {
                this.snackBarService.failure("Operacja nie powiodła się.");
                return;
            }
            const cities = result.data as CustomerAddress[];
            const indexOfDeparture = cities.findIndex(address => address.city.name == RouteComputer.DEPARTURE);
            const sortedCities = cities.slice(indexOfDeparture).concat(cities.slice(0, indexOfDeparture));
            this.openMap(sortedCities);
        };
        this.worker.postMessage(customerAddresses);
    }

    openMap(cities: CustomerAddress[]): void {
        this.dialogRef = this.dialog.open(MapDialog, {
            minWidth: '95%',
            height: '95%',
            data: cities
        });
        this.dialogRef.afterClosed().subscribe((addresses) => {
            if (addresses) {
                this.notify.next(addresses.slice(1));
            }
        });
    }

    getDuplicates(customerAddress: CustomerAddress[]): string[] {
        let duplicates: string[] = [];
        const cities = customerAddress.map(ca => ca.city.name);
        cities.forEach((city, pos) => {
            if (cities.lastIndexOf(city) != cities.indexOf(city)) {
                duplicates.push(customerAddress[pos].customer);
            }
        });
        return duplicates;
    }
}
