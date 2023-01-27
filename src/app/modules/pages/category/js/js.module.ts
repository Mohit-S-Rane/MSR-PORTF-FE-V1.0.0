import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { JsCategoryComponent } from './js.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: JsCategoryComponent
    }
];

@NgModule({
    declarations: [
        JsCategoryComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class JsCategoryModule
{
}
