n = int(input())
numbers = list(map(int, input().split()))

dp = [0] * n
dp[0] = numbers[0]

for i in range(1, n):
    for j in range(i):
        if numbers[i] > numbers[j]:
            dp[i] = max(dp[i], dp[j] + numbers[i])
        else:
            dp[i] = max(dp[i], numbers[i])

print(max(dp))