import sys

n = int(sys.stdin.readline())
dp = [0] * (n+1)

for i in range(2, n+1, 2):
    if i == 2: dp[i] = 3
    else:
        temp = 2
        for j in range(4, i, 2):
            temp += dp[i-j] * 2
        dp[i] = dp[2] * dp[i-2] + temp

print(dp[n])