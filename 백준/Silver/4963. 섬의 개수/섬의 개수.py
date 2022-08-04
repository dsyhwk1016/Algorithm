import sys
sys.setrecursionlimit(10000)

# 위쪽부터 시계방향
Direction = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]

# 섬 탐색
def ExploreIsland(x, y):
    mapList[x][y] = 0   # 현재 위치 방문 표시

    for dirX, dirY in Direction:
        newX = x + dirX
        newY = y + dirY

        # 새 좌표가 범위안에 있고 해당 위치가 땅이라면
        if newX in range(h) and newY in range(w) and mapList[newX][newY] == 1:
            ExploreIsland(newX, newY)   # 다음 탐색 진행
    
    return

w, h = map(int, sys.stdin.readline().split())
while w > 0 and h > 0:  # 너비와 높이가 0이 아닌 동안 반복
    mapList = [ list(map(int, sys.stdin.readline().split())) for _ in range(h) ]
    
    count = 0
    for x in range(h):
        for y in range(w):
            # 해당 좌표가 땅이라면
            if mapList[x][y] == 1:
                count += 1  # 섬개수 1 증가
                ExploreIsland(x, y) # 섬 탐색
    
    print(count)    # 총 섬 개수 출력

    w, h = map(int, sys.stdin.readline().split())   # 다음 너비와 높이 입력