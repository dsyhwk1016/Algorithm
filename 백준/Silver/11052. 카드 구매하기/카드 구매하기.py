'''
5 10 11 12 13 30 35 40 45 47
1개 최대 값 = 5
2개 최대 값 = 10
3개 최대 값 = 15
4개 최대 값 = 20
5개 최대 값 = 25
6개 최대 값 = 30
7개 최대 값 = 35
8개 최대 값 = 40
9개 최대 값 = 45
10개 최대 값 = 50

dp[i] = max(price[i], dp[0]+dp[i-1], dp[1]+dp[i-2] + ⋯)
'''
n = int(input())
price = list(map(int, input().split()))
dp = [0] * n
dp[0] = price[0]

for i in range(1, n):
    if i == 1:
        dp[i] = max(dp[0]*(i+1), price[i])
    else:
        reversedDp = list(reversed(dp[:i]))
        dp[i] = max([ x+y for x,y in zip(dp[:i], reversedDp) ] + [ price[i] ])
    
print(dp[-1])