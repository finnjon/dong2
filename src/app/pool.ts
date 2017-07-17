export class Pool {
  constructor(
    public name: string,
    public description: string,
    public user_id: string,
    public created_at: string,
    public updated_at: string,
    public status: string,
    public language: string,
    public tags: any,
    public open: boolean,
    public _id?: string
  ) {}
}
