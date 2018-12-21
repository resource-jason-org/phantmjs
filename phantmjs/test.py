from selenium import webdriver
import time
import re
from selenium.webdriver import DesiredCapabilities


class Get_Messge_From_Phantomjs(object):
    def __init__(self,url):
        self.url = url
        self.headers =  {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8,fr;q=0.7',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
        'cookie':'sb=uM0FXL1AV7HE2JZ7N2UajPUO; datr=uM0FXFRs0qCZMLnMK_VCzF2S; c_user=100008557038798; xs=225%3AWgjhXZ8uEZzx0Q%3A2%3A1543884287%3A15071%3A14255; pl=n; spin=r.4592338_b.trunk_t.1543893520_s.1_v.2_; fr=102sCNcJfKA5LhsjB.AWVCQwU3UCjMR6hMVh68Mih5Ovs.BcBc24.8E.FwF.0.0.BcBgJt.AWUdsw5Y; wd=1208x612; presence=EDvF3EtimeF1543899684EuserFA21B08557038798A2EstateFDutF1543899684698CEchFDp_5f1B08557038798F1CC',
        'upgrade-insecure-requests': '1',
        'accept-encoding':'gzip, deflate, br'
    }
        self.driver = webdriver.PhantomJS()

        cap = DesiredCapabilities.PHANTOMJS.copy()
        for key, value in self.headers.items():
            cap['phantomjs.page.customHeaders.{}'.format(key)] = value

        cap["phantomjs.page.settings.loadImages"] = False


    def request(self):

        self.driver.get(self.url)
        self.scroll_down(driver=self.driver, times=2)  

        self.parse(self.driver.page_source)
    
    def parse(self,content):
        datas = re.findall(r'http://news.mydrivers.com/\d+/\d+/\d+.htm',content)
        print(datas)
    
    def scroll_down(self,driver, times):
        for i in range(times):
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")  
 
            driver.save_screenshot(str(i + 1) + '.png')
            time.sleep(2)
if __name__ == '__main__':
    test = Get_Messge_From_Phantomjs("https://www.facebook.com/")
    test.request()