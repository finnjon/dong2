export class Droplet {

  constructor(
    public _id?: number,
    public user_id?: string,
    public status?: string,
    public name?: string,
    public description?: string,
    public created_at?: string,
    public updated_at?: string,
    public verified?: boolean,
    public language?: string,
    public open?: boolean,
    // public tag_list: [],
    // public helps: [],
    // public questions: []
  ){}

}
