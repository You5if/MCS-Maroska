import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { StyleDirective } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { matDrawerAnimations } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { AppGlobals } from 'src/app/app.global';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { LoginModule } from 'src/app/components/security/auth/login/login.model';
import { ChangePasswordNewComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-system-navigation',
  templateUrl: './system-navigation.component.html',
  styleUrls: ['./system-navigation.component.scss']
})
export class SystemNavigationComponent implements OnInit {

  showFiller = false;
  openPanel1: boolean;
  openPanel2: boolean;
  openPanel3: boolean;
  showButton: boolean = false;
  key!: number;
  lang: string = "Arabic";
  direction: Direction = "ltr";
  lang_LS: string = "16001";
  break: boolean = true;
  title = 'SystemHR1';
  home!: string;
  businessP!: string;
  profile!:string;
  journal!: string;
  expense!: string;
  purchase!: string;
  tax!: string;
  forex!: string;
  account!: string;
  paymentFromCompany!: string;
  paymentToCompany!: string;
  proExpense!: string;
  proInv!: string;
  proExpenseList!: string;
  invoice!: string;
  bank!: string;
  bankBranch!: string;
  bankAccount!: string;
  cheque!: string;
  cheque2!: string;
  fym!:string;
  customer!: string;
  accountConfiguration!: string;
  accounting!: string;
  config!: string;
  supplier!: string;
  suppForex!:string
  sales!: string;
  inventory!: string;
  product!: string;
  productCategory!: string;
  productGroup!: string;
  productUnit!: string;
  productPricing!: string;
  productStock!: string;
  productUnitConversion!: string;
  warehouse!: string;
  stockIn!: string;
  stockMovement!: string;
  fiscalYear!: string;
  accountOpen!: string;
  StockOpen!: string;
  CustOpen!: string;
  SuppOpen!: string;
  logout!: string;
  change!: string;
  reports!: string
  financialReports!: string;
  salesReports!: string;
  purchaseReports!: string;
  changePassword!: string;
  inventoryReports!: string;
  resizeStyle: object = {};

  isOpen_YourVariable = true;
  

  navigation!: string;
  role = localStorage.getItem("role");
  

  model: LoginModule = {
    'username': 'milesh@markoncs.com',
    'password': '123456789',
    'loginType': 1
  }
  forexManagement: string;
  userName: any;
  userEmail: any;
  openPanel4: boolean;
  openPanel5: boolean;
  openPanel6: boolean;

  constructor(private _globals: AppGlobals,
    public dialog: MatDialog,
    private _auth: AuthService,
    private router: Router,) { }
    


ngOnInit(): void {

  this.openPanel1 = false
  this.openPanel2 = false
  this.openPanel3 = false
  this.openPanel4 = false
  this.openPanel5 = false
  this.openPanel6 = false

  this.userName = this._auth.getUserName();
  this.userEmail = this._auth.getUniqueName();

  this.role = localStorage.getItem("role");
  console.log(this.role);
  this.userName = this._auth.getUserName()
  

  this.resizeStyle = {
    "max-width": `30%`,
  };
  this.home = "Home"
      this.businessP = "Company profile"
      this.journal = "Journal"
      this.expense = "Expenses"
      this.bank = "Bank"
      this.profile = "Profile"
      this.invoice = "POS"
      this.bankBranch = "Bank branch"
      this.proExpense = "Procurement expenses"
      this.proInv = "Purchase invoice"
      this.proExpenseList = "Procurement expense list"
      this.bankAccount = "Bank account"
      this.forexManagement = "Forex management"
      this.reports = "Reports"
      this.changePassword = "Change password"
      this.paymentFromCompany = "Payment to supplier"
      this.paymentToCompany = "Customer payment"
      this.accountConfiguration = "Account configuration"
      this.suppForex = "Purchase Forex"
      this.tax = "Tax"
      this.forex = "Forex"
      this.fym = "Financial year management"
      this.customer = "Customer"
      this.account = "Account"
      this.accounting = "Accounting"
      this.config = "Configurations"
      this.fiscalYear = "Fiscal year"
      this.accountOpen = "Account opening balance"
      this.StockOpen = "Stock opening"
      this.CustOpen = "Customer opening balance"
      this.SuppOpen = "Supplier opening balance"
      this.sales = "Sales"
      this.inventory = "Inventory"
      this.product = "Item"
      this.productCategory = "Item category"
      this.productGroup = "Item group"
      this.productUnit = "Item unit"
      this.productPricing = "Item pricing"
      this.productStock = "Item stock"
      this.productUnitConversion = "Item unit conversion"
      this.warehouse = "Warehouse"
      this.stockIn = "Stock in"
      this.supplier = "Supplier"
      this.purchase = "Purchase"
      this.stockMovement = "Stock movement"
      this.financialReports = "Financial reports"
      this.salesReports = "Sales reports"
      this.purchaseReports = "Purchase reports"
      this.inventoryReports = "Inventory reports"
      this.cheque = "Cheques"
      this.cheque2 = "Cheque from"
      this.logout = "Logout"
      this.change = "Language:"
  
  localStorage.setItem(this._globals.baseAppName + '_language', this.lang_LS);
  var header = document.getElementById("myDIV");
var btns = header!.getElementsByClassName("side_list_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", ()=> {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[0].className += " active";
  });
}
  console.log(this.navigation);
    this.break =
    window.innerWidth <= 740
      ? false
      : true;
  }

  openPanels(id: number) {
    if (id == 1) {
      this.openPanel1 = true
      this.openPanel2 = false
      this.openPanel3 = false
      this.openPanel4 = false
      this.openPanel5 = false
      this.openPanel6 = false
    }else if (id == 2) {
      this.openPanel1 = false
      this.openPanel2 = true
      this.openPanel3 = false
      this.openPanel4 = false
      this.openPanel5 = false
      this.openPanel6 = false
    }else if (id == 3) {
      this.openPanel1 = false
      this.openPanel2 = false
      this.openPanel3 = true
      this.openPanel4 = false
      this.openPanel5 = false
      this.openPanel6 = false
    }else if (id == 4) {
      this.openPanel1 = false
      this.openPanel2 = false
      this.openPanel3 = false
      this.openPanel4 = true
      this.openPanel5 = false
      this.openPanel6 = false
    }else if (id == 5) {
      this.openPanel1 = false
      this.openPanel2 = false
      this.openPanel3 = false
      this.openPanel4 = false
      this.openPanel5 = true
      this.openPanel6 = false
    }else if (id == 6) {
      this.openPanel1 = false
      this.openPanel2 = false
      this.openPanel3 = false
      this.openPanel4 = false
      this.openPanel5 = false
      this.openPanel6 = true
    }
  }

  onSignOut() {
    this._auth.logout();
  }

  onBusiness(name: string) {
    this.navigation = "Home"
    localStorage.getItem(this._globals.baseAppName + '_nav');
    var header = document.getElementById("myDIV");
var btns = header!.getElementsByClassName("side_list_item");
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[0].className += " active";
  
  
}

onToggle() {
  this.break = !this.break
}

onClickHome() {
  this.router.navigate(['System/Home']);
}
  
checkEng(){
  return (localStorage.getItem(this._globals.baseAppName + '_language') == '16002')
    
}

  onChangePassword  () {
    
    const dialogRef = this.dialog.open(ChangePasswordNewComponent, {
      disableClose: true,
      
      data: {}
    });
  
  dialogRef.afterClosed().subscribe(() => {});
};

  onChangeLanguage() {
    this.navigation = "Home"
    this.router.navigate(['System/Home']);
    var header = document.getElementById("myDIV");
    var btns = header!.getElementsByClassName("side_list_item");
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      btns[0].className += " active";
    if (localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      this.lang = "Arabic"
      this.direction = "ltr"
      this.home = "Home"
      this.businessP = "Company profile"
      this.forexManagement = "Forex management"
      this.journal = "Journal"
      this.expense = "Expenses"
      this.paymentFromCompany = "Payment to supplier"
      this.paymentToCompany = "Customer payment"
      this.tax = "Tax"
      this.changePassword = "Change password"
      this.invoice = "POS"
      this.bank = "Bank"
      this.fym = "Financial year management"
      this.purchase = "Purchase"
      this.bankBranch = "Bank branch"
      this.bankAccount = "Bank account"
      this.forex = "Forex"
      this.customer = "Customer"
      this.proExpense = "Procurement expenses"
      this.proInv = "Purchase invoice"
      this.proExpenseList = "Procurement expense list"
      this.accountConfiguration = "Account configuration"
      this.account = "Account"
      this.accounting = "Accounting"
      this.config = "Configurations"
      this.sales = "Sales"
      this.fiscalYear = "Fiscal year"
      this.accountOpen = "Account opening balance"
      this.StockOpen = "Stock opening"
      this.CustOpen = "Customer opening balance"
      this.SuppOpen = "Supplier opening balance"
      this.inventory = "Inventory"
      this.product = "Item"
      this.profile = "Profile"
      this.supplier = "Supplier"
      this.reports = "Reports"
      this.suppForex = "Purchase forex"
      this.productCategory = "Item category"
      this.productGroup = "Item group"
      this.productUnit = "Item unit"
      this.productPricing = "Item pricing"
      this.productStock = "Item stock"
      this.productUnitConversion = "Item unit conversion"
      this.warehouse = "Warehouse"
      this.stockIn = "Stock in"
      this.stockMovement = "Stock movement"
      this.financialReports = "Financial reports"
      this.salesReports = "Sales reports"
      this.purchaseReports = "Purchase reports"
      this.inventoryReports = "Inventory reports"
      this.cheque = "Cheques"
      this.cheque2 = "Cheque from"
      this.logout = "Logout"
      this.change = "Language:"
      
      
      this.lang_LS = "16001"
    }else if (localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      this.lang = "????????????????????"
      this.lang_LS = "16002"
      this.direction = "rtl"
      this.home = " ???????????????? "
      this.businessP = "???????? ????????????"
      this.journal = "??????????????"
      this.invoice = "POS"
      this.forexManagement = "?????????? ??????????????"
      this.bank = "??????????"
      this.reports = "????????????????"
      this.paymentFromCompany = "?????????? ?????? ????????????"
      this.suppForex = "?????????? ????????????"
      this.paymentToCompany = "?????????? ?????? ????????????"
      this.bankBranch = "?????? ??????????"
      this.bankAccount = "???????? ??????????"
      this.accountConfiguration = "?????????? ????????????????"
      this.expense = "??????????????????"
      this.tax = "??????????????"
      this.changePassword = "?????????? ???????? ????????"
      this.customer = "????????????"
      this.forex = "??????????"
      this.fym = "?????????? ?????????? ??????????????"
      this.account = "????????????????"
      this.purchase = "???????????? ????????????"
      this.accounting = "????????????????"
      this.proExpense = "???????? ??????????????????"
      this.proInv = "???????????? ????????????"
      this.proExpenseList = "?????????? ???????? ??????????????????"
      this.config = "??????????????????"
      this.sales = "????????????????"
      this.inventory = "??????????????"
      this.profile = "?????? ????????????????"
      this.supplier = "????????????"
      this.product = "????????????????"
      this.fiscalYear = "?????????? ??????????????"
      this.accountOpen = "???????? ?????? ????????????"
      this.StockOpen = "???????????? ??????????????"
      this.CustOpen = "???????????? ?????????????????? ????????????"
      this.SuppOpen = "???????????? ?????????????????? ????????????"
      this.productCategory = "?????????? ????????????????"
      this.productGroup = "?????????????? ????????????????"
      this.productUnit = "?????????? ????????????????"
      this.productPricing = "???????????? ????????????????"
      this.productStock = "?????????? ????????????????"
      this.productUnitConversion = "?????????? ???????? ????????????????"
      this.warehouse = "??????????????"
      this.stockIn = "?????????????? ????????????"
      this.stockMovement = "?????????????? ????????????"
      this.cheque = "??????????????"
      this.cheque2 = "?????????????? ????"
      this.financialReports = "???????????????? ??????????????"
      this.salesReports = "???????????? ????????????????"
      this.purchaseReports = "???????????? ????????????"
      this.inventoryReports = "???????????? ??????????????"
      this.logout = "?????????? ????????????"
      this.change = "??????????:"
    }else if (localStorage.getItem(this._globals.baseAppName + '_language') == "") {
      this.lang = "Arabic"
      this.direction = "ltr"
      this.home = "Home"
      this.businessP = "Business Profile"
      this.journal = "journal"
      this.invoice = "POS"
      this.paymentFromCompany = "Company payment"
      this.paymentToCompany = "Customer payment"
      this.forexManagement = "Forex management"
      this.expense = "Expenses"
      this.customer = "Customer"
      this.accountConfiguration = "Account Configuration"
      this.tax = "Tax"
      this.changePassword = "Change password"
      this.fym = "Financial year management"
      this.fiscalYear = "Fiscal year"
      this.accountOpen = "Account opening balance"
      this.StockOpen = "Stock opening"
      this.CustOpen = "Customer opening balance"
      this.SuppOpen = "Supplier opening balance"
      this.proExpense = "Procurement expenses"
      this.proInv = "Purchase invoice"
      this.proExpenseList = "Procurement expense list"
      this.suppForex = "Purchase forex"
      this.forex = "Forex"
      this.account = "Account"
      this.reports = "Reports"
      this.accounting = "Accounting"
      this.config = "Configurations"
      this.sales = "Sales"
      this.profile = "Profile"
      this.inventory = "Inventory"
      this.financialReports = "Financial reports"
      this.salesReports = "Sales reports"
      this.purchaseReports = "Purchase reports"
      this.inventoryReports = "Inventory reports"
      this.supplier = "Supplier"
      this.product = "Item"
      this.purchase = "Purchase"
      this.productCategory = "Item category"
      this.productGroup = "Item group"
      this.productUnit = "Item unit"
      this.productPricing = "Item pricing"
      this.productStock = "Item stock"
      this.productUnitConversion = "Item unit conversion"
      this.warehouse = "Warehouse"
      this.stockIn = "Stock in"
      this.stockMovement = "Stock movement"
      this.cheque = "Cheques"
      this.cheque2 = "Cheque from"
      this.logout = "Logout"
      this.change = "Change to:"
      
      this.lang_LS = "16001"
    }
    localStorage.setItem(this._globals.baseAppName + '_language', this.lang_LS);
    console.log("lang: ",localStorage.getItem(this._globals.baseAppName + '_language'))
  }

  onResize(event: any){
    this.break =
    window.innerWidth <= 740
      ? false
      : true;
  }
  resizeValidate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  resizeEdges(){
    if(localStorage.getItem(this._globals.baseAppName + '_language') == '16001'){
      return {right: true}
    } else {return{left: true}}
  }
 
                    /**
                     * Finilizes resize positions
                     * (used for drawer/sidenav width)
                     * @param event 
                     */
  onResizeEnd(event: ResizeEvent): void {
    this.resizeStyle = {
                     // enable/disable these per your needs
      // position: 'fixed',
      // left: `${event.rectangle.left}px`,
      // top: `${event.rectangle.top}px`,
      // height: `${event.rectangle.height}px`,
      width: `${event.rectangle.width}px`,
    };
  }

}
