import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient} from '@angular/common/http';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTablePipe } from './pipes/filter-table.pipe';
import { CustomTablePipe } from './pipes/custom-table.pipe';
import { MultiPipePipe } from './pipes/multi-pipe.pipe';
import { TimeRangePipe } from './pipes/time-range.pipe';
import { CompoundCellComponent } from './components/compound-cell/compound-cell.component';
import { CellViewComponent } from './components/cell-view/cell-view.component';


@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    TableComponent,
    CellViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TableComponent,
    FilterTablePipe,
    CustomTablePipe,
    MultiPipePipe,
    TimeRangePipe,
    CompoundCellComponent, CellViewComponent],
    providers: [
      DatePipe,
      CurrencyPipe,
      DecimalPipe,
      PercentPipe,
      CustomTablePipe,
      TimeRangePipe,
    ]
})

export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

