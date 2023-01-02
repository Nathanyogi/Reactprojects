import logging
import json

def update(mydb, req_data):
    sql = """UPDATE user_table SET cart=%s WHERE id = %s"""
    input_data = (json.dumps(req_data.get('cart')),req_data.get('id'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Record updated successfully")
    return "Record updated successfully"