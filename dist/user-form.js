var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var UserModel_1 = require('./UserModel');
var EllipsisPipe_1 = require('./EllipsisPipe');
var UserService_1 = require('./UserService');
var like_1 = require('./like');
var UserForm = (function () {
    function UserForm(service) {
        var _this = this;
        this.service = service;
        this.formModel = new UserModel_1.UserModel();
        this.days = [];
        this.users = [];
        this.formModel.fname = 'John';
        this.formModel.frequency = '2';
        var observable = this.service.getData();
        observable.subscribe(function (response) {
            console.log(response);
            _this.frequencies = response;
        });
    }
    UserForm.prototype.drawCheckBoxes = function (event) {
        if (event.target.selectedOptions[0].index === 1) {
            this.days = [1];
        }
        if (event.target.selectedOptions[0].index === 2) {
            this.days = [1, 2, 3, 4, 5, 6, 7];
        }
        console.log('testing');
    };
    UserForm.prototype.getLabel = function (id) {
        return this.frequencies[--id].label;
    };
    UserForm.prototype.delete = function (index) {
        this.users.splice(index, 1);
    };
    UserForm.prototype.save = function () {
        this.users.push(this.formModel);
        this.formModel = new UserModel_1.UserModel();
        console.log('working');
    };
    Object.defineProperty(UserForm.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.formModel);
        },
        enumerable: true,
        configurable: true
    });
    UserForm = __decorate([
        core_1.Component({
            selector: 'user-form',
            template: " <input [(ngModel)]='formModel.fname' placeholder='name'/>\n <input [(ngModel)]='formModel.age' type=\"number\" min=\"1\" />\n <input [(ngModel)]='formModel.salary' type=\"number\" min=\"1\" />\n        <button (click)='save()' >Save</button>\n        {{diagnostic}}\n        <div class=\"form-control\">Gender:\n            <label>\n                <input #male1 [ngModel]='formModel.gender' name=\"gender\" \n                type=\"radio\" value=\"Male123\" (click)=\"formModel.gender = male1.value\" />\n                Male\n            </label>\n                <label>\n                    <input #female name=\"gender\" [ngModel]='formModel.gender'  \n                    type=\"radio\"  value=\"Female\" \n                     (click)=\"formModel.gender = female.value\" />\n                    Female\n                </label>\n        </div>\n         <h4>Select your programming skills</h4>\n        <div>\n            <label>\n                <input #angularcb   type=\"checkbox\"\n                 (change)=\"formModel.skills[0] = angularcb.checked?'Angular':false\" />\n                Angular\n            </label>\n        </div>\n        <div>\n            <label>\n         <input #jscb   type=\"checkbox\"\n                 (change)=\"formModel.skills[1] = jscb.checked?'js':false\" />JavaScript\n            </label>\n        </div>\n         Mail Frequency:\n         <select \n            id=\"frequency\" \n            (change)='drawCheckBoxes($event)'\n            [(ngModel)]='formModel.frequency'\n            class=\"form-control\" >\n            <option value=\"\"></option>\n            <option \n            *ngFor=\"#frequency of frequencies\" \n            value=\"{{ frequency.id }}\">\n                {{ frequency.label }}\n            </option>\n        </select> \n        <!--<select >\n            <option *ngFor='#a of all' value=\"{{a}}\">{{a}}</option>\n        </select>-->\n        <span *ngFor='#day of days'>\n            <input type=\"checkbox\" />{{day}}\n        </span><like ></like>\n        <hr/>\n        Users:{{users.length}}<ol>\n           <li *ngFor='#user of users'>\n               {{user.fname|ellipsis:7:'*'}}, {{user.age}}, {{user.salary|currency}},\n               {{getLabel(user.frequency)}}, {{user.fav}}\n           </li>\n        </ol>",
            pipes: [EllipsisPipe_1.EllipsisPipe],
            directives: [like_1.LikeComponent]
        }), 
        __metadata('design:paramtypes', [UserService_1.UserService])
    ], UserForm);
    return UserForm;
})();
exports.UserForm = UserForm;
//# sourceMappingURL=user-form.js.map