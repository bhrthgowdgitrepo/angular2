
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',//accordion
    styles: [`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .zippy .zippy-content {
            padding: 20px;
        }
    `],
    template: `
    <div class="zippy">
        <div 
            class="zippy-title"
            (click)="toggle()">
            {{ title }} 
            <i 
                class="pull-right glyphicon" 
                [ngClass]="
                    { 
                        'glyphicon-chevron-down': !isExpanded, 
                        'glyphicon-chevron-up': isExpanded 
                    }">
            </i>
        </div>  
        <div *ngIf="isExpanded" class="zippy-content">
            <ng-content></ng-content> 
        </div>
    </div>    
    `,
    // inputs:["title:text"],
})
export class ZippyComponent {
    isExpanded = false;
    // @Input('text12') title: string='my text123';
         title: string='my text13';
    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}