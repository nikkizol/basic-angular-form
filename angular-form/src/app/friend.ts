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

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get favLang(): string {
    return this._favLang;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set phone(value: string) {
    this._phone = value;
  }

  set favLang(value: string) {
    this._favLang = value;
  }
}
