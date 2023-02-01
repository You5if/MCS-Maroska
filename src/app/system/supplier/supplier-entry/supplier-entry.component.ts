import { Component, OnInit, Inject } from '@angular/core';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { CommonService } from 'src/app/components/common/common.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIResultModel } from 'src/app/components/misc/APIResult.Model';
import { Observable, of } from 'rxjs';
import { SelectModel, SelectCodeModel } from 'src/app/components/misc/SelectModel';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';
import { SelectService } from 'src/app/components/common/select.service';
import { AppGlobals } from 'src/app/app.global';
import { Send } from 'src/app/send.model';
import { Sources } from 'src/app/source.model';
import { SupplierEntryService } from './supplier-entry.service';
import { FileListModel } from 'src/app/components/common/upload/upload-file.model';
import { UploadService } from 'src/app/system/upload/upload.service';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-supplier-entry',
  templateUrl: './supplier-entry.component.html',
  styleUrls: ['./supplier-entry.component.scss']
})

export class SupplierEntryComponent implements OnInit {

	url!: string;
  checkParentAccountId!:any

  model: Send = {
    tableId: 70,
    recordId: 0,
    userId: 26,
    roleId: 2,
    languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
  };
  last: any = {
    records: [],
    auditColumn: {
      approvalStatusId: 1100001,
      companyId: 10001,
      branchId: 201,
      financialYearId: 1,
      userId: Number(this._auth.getUserId()),
      mACAddress: "unidentified",
      hostName: "unidentified",
      iPAddress: "unidentified",
      deviceType: "Win32"
    }
  }
  
    myFormGroup!: FormGroup;

    breakpoint!: number;
    checked= false;
    checkedR = false;
    disabled = false;
    sources: Sources[] = [];
    res: any;
    spacepoint: any;
    spacezone!: boolean;
    data!: Sources[];
    ver!: Sources;
    maxSize!: number;
    submit!: string;
    cancel!: string;
  
    light: Sources[] = [];
    dark: Sources[] = [];
  
    ver2!: Sources;
    ver3!: Sources;
    ver4!: Sources;
    obj1!: Sources;
    obj2!: Sources;
  
    workShimmerBtn: boolean;
  workShimmerTable: boolean;
  workShimmerCard: boolean;
  workShimmerPaginator: boolean;
  workShimmerHeader:boolean;
  workShimmerCardBtn: boolean;
  direction!: Direction;
  headerToShow: any[] = []
  
    dropItem!: Sources;
    container: any[][] =[];
  
    accountList: SelectModel[] = [];
  
    dialog_title: string|null = localStorage.getItem(this._globals.baseAppName + '_Add&Edit');
  
    dropList: Sources[] = [];

  


  constructor(
	  private dapiService: SupplierEntryService,
    private upload: UploadService,
      private _ui: UIService,
      private _msg: MessageBoxService,
      private _auth: AuthService,
      private _globals: AppGlobals,
      private _select: SelectService,
      private dialogRef: MatDialogRef<SupplierEntryComponent>,
      @Inject(MAT_DIALOG_DATA) public pModel: Send
  ) { }

  ngOnInit() {
    // if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Add") {
    //   this.addChild1Item(0)
    //   console.log(this.lastDark);
      
      
      
    // }
        if (localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
        this.direction = "ltr"
        this.submit = "Submit"
        this.cancel = "Cancel"
      }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
        this.direction = "rtl"
        this.submit = "ارسال"
        this.cancel = "الغاء"
      }

      this._ui.loadingStateChanged.next(true);
      this.dapiService.Controllers(this.pModel).subscribe(res => {
        this._ui.loadingStateChanged.next(false);
        this.data = res;
        console.log(this.data);
        

        // if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Edit") {
        //   if(this.data.length > 0) {
    
        //     this.dapiService.getCustomerItembyCustomer(+this.data[0].value).subscribe((res) => {
      
        //     this._ui.loadingStateChanged.next(false);
            
        //       // console.log("EditRes",res)
    
              
        //       for(let k=0;k<res.length;k++){
        //         this.addChild1Item(res[k].supplierAccountId)
        //       }
    
              
              
              
        //     }
        //     )
            
        //   }else {
        //     this.addChild1Item(0)
        //   }
        //   console.log(this.imagePathUrl2);
          
        // }
  
  
        for(let i=0;i<=this.data.length;i++){
          this.ver2 = this.data[i]
          // if(this.ver2 && this.ver2.tableColumnId == 560) {
          //   this.imagePathUrl = this.ver2.value
          //   console.log("img :" , this.imagePathUrl);
          // }else 
          if (this.ver2 && this.ver2.inTransaction && this.ver2.access != "NoAccess"){
            if (this.ver2.type === "dropdown") {
              this.dropList.push(this.ver2);
              console.log("droplist: ",this.dropList)
  
  
              // this.tableId = this.ver2.refId;
              // this.tableName = this.ver2.refTable;
              // this.displayColumn = this.ver2.refColumn;
              // this.condition = this.ver2.refCondition;
            }
            this.light.push(this.ver2);
  
          }else{
            if(this.ver2) {
              this.dark.push(this.ver2);
            }
  
  
          }
  
        }
        this.breakpoint =
        window.innerWidth <= 960
          ? 1
          : this.data[0].maxRowSize;
  
        for(let k=0;k<=this.dropList.length;k++) {
          this.dropItem = this.dropList[k]
  
          this._select.getDropdown(this.dropItem.refId, this.dropItem.refTable, this.dropItem.refColumn, this.dropItem.refCondition, false).subscribe((res: SelectModel[]) => {
          this.dropList[k].myarray = res;
          this.container.push(res);
      });
  
        }  
      })
  }

//   public uploadFinished = (event) => { // this is event being called when file gets uploaded
    
//     const file: FileListModel = {
//         originalFileName: event.originalFileName,
//         fileName: event.fileName,
//         extention: event.extention,
//         fullPath: event.fullPath,
//         apiPath: event.apiPath,
//         apiImagePath: event.apiPath
//     };
//     this.lFiles.push(file); 
//     console.log(file);
    
//     this.imagePathUrl2 = this.imgHttp.concat(file.fullPath.substring(file.fullPath.indexOf('h') + 1))
//     console.log(this.imagePathUrl2);
    
//     this.showit = true
//     // and it pushes the files to this array also, then why doesnt it show?
//     // this.data = this.lFiles;
//     // this.validatedisabled = false
//     // this.validatedisabledmethod();
//     // bro problem is not this component, it somehow is not reflecting in other two... the files which i brought here..
//     // yea i was just making sure they were leaving here correctly.. now i will go to step 2, sorry ok
// }

// addChild1Item(id:number) {
    
//   let myElem = {
//     records: [],
//     auditColumn: {
//       approvalStatusId: 1100001,
//       companyId: 10001,
//       branchId: 201,
//       financialYearId: 1,
//       userId: 1,
//       mACAddress: "unidentified",
//       hostName: "unidentified",
//       iPAddress: "unidentified",
//       deviceType: "Win32"
//     }
//   }
//   let childElemDark2 = {
//     records: [],
//     auditColumn: {
//       approvalStatusId: 1100001,
//       companyId: 10001,
//       branchId: 201,
//       financialYearId: 1,
//       userId: 1,
//       mACAddress: "unidentified",
//       hostName: "unidentified",
//       iPAddress: "unidentified",
//       deviceType: "Win32"
//     }
//   }
//   this.model2 = {
//     tableId: 71,
//     recordId: id,
//     userId: 26,
//     roleId: 2,
//     languageId: Number(localStorage.getItem(this._globals.baseAppName + '_language'))
//   };
//   this._ui.loadingStateChanged.next(true);
//   this.dapiService.child1ItemControllers(this.model2).subscribe((res) => {
//     this._ui.loadingStateChanged.next(false);

//     this.childElemInit = res
//     console.log(this.childElemInit)
    

//     for(let i=0;i<this.childElemInit.length;i++){
//       this.verCh2 = this.childElemInit[i]
//       childElemDark2.records.push(this.verCh2);
      

//     }
//     this.lastDark.child1.push(childElemDark2);
//     this.childElemInit.forEach((itemE) =>{
//       if (itemE && itemE.inTransaction && itemE.access != "NoAccess"){
        
//         // this.childElem.records.push(itemE);
//         myElem.records.push(itemE)
        

//       }else{
        
//           this.childElemDark.push(this.verCh2);
//           // console.log(this.childElemDark)
        


//       }
//     })
//     // this.last.child1.splice(0, 1)
//     // this.childElem = res
//     // console.log(JSON.stringify(this.child1Data))
    
//     this.childElem2 = null
//     this.childElem2 = this.childElem

//     //this.last.child1.push(this.childElem2);
//     if (localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Add") {
//       if (this.last.child1.length == 0) {
//         myElem.records.forEach((ele) => {
//           if (ele.tableColumnId == 155) {
//             ele.value = "Base account"
//           }
//           if (ele.tableColumnId == 156) {
//             ele.value = "Base"
//           }
//         })
//       }
//     }
//     this.last.child1.push(myElem)
    
   
    
//   })

//   // if(localStorage.getItem(this._globals.baseAppName + '_Add&Edit2') == "Add") {
      
//   //   this.lastDark.child1[0].records[3].value = "Base"
//   //   this.lastDark.child1[0].records[4].value = "Base account"
    
    
//   // }

  
//   console.log("child1 final", this.last)
//   console.log("DarlDarl",this.lastDark)
  

  
  
// }

// deleteFun(id: number) {
//   console.log('I ran from delete');
//   // this.elem.splice(id, 1);
//   this.last.child1.splice(id, 1)
//   if(this.last.child1.length == 0){
//     this.addChild1Item(0)
//   }
//   this.lastDark.child1.splice(id, 1)
//   }
onResults(id:number, e:any) {
      console.log('ee',e);
      
      this.light.forEach((res:any) => {
        if (res.tableColumnId === id) {
          console.log('ee', e);
          
          res.value = e.toString()
          // if(res.tableColumnId === 605) {
          //   this.onDiscountChange(res.value)
          // }else if(res.tableColumnId === 607) {
          //   this.onChangeValueC(res.value)
          // }else if(res.tableColumnId === 608) {
          //   this.onChangeCurrency(res.value)
          // }
          
        }
      })
    }
  
  onSubmit() {
  this.data.forEach((Object)=> this.light.forEach((obj)=>
  {
    if(Object.tableColumnId === obj.tableColumnId){
      Object.value = obj.value
    }
  }));

  for(let i=0;i<=this.data.length;i++){
    this.obj1 = this.data[i];
     if(this.obj1 ){
       this.last.records.push(this.obj1);
     }
   }

        if(this.last.records[0].entryMode == "A"){
         this.last.auditColumn = this._auth.getAuditColumns();
         this.dapiService.EntryA(this.last).subscribe(nexto => {
           this.res = nexto;
           this._msg.showInfo("Success", this.res.errorMessage);
           this.dialogRef.close();
   
         }, error => {
           console.log(error);
           this._msg.showInfo("Error", error.errorMessage);
           this.dialogRef.close();
         });
       }else if(this.last.records[0].entryMode == "E"){
         this.last.auditColumn = this._auth.getAuditColumns();
         this.dapiService.EntryE(this.last).subscribe(nexto => {
           this.res = nexto;
           this._msg.showInfo("Success", this.res.errorMessage);
           this.dialogRef.close();
   
         }, error => {
          this._msg.showInfo("Error", error.errorMessage);
          this.dialogRef.close();
         });
       }
    }

    onParent(){}
  

  onResize(event:any) {
    this.spacepoint =
      event.target.innerWidth <= 960
        ? (this.spacezone = false)
        : (this.spacezone = true);
    this.breakpoint =
      event.target.innerWidth <= 960
        ? 1
        : this.data[0].maxRowSize;
  }

  onCancel() {
    this.dialogRef.close();
  }
}

