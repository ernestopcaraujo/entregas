import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ComidasComponent } from './comidas/comidas.component';
import { BebidasComponent } from './bebidas/bebidas.component';

const routes: Routes=[
    {path:'', component: ConteudoComponent},
    {path:'comidas', component: ComidasComponent},
    {path:'bebidas', component: BebidasComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
