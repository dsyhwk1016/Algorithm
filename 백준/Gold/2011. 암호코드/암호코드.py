'''
첫째 자리가 0일 경우 -> 해독 불가
첫째 자리가 0이 아닐 경우 -> 한자리 수 암호 가능 => 1
현재 자리 수가 0이고 이전 자리 수가 1 또는 2가 아닐 경우 -> 해독 불가
현재 자리 수가 0이고 이전 자리 수가 1 또는 2일 경우 -> 무조건 두자리 수 암호 => dp[i] = dp[i-2]
현재 자리 수와 이전 자리 수가 10~26일 경우 -> 두자리 수 암호 가능 => dp[i] = dp[i-1](한자리수) + dp[i-2](두자리수)
그 외 -> 한자리 수만 가능 -> dp[i] = dp[i-1]

※1000000로 나눈 나머지 출력
'''
encode = list(input())
dp = [0] * (len(encode)+1)
dp[0] = 1

if encode[0] != '0':
    dp[1] = 1

    for i in range(2, len(encode)+1):
        temp = int(''.join(encode[i-2:i]))
        if encode[i-1] == '0' and encode[i-2] not in ['1', '2']:
            break
        elif temp in range(10, 27):
            dp[i] = dp[i-1] + dp[i-2] if encode[i-1] != '0' else dp[i-2]
        else:
            dp[i] = dp[i-1]
            
print(dp[-1] % 1000000)