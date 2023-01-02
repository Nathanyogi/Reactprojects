import logging
import json


def getProducts(mydb,path):
    
    if path =='/offerlist':
        sql = "select * from best_offer"
    elif path =='/allproducts':
        sql = "select * from product_list"
    
    cursor = mydb.cursor(dictionary = True)
    cursor.execute(sql)
    result = json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(result)
    return result   