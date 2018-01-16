import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CourseDialogComponent} from "../course-dialog/course-dialog.component";

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {

    }

    editCourse({description, longDescription, category}:Course) {

        const dialogConfig: MatDialogConfig = {
            autoFocus: true,
            disableClose:true,
            data: {
                description,
                longDescription,
                category
            }
        };


        let dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);


        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog result: ', result);
        });

    }

}
