'''
마지막 잔을 마신 경우 -> max(n-1번째 잔을 마신 경우, n-1번째 잔을 마시지 않은 경우)
    n-1번째 잔을 마신 경우 -> n-3까지의 최대값 + n-1 + n
    n-2번째 잔을 마신 경우 -> n-2까지의 최대값 + n
마지막 잔을 마시지 않은 경우 -> n-1까지의 최대값

n의 최대 값 = max(dp[n-1], glasses[n]+glasses[n-1]+dp[n-3], glasses[n]+dp[n-2])
'''
n = int(input())
glasses = [ int(input()) for _ in range(n) ]

# 최대값을 저장할 리스트 초기화
dp = [0] * n

for i in range(n):
    if i < 2: dp[i] = sum(glasses[:i+1])
    elif i == 2: dp[i] = max(dp[1], glasses[2]+glasses[1], glasses[2]+dp[0])
    else: dp[i] = max(dp[i-1], glasses[i]+glasses[i-1]+dp[i-3], glasses[i]+dp[i-2])

print(dp[-1])