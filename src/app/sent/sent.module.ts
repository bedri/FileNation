import {NgModule} from '@angular/core'
import {SentComponent} from './sent.component'
import {Routes, RouterModule} from '@angular/router'

const ROUTES: Routes = [ {path: '', component: SentComponent} ]

@NgModule({
    declarations: [SentComponent],
    imports: [ RouterModule.forChild(ROUTES)]
})

export class SentModule{}
