function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(hand.length%groupSize!=0)return false;
    
    let mp=new Map<number,number>();

    for(let num of hand){
       mp.set(num, (mp.get(num) ?? 0) + 1);
       
    }
    console.log("Check 1");
    
    for(let card of hand){
        let startCard=card;

        while(mp.get(startCard-1)>0){
            startCard--;
        }

        while(startCard<=card){
            while(mp.get(startCard)){
                for(let nextCard=startCard; nextCard<startCard+groupSize;nextCard++){
                    if(!mp.get(nextCard)){
                        return false;
                    }
                    mp.set(nextCard,mp.get(nextCard)-1);
                    
                }
            }

            startCard++;
        }
    }
    return true;
    
    
};