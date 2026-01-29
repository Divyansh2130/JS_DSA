function rotateGrid(grid: number[][], k: number): number[][] {
  //layers
  let r=grid.length;
  let c=grid[0].length;
 
  let top=0;
  let bottom=r-1;
  let left=0;
  let right =c-1;
 
  while(left<right&&top<bottom)
  {
     //number of elements
    let row=bottom-top;//2
    let col=right-left;//2
    let noe=((row+col)*2);
 
    let nr=k%noe;
 
    for(let i=0;i<nr;i++){
        let temp=grid[top][left];
 
        for( let j=left;j<right;j++){
          grid[top][j]=grid[top][j+1];
        }
 
        for(let j=top;j<bottom;j++){
            grid[j][right]=grid[j+1][right];
        }
 
        for( let j=right;j>left;j--){
            grid[bottom][j]=grid[bottom][j-1];
        }
       
        for( let j=bottom;j>top;j--){
            grid[j][left]=grid[j-1][left];
        }
        grid[top+1][left]=temp;
       
 
    }
    left++,right--,top++,bottom--;
  }
  return grid;
 
 
 
 
};
 
 
 