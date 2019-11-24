// Generated by Selenium IDE
import { Builder, By } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox';

describe('Smoke Tests -> ', function () {
  jest.setTimeout(30000)
  let driver
  beforeEach(async function () {
    const options = new firefox.Options();
    options.headless()
    driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build()
  })
  afterEach(async function () {
    await driver.quit();
  })
  it('When page loads, go to settings, toggle dark theme, change primary color and secondary color #smokeTest', async function () {
    await driver.get("http://localhost:3000/dashboard")
    await driver.findElement(By.css(".fa-cog")).click()
    await driver.findElement(By.xpath("(//input[@value=''])[2]")).click()
    await driver.findElement(By.xpath("//div[@id='settings']/div[3]/ul/div/div[2]/div/button[6]")).click()
    await driver.findElement(By.xpath("//div[@id='settings']/div[3]/ul/div/div[3]/div/button[5]")).click()
  })
  it('When page loads, navigate the various pages with the sidebar #smokeTest', async function () {
    await driver.get("http://localhost:3000/dashboard")
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/ul[2]/a[2]/div[2]/span")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/ul[2]/a[3]")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/ul[2]/a[4]/div[2]/span")).click();
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/ul[2]/a[5]/div[2]/span")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/ul[2]/a[6]/div[2]")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/ul[2]/a[7]/div[2]/span")).click()
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/div/ul[2]/a/div[2]/span")).click()
  })
})
