import numpy as np
import datetime

def pgauss(x, mu, sigma):
    return 1. / np.sqrt(2*np.pi*sigma**2)*np.exp(-1*(x-mu)**2/(2*sigma**2))

times = [datetime.time(i).strftime("%l:%M %p") for i in xrange(24)]
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



day_weights = np.array([pgauss(i, 3, np.sqrt(7)) for i in range(7)])
z = sum(day_weights)
day_weights = day_weights / z

time_weights = np.array([pgauss(i, 11.5, np.sqrt(24)) for i in range(24)])
z = sum(time_weights)
time_weights = time_weights / z


A = 1
x0 = 3
y0 = 11.5

sigma_x = np.sqrt(7)
sigma_y = np.sqrt(24)

def gauss2d(x, y, x0, y0, sigma_x, sigma_y):
    return np.exp(-1* ((x-x0)**2/(2*sigma_x**2) + (y-y0)**2/(2*sigma_y**2)))

xx, yy = np.meshgrid(np.arange(7), np.arange(24), sparse=True)
z = np.vectorize(gauss2d)(xx,yy,3, 11.5, np.sqrt(7),np.sqrt(12)) * 10000
z = np.random.random((24,7)) * z

print "Time," + ','.join(days)
for time, vals in zip(times, z):
    print "%s,%s" % (time, ','.join("%d" % v for v in vals))




"""
for i, time in enumerate(times):



    vals = day_weights * 100 
    vals = ["%s" % i for i in vals]
    print ','.join([time] + vals)

    
    """
