import sys

threshold=90

file = open('coverage/action_coverage.txt', "r")
lines = file.readlines()

coverageTypes= lines[1].split('|')
coverages= lines[3].split('|')

lowCovFlag=False
for index, rawCoverage in enumerate(coverages):
  coverage = rawCoverage.strip()
  if (index < 5 and index > 0):
    if (float(coverage) < threshold):
      print coverage + ' ' + coverageTypes[index].strip()[2:] + ' lower than ' + str(threshold) + '% <---'
      lowCovFlag = True
    else: 
      print coverage + ' ' + coverageTypes[index].strip()[2:] + ' higher than ' + str(threshold) + '%'
  
print ' '

if (lowCovFlag):
  raise SystemExit('You may need to check your tests')
  # sys.stderr.write("You may need to check your tests")