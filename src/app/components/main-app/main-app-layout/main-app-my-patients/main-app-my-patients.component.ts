import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { patientData } from 'src/app/model/patientData.model';
import { PatientPostServiceService } from 'src/app/service/patientPostService/patient-post-service.service';
import { MainAppMyPatientsDataSource, MainAppMyPatientsItem } from './main-app-my-patients-datasource';

@Component({
  selector: 'app-main-app-my-patients',
  templateUrl: './main-app-my-patients.component.html',
  styleUrls: ['./main-app-my-patients.component.scss']
})

// AfterViewInit,
export class MainAppMyPatientsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MainAppMyPatientsItem>;
  //dataSource: patientData;

  isLoading = false;
  post: patientData[] = [];
  private postSub: Subscription;

  constructor(public postService: PatientPostServiceService, private router: Router) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    //this.dataSource = new MainAppMyPatientsDataSource();
    this.isLoading = true;
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener()
    .subscribe((posts: patientData[]) => {
      this.isLoading = false;
      this.post = posts;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
}
