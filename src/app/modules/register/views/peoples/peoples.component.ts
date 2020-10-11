// angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// interface
import { People } from './../../models/people.interface';

// services
import { AuthService } from './../../../security/services/auth.service';
import { PeoplesService } from './../../services/peoples.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bne-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {

  dataSource: Array<People> | any = [];
  displayedColumns: string[] = ['Id', 'Name', 'RegisterDate', 'City', 'State', 'IsActive', 'Balance'];

  constructor(
    private peopleService: PeoplesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }

  /**
   * Consome o service e traz todos os dados
   */
  getPeople(){
    this.peopleService.getAll().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res);
      },
      (error: any) => {
        console.error("ERRO: ", error);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  onFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
