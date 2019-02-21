from flask import Flask, render_template,json
from subprocess import Popen, PIPE
from flask_cors import CORS, cross_origin
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@cross_origin()

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/list")
def list():    
	process = Popen(['timeshift', '--list'], stdout=PIPE, stderr=PIPE)
	stdout, stderr = process.communicate()
	listall = []
	first=stdout.find("1 o") 	   
	out = stdout[first:len(stdout)].decode().replace(">","").replace("O","")	
	list = out.split("\n")
	print(len(list))
	listall.append(list[0].strip())
	for x in range(1,len(list)-2):
		test = list[x]
		listall.append(test[5:len(test)].strip())
		if x == len(list):
			break
	snapshot = json.dumps(listall)
	print(snapshot)
	return snapshot

@app.route("/create")
def create():
	process = Popen(['timeshift', '--create'], stdout=PIPE, stderr=PIPE)
	stdout, stderr = process.communicate()
	position = stdout.find("Tagged")
	output = stdout[position:len(stdout)].decode()
	print(output )
	return json.dumps(output)

     

#app.run(host="0.0.0.0",port=1212)

##from subprocess import Popen, PIPE
 
#process = Popen(['timeshift', '--list'], stdout=PIPE, stderr=PIPE)
#stdout, stderr = process.communicate()

#istall = []
#def list(output):
#	out = output[290:len(output)].replace("O","").replace(">","")
#	list = out.split("\n")
#	listall.append(list[0].strip())
#	for x in range(1,len(list)-2):
#		test = list[x]
#		listall.append(test[5:len(test)].strip())
#		if x == len(list):
##			break
#	print(listall.decode())	

#list(stdout)