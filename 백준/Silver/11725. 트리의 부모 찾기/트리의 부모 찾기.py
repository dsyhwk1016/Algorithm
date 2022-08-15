import sys
sys.setrecursionlimit(1000000)

def DFS(cur):
    for c in graph[cur]:
        if visited[c] == 0:
            visited[c] = cur
            DFS(c)

n = int(sys.stdin.readline())
graph = [[] for _ in range(n+1)]
for _ in range(n-1):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [0] * (n+1)
DFS(1)

for i in range(2, n+1):
    print(visited[i])