export class Friend {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phone: string;
  private _favLang: string;

  constructor(firstName: string, lastName: string, email: string, phone: string, favLang: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phone = phone;
    this._favLang = favLang;
  }

}
