import datetime
days=['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

m, d = map(int, input().split())
diff_date = (datetime.date(2007, m, d) - datetime.date(2007, 1, 1)).days
print(days[diff_date%7])