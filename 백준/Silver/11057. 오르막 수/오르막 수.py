'''
한자리 숫자(n=1)는 0~9가 올 수 있음 -> dp[1][j] = 1
i자리에 j가 오는 경우 = i-1자리에 0~j가 올 수 있음

※10007로 나눈 나머지 출력
'''
n = int(input())

dp = [[0]*10 for _ in range(n+1)]
for d in range(10): dp[1][d] = 1    # 한자리 초기화

for i in range(1, n):
    for j in range(10):
        dp[i+1][j] = sum(dp[i][:j+1])

print(sum(dp[n]) % 10007)