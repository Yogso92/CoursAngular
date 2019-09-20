import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-ex2-confirm-dialog',
  templateUrl: './ex2-confirm-dialog.component.html',
  styleUrls: ['./ex2-confirm-dialog.component.scss']
})
export class Ex2ConfirmDialogComponent implements OnInit {

  constructor(private nbDialogRef: NbDialogRef<Ex2ConfirmDialogComponent>) { }

  ngOnInit() {
  }
  yes(){

    this.nbDialogRef.close({confirmed: true});

  }
  no(){
    this.nbDialogRef.close({confirmed: false});
  }

}
