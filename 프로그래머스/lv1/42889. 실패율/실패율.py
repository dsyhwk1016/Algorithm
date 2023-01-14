# 스테이지에 도달한 플레이어 수 = 멈춰있는 스테이지 번호가 해당 스테이지 번호 이상인 수
# 스테이지에 도달했으나 클리어하지 못한 플레이어 수 = 멈춰있는 스테이지 번호가 해당 스테이지 번호인 수

def solution(N, stages):
    answer = []
    
    total = 0
    for s in range(N+1, 0, -1):
        stop_count = stages.count(s)    # 현재 스테이지에 멈춰있는 인원수
        total += stages.count(s)    # 현재 스테이지까지 도달한 인원수
        
        if s > N:
            continue
        
        failure_rate = 0 if total == 0 else stop_count/total
        answer.append((s, failure_rate))
    
    answer = sorted(answer, key = lambda x: (-x[1], x[0]))
    answer = [a[0] for a in answer]

    return answer