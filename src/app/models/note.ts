export class Note {
  private color: string = "warning";
  private title: string;
  private text: string;
  private id: number;
  private photo: string;

  constructor() {}

  public getId() {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
    return this;
  }

  public getTitle() {
    return this.title;
  }

  public setTitle(title) {
    this.title = title;
    return this;
  }

  public getText() {
    return this.text;
  }

  public setText(text) {
    this.text = text;
    return this;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color) {
    this.color = color;
    return this;
  }

  public getAbstract() {
    return this.text.substr(0, 80) + "...";
  }

  public getPhoto(): string {
    return this.photo;
  }

  public setPhoto(image: string) {
    this.photo = image;
    return this;
  }

  public getImageBase64Link() {
    return "data:image/jpeg;base64," + this.photo;
  }
}
