from collections import deque

dfsVisited = [] # DFS 방문 리스트
def DFS(cur):
    if cur not in dfsVisited:   # 현재 정점을 방문하지 않았다면
        dfsVisited.append(cur)  # 방문 리스트에 삽입
        print(cur, end=' ')
        
        # 현재 정점의 도착 정점들에 대해 재귀
        for i in graph[cur-1]:
            DFS(i)

def BFS(v):
    queue = deque([v])  # 첫 시작은 v
    bfsVisited = [v] # BFS 방문 리스트
    
    # queue가 빌 때까지 반복
    while queue:
        cur = queue.popleft()  # 이번에 방문한 정점
        print(cur, end=' ')
        
        # 현재 정점의 도착 정점들에 대해 반복
        for i in graph[cur-1]:
            if i not in bfsVisited:
                # 방문하지 않았다면 삽입
                bfsVisited.append(i)
                queue.append(i)

n, m, v = map(int, input().split()) # n=정점 수, m=간선 수, v=시작 정점

# 간선 관계로 graph 생성
graph = [ [] for _ in range(n) ]
for _ in range(m):
    s, e = map(int, input().split())
    graph[s-1].append(e)
    graph[e-1].append(s)
for i in range(n): graph[i].sort()  # 오름차순 정렬

DFS(v)
print()
BFS(v)