/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let binaryArr=[];
function helper(node,str){
    if(!node.right && !node.left){
        str+=String(node.val);
        binaryArr.push(str);
        //console.log(str);
        return;
    }

    str+=String(node.val);
    if(node.left){
        helper(node.left,str);
    }

    if(node.right){
        helper(node.right,str);
    }
   
    
   
    
    
}
var sumRootToLeaf = function(root) {

    helper(root,"");
    
    let res=0;
    for(let bin of binaryArr){
        res+=parseInt(bin, 2);
       // console.log(res);
    }
    binaryArr=[];
    return res;
};