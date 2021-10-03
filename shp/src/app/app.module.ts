import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './communication.service';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
