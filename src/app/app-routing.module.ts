import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './common/about/about.component';
import { BambooComponent } from './common/bamboo/bamboo.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
//import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { EventdetailsComponent } from './common/eventdetails/eventdetails.component';
import { GreivanceregistrationComponent } from './common/greivanceregistration/greivanceregistration.component';
import { KenduleafComponent } from './common/kenduleaf/kenduleaf.component';
import { MasterPlanComponent } from './common/master-plan/master-plan.component';
import { PhotoGalleryComponent } from './common/photo-gallery/photo-gallery.component';
import { PlantationComponent } from './common/plantation/plantation.component';
import { ResearchComponent } from './common/research/research.component';
import { RoundtimberComponent } from './common/roundtimber/roundtimber.component';
import { SawntimberComponent } from './common/sawntimber/sawntimber.component';
import { SiteclearanceComponent } from './common/siteclearance/siteclearance.component';
import { StockavailabilityComponent } from './common/stockavailability/stockavailability.component';
import { TenderComponent } from './common/tender/tender.component';
import { TenderfilesComponent } from './common/tenderfiles/tenderfiles.component';
import { TimberfirewoodComponent } from './common/timberfirewood/timberfirewood.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
},
{
  path:'aboutus',
  component:AboutComponent
},
{
  path:'bamboo',
  component:BambooComponent
},
{
  path:'kenduleaf',
  component:KenduleafComponent
},
{
  path:'tender',
  component:TenderComponent
},
{
  path:'plan',
  component:MasterPlanComponent
},
{
  path:'sawntimber',
  component:SawntimberComponent
},
{
  path:'roundtimber',
  component:RoundtimberComponent
},
{
  path:'research',
  component:ResearchComponent
},
{
  path:'plantation',
  component:PlantationComponent
},
{
  path:'siteclearance',
  component:SiteclearanceComponent
},
{
  path:'timberfirewood',
  component:TimberfirewoodComponent
},
{
  path:'contact',
  component: ContactUsComponent
},
{
  path:'photos',
  component:PhotoGalleryComponent
},
{
  path:'eventdetails',
  component:EventdetailsComponent
},
{
  path:'career',
  component:CareerComponent
},
{
  path:'stockavailability',
  component:StockavailabilityComponent
},
{
  path:'tenderfiles', 
  component:TenderfilesComponent
},
{
  path:'greivanceregistration',
  component:GreivanceregistrationComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
