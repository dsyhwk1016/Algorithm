def solution(n, lost, reserve):
    realLost = [l for l in lost]
    for l in lost:
        if l in reserve:
            realLost.remove(l)
            reserve.remove(l)
    
    for r in sorted(reserve):
        if r-1 in realLost:
            realLost.remove(r-1)
        elif r+1 in realLost:
            realLost.remove(r+1)
        
    return n - len(realLost)