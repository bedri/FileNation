import {Routes} from '@angular/router'

import {SentComponent} from './sent/sent.component'
import {InputComponent} from './input/input.component'
import {HomeComponent} from './home/home.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sent', loadChildren: './sent/sent.module#SentModule'}

    // {path: '**', component: NotFoundComponent}
]
