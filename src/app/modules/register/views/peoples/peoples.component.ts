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
import { MatSnackBar } from '@angular/material/snack-bar';

// Gerenciamento de estado
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '../../../../app.state';
import { PEOPLE_ACTION } from '../../../../reducers/peoples.reducer';

@Component({
  selector: 'bne-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  peoples: Observable<People[]>;
  dataSource = new MatTableDataSource<People>();
  isMobile: boolean;
  displayedColumns: Array<string>;
  page: number = 1;

  constructor(
    private snackBar: MatSnackBar,
    private peopleService: PeoplesService,
    private utilService: UtilService,
    private store: Store<AppState>
  ) {
    this.peoples = store.select((state) => state.peoples);
  }

  ngOnInit() {

    // Atribui valor a data e sort do grid após o resultado do subscribe
    this.peoples.subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.sort = this.sort;
    });

    this.isMobile = this.utilService.detectMobile();
    this.displayedColumns = this.isMobile ? ['Name', 'Copy'] : ['Id','Name','RegisterDate','City','State','IsActive','Balance','Copy']; // Define as colunas conforme dispositivo

    this.loadPeopleFromService(this.page);
    const wrapper: HTMLElement = document.querySelector('cdk-virtual-scroll-viewport');
    wrapper.addEventListener('scroll', () => this.addANewPage(wrapper));
  }

  /**
   * Detecta se a rolagem chegou ao final e adiciona uma nova página
   * @param element
   */
  addANewPage(element: HTMLElement) {
    const { offsetHeight, scrollTop, scrollHeight } = element;
    if (offsetHeight + scrollTop >= scrollHeight) {
      this.page += 1;
      this.loadPeopleFromService(this.page);
    }
  }

  /**
   * Informa a página e consome a api (JSON)
   * @param page
   */
  loadPeopleFromService(page: number) {
    this.peopleService.getPeople(page).subscribe(
      (res: Array<People>) => {
        this.store.dispatch({
          type: PEOPLE_ACTION.ADD,
          payload: res,
        });
      },
      (error: any) => {
        this.openSnackBar(error, 'Fechar');
      }
    );
  }

  onFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
