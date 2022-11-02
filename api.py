import http.client

conn = http.client.HTTPSConnection("twinword-sentiment-analysis.p.rapidapi.com")

payload = "text=great%20value%20in%20its%20price%20range!"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'X-RapidAPI-Key': "cfee2af735msh70ad5cf9916eafep1d1384jsn981a262062b5",
    'X-RapidAPI-Host': "twinword-sentiment-analysis.p.rapidapi.com"
    }

conn.request("POST", "/analyze/", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))