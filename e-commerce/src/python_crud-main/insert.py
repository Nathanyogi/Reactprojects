import logging
import json


def post(mydb, req_data,path):

    if path == '/login':
        sql = "select * from user_table where name=%s and pass=%s"
        input_data = (req_data.get("name"),req_data.get("password"))
        cursor = mydb.cursor(buffered = True, dictionary = True)
        cursor.execute(sql, input_data)
        mydb.commit()
        result = cursor.fetchone()
        newResult = json.dumps({"status":"success","data":result})
        cursor.close()
        logging.warning(newResult)
        return newResult
        
    elif path == '/register':
        sql = """INSERT INTO user_table (name, email, pass, aadhar, phone,cart) VALUES (%s, %s, %s, %s, %s, %s)"""
        input_data = (req_data.get('name'), req_data.get('email'),  req_data.get('password'), req_data.get('aadhar'), req_data.get('phone'), json.dumps(req_data.get("cart")))    
    
    elif path == "/allproducts":
        sql = "insert into best_offer (img, product, price, brands, catagory) values (%s,%s,%s,%s,%s)"
        input_data = (req_data.get("img"), req_data.get("product"), req_data.get("price"), req_data.get("brands"), req_data.get("catagory"))

    elif  path == "/bestoffer":
        sql = 'insert into product_list (title ,img, product, specification, offer_price, original_price, offer, delivery, qty) values (%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        input_data = (req_data.get("title"),req_data.get("img"),req_data.get("product"),json.dumps(req_data.get("specification")),req_data.get("offer_price"),req_data.get("original_price"),req_data.get("offer"),req_data.get("delivery"),req_data.get("qty"))

    elif path == "/updateCart":
        sql = "UPDATE user_table SET cart=%s WHERE id = %s"
        input_data = (json.dumps(req_data.get('cart')),req_data.get('id'))


    elif path == "/removeFromCart":
        sql = "update user_table set cart = JSON_SET(cart,'$[%s]') where id=%s",
        input_data = ()

    elif path =="/readFromCart":
        sql = "select cart from user_table where id=%s"
        input_data = (req_data.get('id'))
        cursor = mydb.cursor(buffered = True)
        cursor.execute(sql, (input_data,))
        mydb.commit()
        result = json.dumps(cursor.fetchone())
        cursor.close()
        logging.warning(result)
        return result

    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("success")
    return "success"