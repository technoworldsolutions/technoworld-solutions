import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-job-dialog',
    standalone: true,
    imports: [
        MatDialogContent,
        MatDialogActions,
        MatButtonModule
    ],
    templateUrl: './job-dialog.component.html',
    styleUrls: ['./job-dialog.component.scss']
})
export class JobDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<JobDialogComponent>
    ) { }

    closeDialog() {
        this.dialogRef.close();
    }
}
