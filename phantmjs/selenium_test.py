from selenium import webdriver
import time
import json
import os



def scroll_down(driver, times):
    for i in range(times):
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")  

        driver.save_screenshot(str(i + 1) + '.png')
        time.sleep(2)



cookiefile = 'cookie.txt'

driver=webdriver.Firefox()

driver.get("https://www.facebook.com")



#if os.access(cookiefile, os.F_OK):

#    f1 = open(cookiefile)
#    cookie = f1.read()
#    cookie =json.loads(cookie)
#    for c in cookie:
#        driver.add_cookie(c)

#else:
email=driver.find_element_by_css_selector("input[name='email']")
email.send_keys("")

password=driver.find_element_by_css_selector("input[name='pass']")
password.send_keys("")

submit=driver.find_element_by_css_selector("#login_form")
submit.submit()


#time.sleep(20)


#cookies = driver.get_cookies()
#print (type(cookies))
#print ("".join(cookies))
#f1 = open(cookiefile, 'w')
#f1.write(json.dumps(cookies))
#f1.close




#driver.get("https://www.facebook.com/Cs.DeriSeanitE")
#driver.refresh()

#https://www.facebook.com/Cs.DeriSeanitE
#driver.execute_script("window.location.href='https://www.facebook.com/Cs.DeriSeanitE'")  

scroll_down(driver=driver, times=6)

cookies = driver.get_cookies()
print (type(cookies))
print ("".join(cookies))
f1 = open('cookie.txt', 'w')
f1.write(json.dumps(cookies))
f1.close