import { from } from "rxjs";
import {Champ} from '../app/champinterface';

export const CHAMPIONS: Champ[] = [
    {name:'Ashe', role:'Attack Damage Carry', id:1, isMale:false},
    {name:'Warwick', role:'Jungle', id:2, isMale:true},
    {name:'Garen', role:'Top', id:3, isMale:true},
    {name:'Lucian', role:'Attack Damage Carry', id:4, isMale:true},
    {name:'Lulu', role:'Support', id:5, isMale:false},
    {name:'Ahri', role:'Mage', id:6, isMale:false}, 
    {name:'Karthus', role:'Jungle', id:7, isMale:true}
];