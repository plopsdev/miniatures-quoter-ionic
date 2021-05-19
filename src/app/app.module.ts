import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScalesManagerComponent } from './scales-manager/scales-manager.component';
import { ScaleDetailsComponent } from './scale-details/scale-details.component';
import { ScaleAddComponent } from './scale-add/scale-add.component';
import { ScaleEditComponent } from './scale-edit/scale-edit.component';

@NgModule({
  declarations: [AppComponent, ScalesManagerComponent, ScaleDetailsComponent, ScaleAddComponent, ScaleEditComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
