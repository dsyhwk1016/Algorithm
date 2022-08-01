import sys
sys.setrecursionlimit(10000)

def DFS(cur):
    if visited[cur] == 0:
        visited[cur] = 1
        
        DFS(graph[cur]-1)

T = int(sys.stdin.readline())

for _ in range(T):
    n = int(sys.stdin.readline())
    graph = list(map(int, sys.stdin.readline().split()))
    
    count = 0
    visited = [0] * n
    for i in range(n):
        if visited[i] == 0:
            count += 1
            
            DFS(i)
    
    print(count)