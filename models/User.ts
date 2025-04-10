export class User {
    private _userId: number;
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _userType: UserType;

    
    public get userType_1(): UserType {
        return this._userType;
    }
    public set userType_1(value: UserType) {
        this._userType = value;
    }
   
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
  
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    constructor(userId: number, firstName: string, lastName: string, age: number, userType: UserType) {
      this._userId = userId;
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
      this._userType = userType;
    }

    public fullName(): string {
        return this._firstName + "" + this._lastName;
      }

    public greetUser(): string {
        switch(this._userType){
            case UserType.Admin:
                return `Bienvenue Admin ${this.fullName}`
            case UserType.Member:
                return `Bienvenue Member ${this.fullName}`
            case UserType.Guest:
                return `Bienvenue Invite ${this.fullName}`
        }
      }
      
}
export enum UserType {
    Admin = 'Admin',
    Member = 'Member',
    Guest = 'Guest'
}
  