import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestService } from './shared/test.service'
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { KidComponent } from './components/kid/kid.component';
import { GraphicDesignComponent } from './components/graphic-design/graphic-design.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    KidComponent,
    GraphicDesignComponent
  ],
  imports: [
    BrowserModule
      .withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'kid', component: KidComponent },
      { path: 'graphic-design', component: GraphicDesignComponent }
    ])
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
