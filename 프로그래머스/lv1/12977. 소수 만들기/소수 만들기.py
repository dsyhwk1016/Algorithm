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
    
    for c in combinations(nums, 3):
        if isPrime(sum(c)):
            answer += 1
    
    return answer