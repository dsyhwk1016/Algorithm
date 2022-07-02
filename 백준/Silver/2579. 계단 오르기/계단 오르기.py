'''
마지막 계단을 밟을 경우 -> max(n-1을 밟을 경우, n-2를 밟을 경우) + n
n-1을 밟을 경우 최대값 -> n-3의 최대값 + n-1
n-2를 밟을 경우 -> n-2의 최대값
'''
n = int(input())
steps = [ int(input()) for _ in range(n) ]

dp = [0] * n

for i in range(n):
    if i < 2: dp[i] = sum(steps[:i+1])
    elif i == 2: dp[i] = max(steps[i-1], dp[i-2]) + steps[i]
    else: dp[i] = max(dp[i-3]+steps[i-1], dp[i-2]) + steps[i]

print(dp[-1])