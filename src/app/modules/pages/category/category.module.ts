import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: CategoryComponent
    }
];

@NgModule({
    declarations: [
        CategoryComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class CategoryModule
{
}
