def solution(n, lost, reserve):
    realLost = [l for l in lost if l not in reserve]
    realReserve = [r for r in reserve if r not in lost]
    
    for r in sorted(realReserve):
        if r-1 in realLost:
            realLost.remove(r-1)
        elif r+1 in realLost:
            realLost.remove(r+1)
        
    return n - len(realLost)