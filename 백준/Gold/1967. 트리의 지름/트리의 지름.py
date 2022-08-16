import sys
sys.setrecursionlimit(100000)

def DFS(cur):
    for v, w in graph[cur]:
        if result[v] < 0:
            result[v] = result[cur] + w
            DFS(v)

n = int(sys.stdin.readline())
graph = [[] for _ in range(n+1)]
for _ in range(1, n):
    p, c, w = map(int, sys.stdin.readline().split())
    graph[p].append((c, w))
    graph[c].append((p, w))

result = [-1 for _ in range(n+1)]
result[1] = 0
DFS(1)
maxIndex = result.index(max(result))

result = [-1 for _ in range(n+1)]
result[maxIndex] = 0
DFS(maxIndex)

print(max(result))