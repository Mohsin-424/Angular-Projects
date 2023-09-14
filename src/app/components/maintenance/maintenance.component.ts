import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent {
  loading: boolean = true;
  contractorSubscription: Subscription = new Subscription();

  contractorColumns: string[] = ['position', 'name', 'phone', 'email'];
  contractorTitle: string = 'Maintanence Contractors';
  contractorData: any;

  constructor(private contractors: StoreService) {}

  ngOnInit(): void {
    this.getContractorData();
  }

  ngOnDestroy(): void {
    this.contractorSubscription.unsubscribe();
  }

  getContractorData() {
    this.contractorSubscription = this.contractors
      .getStoreContractorInfo('Georgia')
      .subscribe((data: any) => {
        this.contractorData = data;
      });

    this.loading = false;
  }
}
