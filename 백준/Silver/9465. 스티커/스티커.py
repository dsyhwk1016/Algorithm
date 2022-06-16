'''
[i][j]를 선택했을 경우 -> [i-1][j-1], [i-1][j-2] 중 큰 점수를 선택
j=1이라면 [i-1][0]을 선택
'''
n = int(input())

for _ in range(n):
    column = int(input())
    score = [list(map(int, input().split())) for _ in range(2)]
    
    for j in range(1, column):
        if j==1:
            score[0][1] += score[1][0]
            score[1][1] += score[0][0]
        else:
            score[0][j] += max(score[1][j-1], score[1][j-2])
            score[1][j] += max(score[0][j-1], score[0][j-2])
    
    print(max(score[0][column-1], score[1][column-1]))