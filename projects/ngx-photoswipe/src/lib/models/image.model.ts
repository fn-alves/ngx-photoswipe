export class Image {
  constructor(
    public img: string,
    public thumb: string,
    public description?: string,
    public width?: number,
    public height?: number,
    public id?: number
  ) {}
}
