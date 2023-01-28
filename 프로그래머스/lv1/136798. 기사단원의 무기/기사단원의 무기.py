def solution(number, limit, power):
    divisors = [0] * (number + 1)
    
    for i in range(1, number+1):
        k = i
        
        while k <= number:
            divisors[k] += 1
            k += i
        
        divisors[i] = power if divisors[i] > limit else divisors[i]
    
    return sum(divisors)