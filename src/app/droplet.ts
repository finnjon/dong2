export class Droplet {
  constructor(
    public status: string,
    public name: string,
    public description: string,
    public explanations: any,
    public questions: any,
    public hints: any,
    public tags: any
  ) {}
}
