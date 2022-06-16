'''
한자리 숫자(n=1)는 1~9까지 올 수 있음 -> dp[1][1~9] = 1
i자리에 j가 오는 경우 = i-1자리에 j-1 혹은 j+1이 오는 경우 -> dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]
j가 0인 경우 -> dp[i][0] = dp[i-1][1]
j가 9인 경우 -> dp[i][9] = dp[i-1][8]

※1000000000로 나눈 나머지 출력
'''
n = int(input())

dp = [[0]*10 for _ in range(n+1)]
for d in range(1, 10): dp[1][d] = 1 # 한자리 초기화

for i in range(1, n):
    dp[i+1][0] = dp[i][1]
    dp[i+1][9] = dp[i][8]
    for j in range(1, 9):
        dp[i+1][j] = dp[i][j-1] + dp[i][j+1]

print(sum(dp[n]) % 1000000000)