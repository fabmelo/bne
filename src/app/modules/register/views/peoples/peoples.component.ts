// angular
import { OnInit, Component, ViewChild } from '@angular/core';

// interface
import { People } from './../../models/people.interface';

// services
import { UtilService } from './../../../../core/services/util.service';
import { PeoplesService } from './../../services/peoples.service';

// angular material
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bne-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})

export class PeoplesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<People>;
  isMobile: boolean;
  displayedColumns: Array<string>;

  constructor(
    private peopleService: PeoplesService,
    private utilService: UtilService
  ) {
    this.getPeople();
  }

  ngOnInit(){
    this.isMobile = this.utilService.detectMobile();
    // Define as colunas conforme dispositivo
    this.displayedColumns = (this.isMobile) ? ['Name','Copy'] : ['Id','Name','RegisterDate','City','State','IsActive','Balance','Copy'];
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
