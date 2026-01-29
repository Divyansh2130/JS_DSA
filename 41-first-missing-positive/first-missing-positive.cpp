class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int large=nums[0];
        vector<int>hash(nums.size()+1,0);
        for(int i=0;i<nums.size();i++){
            if(nums[i]<=0)continue;
            else if(nums[i]>nums.size()+1) continue;
            hash[nums[i]-1]++;
        }
        for(int i=0;i<hash.size();i++){
            if(hash[i]==0)return i+1;
        }

     return large+1;   
    }
};