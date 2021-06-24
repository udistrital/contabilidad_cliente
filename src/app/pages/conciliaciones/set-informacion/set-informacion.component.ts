import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'ngx-set-informacion',
  templateUrl: './set-informacion.component.html',
  styleUrls: ['./set-informacion.component.scss']
})
export class SetInformacionComponent implements OnInit {

  informacionConciliacionGroup: FormGroup;
  prueba = 'Prueba';

  // excel
  spinnerEnabled = false;
  keys: string[];
  dataSheet = new Subject();
  @ViewChild('inputFile', { static: false }) inputFile: ElementRef;
  @ViewChild('inputFile2', { static: false }) inputFile2: ElementRef;

  isExcelFile: boolean;

  constructor(
    private fb: FormBuilder,
    private conciliacionesHelper: ConciliacionesHelper
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.informacionConciliacionGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      centroGestor: ['', Validators.required, ],
      fecha: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      cuentaContable: ['', Validators.required, ],
    });
  }

  esInvalido(nombre: string) {
    const input = this.informacionConciliacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  onChange(evt) {
    let data, header;
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length > 1) {
      this.inputFile.nativeElement.value = '';
    }
    if (this.isExcelFile) {
      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        data = XLSX.utils.sheet_to_json(ws);
      };

      reader.readAsBinaryString(target.files[0]);

      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(data[0]);
        this.dataSheet.next(data);
      };
    } else {
      this.inputFile.nativeElement.value = '';
    }
  }

  removeData(file: string) {
    if (file === '1') {
      this.inputFile.nativeElement.value = '';
      this.dataSheet.next(null);
      this.keys = null;
    } else {
      this.inputFile2.nativeElement.value = '';
      this.dataSheet.next(null);
      this.keys = null;
    }

  }

  saveForm() {
    if (this.informacionConciliacionGroup.invalid) {
      return Object.values(this.informacionConciliacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
