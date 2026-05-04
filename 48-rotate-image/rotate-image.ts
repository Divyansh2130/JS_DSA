/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n=matrix.length;
    let k=n-1;
    for(let i=0;i<n;i++){
        for(let j=i;j<k-i;j++){
            let t=matrix[i][j];
            matrix[i][j]=matrix[k-j][i];
            matrix[k-j][i]=matrix[k-i][k-j];
            matrix[k-i][k-j]=matrix[j][k-i];
            matrix[j][k-i]=t;
        }
    }
};