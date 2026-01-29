function asteroidCollision(asteroids: number[]): number[] {
    let stack:number[]=[];

    for(let num of asteroids){
        if(stack.length==0){stack.push(num);continue;}

        let top=stack[stack.length - 1];
        let cur=num;

        while(stack.length!=0){
            if(top*cur>0){
                stack.push(cur); break;
            }
            else if(top<0){
               stack.push(cur); break; 
            }
            else if(Math.abs(top)==Math.abs(cur)){
                stack.pop();break;
            }
            else{
                if(Math.abs(top)>Math.abs(cur))break;
                else{
                    stack.pop();
                    if(stack.length==0){
                        stack.push(cur);
                        break;
                    }
                    top=stack[stack.length - 1];
                }
            }

        }        
    }

    return stack;
};