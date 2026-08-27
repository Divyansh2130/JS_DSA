/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let m=matrix.length;
    let n=matrix[0].length;

    let rowMarker=new Array(m).fill(0);
    let columnMarker=new Array(n).fill(0);
    
    for(let i =0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                rowMarker[i]=1;
                columnMarker[j]=1;
            }
        }
    }

     for(let i =0;i<m;i++){
        for(let j=0;j<n;j++){
            if(rowMarker[i] || columnMarker[j]){
                matrix[i][j]=0;
            }
        }
    }

    return;

};