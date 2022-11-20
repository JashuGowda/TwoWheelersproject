import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BookbikeComponent } from './components/bookbike/bookbike.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AdminLoginComponent } from './components/useradminlogin/admin-login/admin-login.component';
import { HomeComponent } from './components/useradminlogin/home/home.component';
import { UserLoginComponent } from './components/useradminlogin/user-login/user-login.component';
import { UserRegisterComponent } from './components/useradminlogin/user-register/user-register.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path:'bike',component:BikesComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'users',component:UsersComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'register',component:UserRegisterComponent},
  {path:'login',component:UserLoginComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'bookbike',component:BookbikeComponent},
  {path:'payment',component:PaymentComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
