import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { Ex2ConfirmDialogComponent } from '../ex2-confirm-dialog/ex2-confirm-dialog.component';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  private template : string;
  private _listProduct : Product[];
  public get listProduct() : Product[] {
    return this._listProduct;
  }
  public set listProduct(v : Product[]) {
    this._listProduct = v;
  }
  
  
  
  public get inputIsEmpty() : boolean {
    return (this.input.length == 0);
  }
  
	
	public get $input(): string {
		return this.input;
	}

	public set $input(value: string) {
		this.input = value;
	}
  private input : string; //bound to input
  constructor(private dialogService: NbDialogService) { 
    this.input = "";
    this.listProduct= [];
  }
  add(){ 
    if(this.input.length>0){  
      let item = this.listProduct.find(x => x.name == this.input)
      if(item == undefined){
        this.listProduct.push(<Product>{name: this.$input, quantity: 1, isChecked: false})
      }
      else{
        item.quantity++;
      }
      
      this.input = "";
    }
    
  }
  askDelete(item: Product){
    let nbRef = this.dialogService.open(Ex2ConfirmDialogComponent, {closeOnBackdropClick: false})
    nbRef.onClose.subscribe((data) => {
      if(data.confirmed){
        this.listProduct = this.listProduct.filter((product, index) => product !== item)
      }
    });
  }
  inverseCheck(item: Product){
    item.isChecked = !item.isChecked;
  }


  ngOnInit() {

  }

}
