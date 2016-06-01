import {Component} from 'angular2/core';
import {UserModel} from './UserModel';
import {EllipsisPipe } from './EllipsisPipe';
import { UserService } from './UserService';
import {  LikeComponent} from './like';
@Component({
    selector:'user-form',
    // templateUrl:`templates/user-form.html`,
    template:` <input [(ngModel)]='formModel.fname' placeholder='name'/>
 <input [(ngModel)]='formModel.age' type="number" min="1" />
 <input [(ngModel)]='formModel.salary' type="number" min="1" />
        <button (click)='save()' >Save</button>
        {{diagnostic}}
        <div class="form-control">Gender:
            <label>
                <input #male1 [ngModel]='formModel.gender' name="gender" 
                type="radio" value="Male123" (click)="formModel.gender = male1.value" />
                Male
            </label>
                <label>
                    <input #female name="gender" [ngModel]='formModel.gender'  
                    type="radio"  value="Female" 
                     (click)="formModel.gender = female.value" />
                    Female
                </label>
        </div>
         <h4>Select your programming skills</h4>
        <div>
            <label>
                <input #angularcb   type="checkbox"
                 (change)="formModel.skills[0] = angularcb.checked?'Angular':false" />
                Angular
            </label>
        </div>
        <div>
            <label>
         <input #jscb   type="checkbox"
                 (change)="formModel.skills[1] = jscb.checked?'js':false" />JavaScript
            </label>
        </div>
         Mail Frequency:
         <select 
            id="frequency" 
            (change)='drawCheckBoxes($event)'
            [(ngModel)]='formModel.frequency'
            class="form-control" >
            <option value=""></option>
            <option 
            *ngFor="#frequency of frequencies" 
            value="{{ frequency.id }}">
                {{ frequency.label }}
            </option>
        </select> 
        <!--<select >
            <option *ngFor='#a of all' value="{{a}}">{{a}}</option>
        </select>-->
        <span *ngFor='#day of days'>
            <input type="checkbox" />{{day}}
        </span><like ></like>
        <hr/>
        Users:{{users.length}}<ol>
           <li *ngFor='#user of users'>
               {{user.fname|ellipsis:7:'*'}}, {{user.age}}, {{user.salary|currency}},
               {{getLabel(user.frequency)}}, {{user.fav}}
           </li>
        </ol>`,
    //new entry
    pipes:[EllipsisPipe],
    // providers:[UserService],
    directives:[LikeComponent]
})

export class UserForm{
     public formModel= new UserModel();//  {fname:'john'};
      constructor(private service:UserService){
        this.formModel.fname='John';
        this.formModel.frequency='2';
        var observable = this.service.getData();
        observable.subscribe(response =>{
             console.log(response);
             this.frequencies=response;
            });
    }
     frequencies :[any];
     
    //1 -daily, 7- weekly, 30 -monthly
    days:number[]=[];
    drawCheckBoxes(event){
        // if(this.formModel && this.formModel.frequency=='1'){
        //     this.days=[1];
        // }
        if(event.target.selectedOptions[0].index===1){
            this.days=[1];
        }
        if(event.target.selectedOptions[0].index===2){
            this.days=[1,2,3,4,5 ,6,7];
        }
        console.log('testing');
    }
    getLabel(id){
        return this.frequencies[--id].label;
    }
    
    // public fname:string='Ajay';
  
    delete(index){
        this.users.splice(index, 1);
    }
    public users:UserModel[]=[];
    save(){
        this.users.push(this.formModel);
        this.formModel=new UserModel();
        console.log('working');
    }
    get diagnostic() { 
        return JSON.stringify(this.formModel); 
    }
    // fname:string;
}