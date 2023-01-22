import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WallComponent } from './wall.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: WallComponent
    }
];

@NgModule({
    declarations: [
        WallComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class WallModule
{
}
