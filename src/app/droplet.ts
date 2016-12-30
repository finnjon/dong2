export class Droplet {
  constructor(
    public name: string,
    public description: string,
    public user_id: string,
    public created_at: string,
    public updated_at: string,
    public status: string,
    public verified: boolean,
    public language: string,
    public open: boolean,
    public tags: any,
    public hints: any,
    public explanations: any,
    public questions: any,
    public _id?: string
  ) {}
}
