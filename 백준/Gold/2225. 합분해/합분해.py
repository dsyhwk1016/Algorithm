'''
n=1 -> 1 => k개
k=1 -> n => 1개
n=2, k=2 -> (0, (n=2, k=1)) (1, (n=1, k=1)) (2, (n=0, k=1)) -> (0, 1) (1, 1) (2, 0) => 3
n=3, k=2 -> (0, (n=3, k=1)) (1, (n=2, k=1)) (2, (n=1, k=1)) (3, (n=0, k=1)) -> (0, 3) (1, 2) (2, 1) (3, 0) => 4
n=3, k=3 -> (0, (n=3, k=2)) (1, (n=2, k=2)) (2, (n=1, k=2)) (3, (n=0, k=2)) -> 4 + 3 + 2 + 1 => 10

dp[n][k] = dp[n][k-1] + dp[n-1][k-1] + dp[n-2][k-1] + dp[n-3][k-1] + ⋯ + dp[0][k-1]
dp[n-1][k] = dp[n-1][k-1] + dp[n-2][k-1] + ⋯ + dp[0][k-1]

dp[n][k] = dp[n][k-1] + dp[n-1][k]

※1000000000로 나눈 나머지 출력
'''
n, k = map(int, input().split())
dp = [ [0] * k for _ in range(n) ]

for i in range(n):
    for j in range(k):
        if i == 0:
            dp[i][j] = j+1
        else:
            dp[i][j] = dp[i][j-1] + dp[i-1][j]

print(dp[n-1][k-1] % 1000000000)