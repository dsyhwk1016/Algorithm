'''
dp[n] = dp[n-3] + dp[n-2] + dp[n-1]

n=1 -> 1
n=2 -> 2
n=3 -> 4
'''
n = int(input())

for i in range(n):
    m = int(input())
    
    dp=[0, 1, 2, 4]    # 0~3일 경우에 대해 초기화
    
    for i in range(4, m+1):
        dp.append(dp[i-1] + dp[i-2] + dp[i-3])    # 새로운 값을 배열에 삽입
    
    print(dp[m])