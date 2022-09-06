import math

def solution(n, k):
    answer = 0
    
    # 진수 변환
    base_k = ''
    while n > 0:
        n, m = divmod(n, k)
        base_k = str(m) + base_k
    
    # 소수 찾기
    numList = [int(n) for n in base_k.split('0') if n and n != '1']
    for n in numList:
        isPrime = True
        for i in range(2, int(math.sqrt(n)+1)):
            if n % i == 0:
                isPrime = False
                break
        answer += 1 if isPrime else 0
    
    return answer