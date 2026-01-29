/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(NULLptr), right(NULLptr) {}
 *     TreeNode(int x) : val(x), left(NULLptr), right(NULLptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int sum=0;

    void sumOfLeavesHelper(TreeNode* node, bool left){
        if(node->left==NULL && node->right==NULL){
            if(left)sum+=node->val;
            return;
        }
        if(node->left!=NULL){
            sumOfLeavesHelper(node->left,true);
        }
        if(node->right!=NULL){
            sumOfLeavesHelper(node->right,false);
        }
    }
    int sumOfLeftLeaves(TreeNode* root) {
       if(root==NULL)return 0;
       
       if(root->left!=NULL){
            sumOfLeavesHelper(root->left,true);
        }
        if(root->right!=NULL){
            sumOfLeavesHelper(root->right,false);
        }

        return sum;
    }
};