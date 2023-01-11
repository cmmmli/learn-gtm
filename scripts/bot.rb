require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome
driver.manage.timeouts.implicit_wait = 10

7.times do |i|
  driver.get 'https://learn-gtm.vercel.app'
  puts i, driver.title
  sleep(3600)
end

driver.quit
