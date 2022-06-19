import math

n = int(input())
numList = list(map(int, input().split()))

def getMaxSum(data):
    if len(data) == 1:
        return data[0]
    
    mid = len(data)//2
    left = getMaxSum(data[:mid])
    right = getMaxSum(data[mid:])

    temp = 0
    leftMax = -math.inf
    for i in reversed(range(mid)):
        temp += data[i]
        leftMax = max(leftMax, temp)
    
    temp = 0
    rightMax = -math.inf
    for i in range(mid, len(data)):
        temp += data[i]
        rightMax = max(rightMax, temp)
    
    return max(left, right, leftMax+rightMax)

print(getMaxSum(numList))