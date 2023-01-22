import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
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
        RouterModule.forChild(exampleRoutes)
    ]
})
export class WorkModule
{
}
