'''
부분순열의 마지막 값이 n
    -> n-1까지의 원소 중 n이하 중 가장 큰 값을 마지막으로하는 부분순열 길이 +1
'''
n = int(input())
numbers = list(map(int, input().split()))

dp = [1] * n

for i in range(n):
    for j in range(i):
        if numbers[i] > numbers[j]:
            dp[i] = max(dp[i], dp[j]+1)

print(max(dp))