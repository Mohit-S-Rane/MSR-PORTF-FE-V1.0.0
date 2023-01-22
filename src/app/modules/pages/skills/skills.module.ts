import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: SkillsComponent
    }
];

@NgModule({
    declarations: [
        SkillsComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class SkillsModule
{
}
