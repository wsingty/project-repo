import sys
import re

infile = sys.argv[1] # pass the input csv file name when executing the script
removed_users = []  # list to store unique values of removed users

with open(infile) as f: # open file with filehandle 
    for line in f.readlines(): # read all the lines from the file
        row = str(re.sub(';', ',', str(line)).split(" ")).split(",")
        for ele in row: # check each list element
            if "removed" in str(ele): # check if "removed" keyword is in each list element
                if ele not in removed_users: # then check if itraw_input's added to removed_users list
                    removed_users.append(ele) # append only if the value was not added earlier 


query0 = str(" ".join(removed_users)).replace(" ", ", '")

query1 = "select c.external_id from cwd_user c inner join app_user a " + \
"on c.lower_user_name=a.lower_user_name where a.lower_user_name in" \
+ " ('" + query0 + "')"

print(query1)
print('\n' * 2)
print "Enter the external_ids. Once done press Return, then Ctrl-D to save and continue:"
contents = []
while True:
    try:
        line = raw_input("")
    except EOFError:
        break
    contents.append(line)


query00 = str(" ".join(contents)).replace(" ", ", '")
query2 = "select DISTINCT lower_email_address from cwd_user where external_id in" \
+ " ('" + query00 + "')" 

print(query2)
print('\n' * 2)

