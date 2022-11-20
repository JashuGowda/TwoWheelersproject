import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BikesComponent } from './components/bikes/bikes.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { UsersComponent } from './components/users/users.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SearchbikePipe } from './searchbike.pipe';
import { UserRegisterComponent } from './components/useradminlogin/user-register/user-register.component';
import { UserLoginComponent } from './components/useradminlogin/user-login/user-login.component';
import { AdminLoginComponent } from './components/useradminlogin/admin-login/admin-login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UserfilterPipe } from './userfilter.pipe';
import { HomeComponent } from './components/useradminlogin/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BookbikeComponent } from './components/bookbike/bookbike.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BookPipe } from './book.pipe';







@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BikesComponent,
    BookingsComponent,
    UsersComponent,
    FeedbackComponent,
    SearchfilterPipe,
    SearchbikePipe,
    UserRegisterComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserdashboardComponent,
    ReviewsComponent,
    UserfilterPipe,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    BookbikeComponent,
    PaymentComponent,
    BookPipe,
  
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
