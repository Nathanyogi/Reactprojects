import logging

def delete(mydb, req_data):
    sql = """DELETE from students_details WHERE id = %s"""
    input_data = (req_data.get('Id'))
    cursor = mydb.cursor()
    cursor.execute(sql, (input_data,))
    mydb.commit()
    cursor.close()
    logging.warning("Record deleted successfully")
    return "Record deleted successfully"