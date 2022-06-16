'''
2*n을 채울 수 있는 경우 = 마지막 타일이 2*1인 경우 + 마지막 타일이 1*2인 경우 + 마지막 타일이 2*2인 경우
마지막 타일이 2*1일 경우 = 2*(n-1)을 채우는 경우
마지막 타일이 1*2일 경우 = 2*(n-2)를 채우는 경우
마지막 타일이 2*2일 경우 = 2*(n-2)를 채우는 경우
=> dp[n] = dp[n-1] + dp[n-2]*2

n이 1 이하일 경우 -> 1

※경우의 수를 10007로 나눈 나머지 출력
'''
n = int(input())

dp=[0]*(n+1)    # 0부터 n까지 담을 수 있는 리스트 생성

for i in range(n+1):
    dp[i] = (dp[i-1] + dp[i-2]*2) % 10007 if i > 1 else 1

print(dp[n])