'''
1. 임의의 정점에서 가장 먼 정점 a를 구함
2. a에서 가장 먼 정점 b를 구함
3. a와 b 사이의 거리가 트리의 지름과 같음

Ref: https://blog.myungwoo.kr/112
'''
import sys

def DFS(cur):
    for v, w in graph[cur]:
        # 방문하지 않았다면
        if result[v] == 0:
            result[v] = result[cur] + w # 해당 자식 노드까지의 거리 저장
            DFS(v)  # 자식 노드를 부모노드로 DFS 재귀

n = int(sys.stdin.readline())
graph = [[] for _ in range(n+1)]
for _ in range(n):
    info = list(map(int, sys.stdin.readline().split()))
    start = info[0]
    i = 1
    while info[i] != -1:
        temp = (info[i], info[i+1])
        graph[start].append(temp)
        i += 2

# 첫번째 점 찾기
result = [0 for _ in range(n+1)]
DFS(1)
result[1] = 0
maxIndex = result.index(max(result))

# 가장 먼 거리 찾기
result = [0 for _ in range(n+1)]
DFS(maxIndex)
result[maxIndex] = 0    # 시작 노드 초기화

print(max(result))