/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    let robots=[];

    for(let i=0;i<positions.length;i++){
        robots.push({
            index:i,
            position:positions[i],
            health:healths[i],
            direction:directions[i]
        });
    }

    robots.sort((a,b)=>a.position-b.position);

    let stack=[];
    stack.push(robots[0]);
    for(let i=1;i<robots.length;i++){
       
        if(stack.length==0 || stack[stack.length-1].direction===robots[i].direction){
            stack.push(robots[i]);
           
        }else if(stack[stack.length-1].direction=='L' && robots[i].direction=='R'){
            stack.push(robots[i]);
        }else{

            while(stack.length!=0 && robots[i].health!=0 && stack[stack.length-1].direction=='R'){
                let top=stack[stack.length-1];
                if(top.health>robots[i].health){
                    stack[stack.length-1].health--;
                    robots[i].health=0;
                    break;
                }
                else if(top.health<robots[i].health){
                    stack[stack.length-1].health=0;
                    stack.pop();
                    robots[i].health--;
                }else{
                    robots[i].health=0;
                    stack[stack.length-1].health=0;
                    stack.pop();
                }
            }

            if(robots[i].health>0){
                stack.push(robots[i]);
            }
            
        }
    }

    let res=new Array(positions.length);
    for(let i=0;i<robots.length;i++){
        res[robots[i].index]=robots[i].health;
    }

    
    let rres=[];
    for(let i=0;i<res.length;i++){
        if(res[i]){
            rres.push(res[i]);
        }   
    }

    return rres;

};