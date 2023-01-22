import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: AboutComponent
    }
];

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class AboutModule
{
}
