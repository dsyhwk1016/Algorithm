from itertools import combinations

def isPrime(number):
    if number == 1:
        return True

    for i in range(2, int(number**0.5)+1):
        if number%i == 0:
            return False

    return True

def solution(nums):
    answer = 0
    
    combList = list(combinations(nums, 3))
    for c in combList:
        if isPrime(sum(c)):
            answer += 1
    
    return answer