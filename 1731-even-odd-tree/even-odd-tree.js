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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    let queue=[];
    queue.push([root,0]);
    let flag=true;
    let prevLevel=0;
    let prevVal=0;
    while(queue.length!=0){
       let [node,level]= queue.shift();
       if(prevLevel!=level){
        flag=!flag;
        (level%2==0)?prevVal=0:prevVal=Number.MAX_SAFE_INTEGER;
        }
       if(flag){
         if((node.val)%2==0)return false;
         if(node.val<=prevVal)return false;
       }//even
       else{
         if((node.val)%2!=0)return false;
         if((node.val)>=prevVal)return false;
       }//odd
        
        if(node.left)queue.push([node.left,level+1]);
        if(node.right)queue.push([node.right,level+1]);
        prevLevel=level;
        prevVal=node.val;
    }

    return true;
};