import sys
sys.setrecursionlimit(10000)    # python이 정한 최대 깊이를 더 깊게 변경

def DFS(i):
    for j in graph[i]:
        if j not in visited:
            visited.append(j)
            DFS(j-1)

n, m = map(int, sys.stdin.readline().split())

graph = [ [] for _ in range(n) ]
for _ in range(m):
    s, e = map(int, sys.stdin.readline().split())
    graph[s-1].append(e)
    graph[e-1].append(s)
    
visited = []
count = 0
for i in range(1, n+1):
    if i not in visited:
        visited.append(i)
        count += 1
        DFS(i-1)

print(count)