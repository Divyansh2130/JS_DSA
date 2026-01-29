/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function helper(node:TreeNode|null, left:boolean, sum:number): number{
    if(node.left===null && node.right===null){
        if(left)return node.val;
        else return 0;
    }
    
    let leftSum=0,rightSum=0;
    if(node.left!==null){
        leftSum=helper(node.left,true,sum);
    }

    if(node.right!==null){
        rightSum=helper(node.right,false,sum);
    }

    return leftSum+rightSum;

   
}
function sumOfLeftLeaves(root: TreeNode | null): number {
    if(root===null)return 0;

    return helper(root,false,0);

};