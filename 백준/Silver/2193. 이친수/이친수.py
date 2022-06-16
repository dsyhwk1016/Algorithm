'''
첫째자리(n=1)는 1로 고정

i의 이친수 개수 = 세번째가 1인 경우 + 세번째가 0인 경우
세번째가 1인경우 = i-2의 이친수 개수
세번째가 0인 경우 = 두번째가 1인 경우 = i-1의 이친수
'''
n = int(input())

dp = [1, 1] #n이 1일때, 2일때 값 초기화

for i in range(2, n):
    dp.append(dp[i-2] + dp[i-1])

print(dp[-1])