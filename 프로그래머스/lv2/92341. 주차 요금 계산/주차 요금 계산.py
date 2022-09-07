from datetime import datetime
import math

def solution(fees, records):
    answer = []
    
    # 자동차 별 출입 기록 정리
    temp = {}
    for r in records:
        t, n, k = r.split()
        
        if n not in temp:
            temp[n] = []
        
        temp[n].append(datetime.strptime(t, '%H:%M'))
    
    sorted_temp = sorted(temp.items())  # 차량 번호로 정렬
    
    for (num, timeList) in sorted_temp:
        # 출차 기록이 없을 경우 23:59에 출차한 것으로 처리
        if len(timeList) % 2 == 1:
            timeList.append(datetime.strptime('23:59', '%H:%M'))
        
        # 총 주차 시간 계산
        total = 0
        for i in range(0, len(timeList), 2):
            minute = (timeList[i+1]-timeList[i]).seconds / 60
            total += minute
        
        # 금액 계산
        if total <= fees[0]:
            price = fees[1]
        else:
            price = fees[1] + math.ceil((total-fees[0]) / fees[2])*fees[3]
        answer.append(price)
    return answer