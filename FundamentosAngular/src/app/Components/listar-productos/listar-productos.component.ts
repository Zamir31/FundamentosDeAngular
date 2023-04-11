import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/Models/Producto';
import { ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listaProductos: IProducto[] = [];

  constructor( private productosService: ProductosService){

  }
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productosService.getProductos().subscribe(data => {
      console.log(data);
      this.listaProductos = data;
      console.log(this.listaProductos);
    });
  }

  eliminarProducto(id?: string): void {
    this.productosService.deleteProducto(id).subscribe(data => {
      this.ngOnInit();
    });
  }

}
