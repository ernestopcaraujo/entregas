import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ComidasComponent } from './comidas/comidas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConteudoComponent,
    FooterComponent,
    ComidasComponent,
    BebidasComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
