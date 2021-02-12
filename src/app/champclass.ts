export class Champ {

    constructor(private name?: string, private role?: string, private id?: number, private isMale?: boolean){

    }

    public getName() {
    return this.name;
    }

    public setName(n: string) {
    this.name = n;
    }

    public getRole(){
        return this.role;
    }
    public setRole(r: string){
        this.role = r;
    }
    public getID(){
        return this.id;
    }
    public setID(id: number){
        this.id = id;
    }
    public getIsMale(){
        return this.isMale;
    }
    public setIsMale(im: boolean){
        this.isMale = im;
    }

}