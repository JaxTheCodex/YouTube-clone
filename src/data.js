export const API_KEY='AIzaSyBWZ6GDelxEp576l4fKl6n1-Rrnwhe6X3U';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if(value >=1000){
        return Math.floor(value/1000)+'K';
    }
    else{
        return value;
    }
}
