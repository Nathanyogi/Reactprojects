import logging
import json

def userList(mydb):
    sql = """select * from user_table order by id asc"""
    cursor = mydb.cursor(dictionary = True)
    cursor.execute(sql)
    results = json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(results)
    return results