import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalContentComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
