import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalDisplayComponent } from './animal-display/animal-display.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { AnimalAddComponent } from './animal-add/animal-add.component';
import { AgePipe } from './age.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AnimalDisplayComponent,
    AnimalEditComponent,
    AnimalAddComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
