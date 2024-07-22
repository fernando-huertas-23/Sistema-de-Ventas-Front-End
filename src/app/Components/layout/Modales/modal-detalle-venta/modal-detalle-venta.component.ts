import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Venta } from 'src/app/Interfaces/venta';
import { DetalleVenta } from 'src/app/Interfaces/detalle-venta';


@Component({
  selector: 'app-modal-detalle-venta',
  templateUrl: './modal-detalle-venta.component.html',
  styleUrls: ['./modal-detalle-venta.component.css']
})
export class ModalDetalleVentaComponent implements OnInit{

  fechaRegistro: String = '';
  numeroDocumento: String = '';
  tipoPago: String = '';
  total: String = '';
  detalleVenta: DetalleVenta[] = [];
  columnasTabla: String[] = ['producto','cantidad','precio','total']

  constructor(@Inject(MAT_DIALOG_DATA) public _venta:Venta){

    this.fechaRegistro = _venta.fechaRegistro!;
    this.numeroDocumento = _venta.numeroDocumento!;
    this.tipoPago = _venta.tipoPago;
    this.total = _venta.totalTexto;
    this.detalleVenta = _venta.detalleVenta;

  }

  ngOnInit(): void {
      
  }

}
