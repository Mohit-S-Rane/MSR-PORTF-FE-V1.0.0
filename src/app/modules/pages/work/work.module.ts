import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { MsrCardModule } from '@msr/components/card';
import { WorkComponent } from './work.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: WorkComponent
    }
];

@NgModule({
    declarations: [
        WorkComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MsrCardModule,
        MatIconModule
    ]
})
export class WorkModule
{
}
