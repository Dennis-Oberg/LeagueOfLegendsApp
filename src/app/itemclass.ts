export class itemclass{
    constructor(private cost?: number,private  desc?: string,private  name?: string,private  quality?: string){
      
    }
      

    getCost(){
        return this.cost;
    }
    setCost(c: number){
        this.cost = c;
    }
    getDesc(){
        return this.desc;
    }
    setDesc(d: string){
        this.desc = d;
    }
    public getName(){
        return this.name;
    }
    public setName(n: string){
        this.name = n;
    }
    getQuality(){
        return this.quality;
    }
    setQuality(q: string){
        this.quality = q;
    }
    
}