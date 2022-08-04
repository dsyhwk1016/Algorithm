import sys

# 상하좌우 이동 방향
Direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]

# 단지 내 집 개수를 구하는 함수
def CountHouses(x, y):
    count = 1
    mapList[x] = mapList[x][:y] + '0' + mapList[x][y+1:]    # 해당 위치 방문 처리
    
    for dirX, dirY in Direction:
        newX = x + dirX
        newY = y + dirY

        # 새 좌표가 범위 안에 있고 해당 좌표에 집이 있다면
        if newX in range(n) and newY in range(n) and mapList[newX][newY] == '1':
            count += CountHouses(newX, newY)
    
    return count

n = int(sys.stdin.readline())
mapList = [ sys.stdin.readline().rstrip() for _ in range(n) ]

complex = 0   # 총 단지 수
count = []  # 단지별 가구 수
for x in range(n):
    for y in range(n):
        # 해당 위치에 집이 있다면
        if mapList[x][y] == '1':
            complex += 1  # 단지 수 1 증가
            count.append(CountHouses(x, y))

count.sort()
print(complex)
for n in count: print(n)