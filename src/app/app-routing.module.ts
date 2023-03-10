import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangePasswordComponent } from "./components/security/user/change-password/change-password.component";
import { DashboardComponent } from "./components/dynamic/dashboard/dashboard.component";
import { LoginComponent } from "./components/security/auth/login/login.component";
import { WelcomeComponent } from "./components/dynamic/welcome/welcome.component";
import { AuthGuard } from "./components/security/auth/auth-guard";
import { CountryComponent } from "./components/security/admin/regional/country/country.component";
import { CityComponent } from "./components/security/admin/regional/city/city.component";
import { ReportPageComponent } from "./components/PR/report-page/report-page.component";
import { NotActivatedComponent } from "./components/dynamic/notactivated/notactivated.component";
import { SignUpComponent } from "./components/security/signup/signup.component";
import { AccountActivatedComponent } from "./components/dynamic/accountactivated/accountactivated.component";
import { RegistrationExpiredComponent } from "./components/dynamic/registrationexpired/registrationexpired.component";
import { ChangePasswordAnonComponent } from "./components/dynamic/change-passwordanon/change-passwordanon.component";
import { SDBatchVehicleEntryComponent } from "./components/AlaadinShipping/sdbatchvehicleentry/sdbatchvehicleentry.component";
import { SDVehicleDetailComponent } from "./components/AlaadinShipping/sdvehicledetail/sdvehicledetail.component";
import { SDShippingLineCompaniesComponent } from "./components/AlaadinShipping/sdshippinglinecompanies/sdshippinglinecompanies.component";
import { SDDispatchPlanComponent } from "./components/AlaadinShipping/sddispatchplan/sddispatchplan.component";
import { SDDispatchPlanExpenseComponent } from "./components/AlaadinShipping/sddispatchplanexpense/sddispatchplanexpense.component";
import { SignUpContComponent } from "./components/security/signupcont/signup.component";
// import { LoginAppComponent } from "./components/security/auth/loginapp/login.component";
// import { LoginGoogleComponent } from "./components/security/auth/logingoogle/login.component";
import { SDCarMakeComponent } from "./components/AlaadinShipping/sdcarmake/sdcarmake.component";
import { SDCarModelComponent } from "./components/AlaadinShipping/sdcarmodel/sdcarmodel.component";
// import { SDUserComponent } from "./components/AlaadinShipping/sduser/sduser.component";
import { SDDispatchPlanPaymentComponent } from "./components/AlaadinShipping/sddispatchplanpayment/sddispatchplanpayment.component";
import { SDCompanyComponent } from "./components/AlaadinShipping/sdcompany/sdcompany.component";
import { AdminGuard } from "./components/security/Guard/admin.guard";
import { StaffGuard } from "./components/security/Guard/staff.guard";
// import { ReportPageEmailComponent } from "./components/PR/report-pageemail/report-pageemail.component";

import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { SystemNavigationComponent } from "./system/system-navigation/system-navigation.component";
import { AccountComponent } from "./system/account/account.component";
import { ChequeFromCompanyComponent } from "./system/AnotherComponents/chequefromcompany/chequetocompany.component";
import { ChequeToCompanyComponent } from "./system/AnotherComponents/chequetocompany/chequetocompany.component";
import { CompanyBankComponent } from "./system/AnotherComponents/companybank/companybank.component";
import { CompanyBankBranchComponent } from "./system/AnotherComponents/companybankbranch/companybankbranch.component";
import { CompanyBankBranchAccountComponent } from "./system/AnotherComponents/companybankbranchaccount/companybankbranchaccount.component";
import { InvoiceComponent } from "./system/AnotherComponents/invoice/invoice.component";
import { PaymentfromComponent } from "./system/AnotherComponents/paymentfrom/paymenttocompany.component";
import { PaymentToCompanyComponent } from "./system/AnotherComponents/paymenttocompany/paymenttocompany.component";
import { ProductPricingComponent } from "./system/AnotherComponents/productpricing/productpricing.component";
import { StockInComponent } from "./system/AnotherComponents/stockin/stockin.component";
import { StockMovementComponent } from "./system/AnotherComponents/stockmovement/stockmovement.component";
import { ExpenseFilingComponent } from "./system/expensefiling/expensefiling/expensefiling.component";
import { ForexComponent } from "./system/forex/forex.component";
import { AccountConfigurationComponent } from "./system/GeneratedComponents01Apr/accountconfiguration/accountconfiguration.component";
import { CustomerComponent } from "./system/GeneratedComponents01Apr/customer/customer.component";
import { ProductComponent } from "./system/GeneratedComponents01Apr/product/product.component";
import { ProductCategoryComponent } from "./system/GeneratedComponents01Apr/productcategory/productcategory.component";
import { ProductGroupComponent } from "./system/GeneratedComponents01Apr/productgroup/productgroup.component";
import { ProductStockComponent } from "./system/GeneratedComponents01Apr/productstock/productstock.component";
import { ProductUnitComponent } from "./system/GeneratedComponents01Apr/productunit/productunit.component";
import { ProductUnitConversionComponent } from "./system/GeneratedComponents01Apr/productunitconversion/productunitconversion.component";
import { WareHouseComponent } from "./system/GeneratedComponents01Apr/warehouse/warehouse.component";
import { JournalEntryComponent } from "./system/journalentry/journalentry.component";
import { ProcExpenseComponent } from "./system/procexpense/procexpense.component";
import { SuppInvoiceComponent } from "./system/suppinvoice/suppinvoice.component";
import { SuppInvProcComponent } from "./system/suppinvproc/suppinvproc.component";
import { SupplierComponent } from "./system/supplier/supplier.component";
import { SystemBusinessProfileComponent } from "./system/system-business-profile/system-business-profile.component";
import { SystemHomeComponent } from "./system/system-home/system-home.component";
import { TaxComponent } from "./system/tax/tax.component";
import { ReportComponent } from "./report/report.component";
// import { SystemHomeComponent } from "./system/system-home/system-home.component";
// import { ChequeFromCompanyComponent } from "./system/AnotherComponents/chequefromcompany/chequetocompany.component";
// import { ChequeToCompanyComponent } from "./system/AnotherComponents/chequetocompany/chequetocompany.component";
// import { AccountComponent } from "./system/account/account.component";
// import { ExpenseFilingComponent } from "./system/expensefiling/expensefiling/expensefiling.component";
// import { ForexComponent } from "./system/forex/forex.component";
// import { AccountConfigurationComponent } from "./system/GeneratedComponents01Apr/accountconfiguration/accountconfiguration.component";
// import { CustomerComponent } from "./system/GeneratedComponents01Apr/customer/customer.component";
// import { ProductComponent } from "./system/GeneratedComponents01Apr/product/product.component";
// import { JournalEntryComponent } from "./system/journalentry/journalentry.component";
// import { SystemBusinessProfileComponent } from "./system/system-business-profile/system-business-profile.component";
// import { TaxComponent } from "./system/tax/tax.component";
// import { CompanyBankComponent } from "./system/AnotherComponents/companybank/companybank.component";
// import { CompanyBankBranchComponent } from "./system/AnotherComponents/companybankbranch/companybankbranch.component";
// import { CompanyBankBranchAccountComponent } from "./system/AnotherComponents/companybankbranchaccount/companybankbranchaccount.component";
// import { InvoiceComponent } from "./system/AnotherComponents/invoice/invoice.component";
// import { ProductCategoryComponent } from "./system/GeneratedComponents01Apr/productcategory/productcategory.component";
// import { ProductGroupComponent } from "./system/GeneratedComponents01Apr/productgroup/productgroup.component";
// import { PaymentfromComponent } from "./system/AnotherComponents/paymentfrom/paymenttocompany.component";
// import { PaymentToCompanyComponent } from "./system/AnotherComponents/paymenttocompany/paymenttocompany.component";
// import { ProductPricingComponent } from "./system/AnotherComponents/productpricing/productpricing.component";
// import { StockInComponent } from "./system/AnotherComponents/stockin/stockin.component";
// import { StockMovementComponent } from "./system/AnotherComponents/stockmovement/stockmovement.component";
// import { ProductUnitComponent } from "./system/GeneratedComponents01Apr/productunit/productunit.component";
// import { ProductUnitConversionComponent } from "./system/GeneratedComponents01Apr/productunitconversion/productunitconversion.component";
// import { WareHouseComponent } from "./system/GeneratedComponents01Apr/warehouse/warehouse.component";
// import { ProductStockComponent } from "./system/GeneratedComponents01Apr/productstock/productstock.component";
// import { SupplierComponent } from "./system/supplier/supplier.component";
// import { ProcExpenseComponent } from "./system/procexpense/procexpense.component";
// import { SuppInvProcComponent } from "./system/suppinvproc/suppinvproc.component";
// import { SuppInvoiceComponent } from "./system/suppinvoice/suppinvoice.component";


const routes: Routes = [
  { path: "", component: LoginComponent },
  
  
  {
    path: "welcome",
    component: WelcomeComponent,
    data: { title: "Premium Quality Shipping" },
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login to get access to an instant service" },
  },
  
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      // { path: "dashboard", component: DashboardComponent },
      { path: "dynamic", component: DynamicFormComponent },
      { path: "System", component: SystemNavigationComponent,
       children:[
        { path: '', redirectTo: 'Home', pathMatch: 'full' },
        { path: "Home", component: SystemHomeComponent},
        { path: "cheque", component: ChequeToCompanyComponent},
        { path: "chequeFrom", component: ChequeFromCompanyComponent},
        { path: "BusinessProfile", component: SystemBusinessProfileComponent},
        { path: "Tax", component: TaxComponent},
        { path: "Account", component: AccountComponent},
        { path: "Forex", component: ForexComponent},
        { path: "JournalEntry", component: JournalEntryComponent},
        { path: "Expense", component: ExpenseFilingComponent},
        { path: "AccountConfig", component: AccountConfigurationComponent},
        { path: "Customer", component: CustomerComponent},
        { path: "Product", component: ProductComponent},
        { path: "ProductCat", component: ProductCategoryComponent},
        { path: "ProductGroup", component: ProductGroupComponent},
        { path: "PaymentFromCompany", component: PaymentfromComponent},
        { path: "PaymentToCompany", component: PaymentToCompanyComponent},
        { path: "ProductPricing", component: ProductPricingComponent},
        { path: "StockIn", component: StockInComponent},
        { path: "StockMovement", component: StockMovementComponent},
        { path: "ProductUnit", component: ProductUnitComponent},
        { path: "ProductStock", component: ProductStockComponent},
        { path: "ProductUnitConverstion", component: ProductUnitConversionComponent},
        { path: "WareHouse", component: WareHouseComponent},
        { path: "Bank", component: CompanyBankComponent},
        { path: "BankBranch", component: CompanyBankBranchComponent},
        { path: "BankAccount", component: CompanyBankBranchAccountComponent},
        { path: "Invoice", component: InvoiceComponent},
        { path: "Supplier", component: SupplierComponent},
        { path: "ProcurmentExpense", component: SuppInvProcComponent},
        { path: "ProcurmentExpenseList", component: ProcExpenseComponent},
        { path: "ProcurmentInvoice", component: SuppInvoiceComponent},
        { path: "Reports", component: ReportComponent},
        
 
        
      ] 
    },
      
      //  { path: 'dohinv', component: InventoriesComponent },
      {
        path: "signup",
        component: SignUpComponent,
        data: { title: "Create an account for the best services" },
        canActivate: [AdminGuard],
      },
      {
        path: "report",
        component: ReportPageComponent,
      },
      // { path: 'sdvhclebatch', component: SDBatchVehicleEntryComponent, data: { title: 'Get your vehicle deliveried' } },
      
      
    ],
  },
  { path: "**", redirectTo: "welcome", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
