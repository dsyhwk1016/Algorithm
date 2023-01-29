def solution(n, lost, reserve):
    realLost = [l for l in lost]
    for l in lost:
        if l in reserve:
            realLost.remove(l)
            reserve.remove(l)

    answer = n - len(realLost)
    
    realLost.sort()
    reserve.sort()
    
    for l in realLost:
        if l-1 in reserve:
            reserve.remove(l-1)
            answer += 1
        elif l+1 in reserve:
            reserve.remove(l+1)
            answer += 1
        
    return answer