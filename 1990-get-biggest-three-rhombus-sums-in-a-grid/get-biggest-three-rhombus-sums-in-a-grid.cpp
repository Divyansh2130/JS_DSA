class Solution {
public:
    vector<int> getBiggestThree(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();

        set<int> sums;

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){

                sums.insert(grid[i][j]);

                for(int d=1;;d++){

                    if(i+d>=m || i+2*d>=m || j-d<0 || j+d>=n)
                        break;

                    int sum = 0;

                    int x=i,y=j;

                    for(int k=0;k<d;k++) sum += grid[x+k][y+k];
                    for(int k=0;k<d;k++) sum += grid[x+d+k][y+d-k];
                    for(int k=0;k<d;k++) sum += grid[x+2*d-k][y-k];
                    for(int k=0;k<d;k++) sum += grid[x+d-k][y-d+k];

                    sums.insert(sum);
                }
            }
        }

        vector<int> result;
        for(auto it=sums.rbegin(); it!=sums.rend() && result.size()<3; it++){
            result.push_back(*it);
        }

        return result;
    }
};