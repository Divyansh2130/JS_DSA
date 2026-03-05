let response=[];

function helper(nums,i,seq){
    if(seq.length>=2){
        response.push([...seq]);
    }

    let used=new Set();   // prevents duplicates at this level

    for(let j=i;j<nums.length;j++){

        if(used.has(nums[j])) continue;

        if(seq.length===0 || nums[j]>=seq[seq.length-1]){
            used.add(nums[j]);

            seq.push(nums[j]);
            helper(nums,j+1,seq);
            seq.pop();
        }
    }
}

var findSubsequences=function(nums){
    response=[];
    helper(nums,0,[]);
    return response;
};