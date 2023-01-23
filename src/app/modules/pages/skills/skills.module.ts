import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Route, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { MsrCardModule } from '@msr/components/card';

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
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        MatProgressBarModule,
        MatDividerModule,
        MatMenuModule,
        MsrCardModule
    ]
})
export class SkillsModule
{
}
