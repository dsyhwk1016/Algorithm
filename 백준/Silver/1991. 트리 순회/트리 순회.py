import sys

def traversal(type, cur):
    if cur not in visited:
        visited[cur] = []

    if cur == '.' or type in visited[cur]:
        return ''
    
    visited[cur].append(type)
    left, right = graph[cur]

    if type == 'pre':
        result = cur + traversal(type, left) + traversal(type, right)
    if type == 'in':
        result = traversal(type, left) + cur + traversal(type, right)
    if type == 'post':
        result = traversal(type, left) + traversal(type, right) + cur
    result.replace('.', '')

    return result

n = int(sys.stdin.readline())
graph = {}
for _ in range(n):
    key, left, right = sys.stdin.readline().split()
    graph[key] = [left, right]

preResult = ''
inResult = ''
postResult = ''
visited = {}
for g in graph:
    if g not in visited:
        preResult += traversal('pre', g)
        inResult += traversal('in', g)
        postResult += traversal('post', g)

print(f'{preResult}\n{inResult}\n{postResult}')