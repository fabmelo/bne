// angular
import { Component, ViewChild } from '@angular/core';

// interface
import { People } from './../../models/people.interface';

// services
import { PeoplesService } from './../../services/peoples.service';

// angular material
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bne-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})

export class PeoplesComponent {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<People>;
  displayedColumns: string[] = [
    'Id',
    'Name',
    'RegisterDate',
    'City',
    'State',
    'IsActive',
    'Balance',
  ];

  constructor(
    private peopleService: PeoplesService
  ) {
    this.getPeople();
  }

  /**
   * Consome o service e traz todos os dados
   */
  getPeople() {
    this.peopleService.getAll().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        console.error('ERRO: ', error);
      }
    );
  }

  onFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
