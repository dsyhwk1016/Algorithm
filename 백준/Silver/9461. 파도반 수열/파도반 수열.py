'''
1 1 1 2 2 3 4 5 7 9 12 16 ⋯
dp[n] = dp[n-2] + dp[n-3]
'''
import sys

n = int(sys.stdin.readline())

for _ in range(n):
    index = int(sys.stdin.readline())
    dp = [0] * (index + 1)
    
    for i in range(1, index+1):
        if i <= 2: dp[i] = 1
        else:
            dp[i] = dp[i-2] + dp[i-3]
    
    print(dp[index])