import sys

A, P = map(int, sys.stdin.readline().split())

visited = []
while(True):
    visited.append(A)    # 현재 숫자를 방문 리스트에 삽입
    
    A = sum(int(c)**P for c in str(A))    # 다음 숫자 계산
    
    if A in visited:    # 방문 리스트에 같은 값이 존재할 경우
        print(visited.index(A))    # 해당 값의 인덱스가 중복되지 않은 숫자의 개수와 같음
        break