'''
1 1 -> dp[1] = dp[1-1] + 1 = 1
2 1 -> dp[2] = dp[2-1] + 1 = 2
3 1 -> dp[3] = dp[3-1] + 1 = 3
4 1 -> dp[4] = dp[4-1] + 1 = 4(x)
4 4 -> dp[4] = dp[4-4] + 1 = 1
5 1 -> dp[5] = dp[5-1] + 1 = 2
5 4 -> dp[5] = dp[5-4] + 1 = 2
8 1 -> dp[8] = dp[8-1] + 1 = 5(x)
8 4 -> dp[8] = dp[8-4] + 1 = 2
9 1 -> dp[9] = dp[9-1] + 1 = 3(x)
9 4 -> dp[9] = dp[9-4] + 1 = 3(x)
9 9 -> dp[9] = dp[9-9] + 1 = 1
'''
import sys

n = int(sys.stdin.readline())
square= [ x**2 for x in range(1, int(n**(1/2))+1)]
dp = [0] * (n+1)

for i in range(1, n+1):
    temp = []
    for j in square:
        if j > i:
            break
        temp.append(dp[i-j] + 1)
    dp[i] = min(temp)

print(dp[n])