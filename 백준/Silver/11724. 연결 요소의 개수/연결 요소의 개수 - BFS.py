import sys

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
        
        queue = [i]
        while queue:
            cur = queue.pop(0)
            
            for v in graph[cur-1]:
                if v not in visited:
                    queue.append(v)
                    visited.append(v)

print(count)
