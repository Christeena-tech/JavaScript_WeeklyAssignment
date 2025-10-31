import test,{expect} from '@playwright/test'

test("Week3_Home Assignment 3",async({page})=>{
   await  page.goto("https://login.salesforce.com/")
   await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
   await page.getByLabel("Password").last().fill("TestLeaf@2025")
   await page.getByRole('button',{name:"Log In"}).click()
   await page.waitForTimeout(5000)
   /*const actualTitle=await page.title()
   const expectedTitle="Home | Salesforce"
   await expect.soft(actualTitle).toEqual(expectedTitle)
   await expect(page.url()).toEqual("https://testleaf.lightning.force.com/lightning/page/home")
   console.log("Page Url and title are matched")*/
   await page.locator("//div[@class='slds-icon-waffle']").click()
   await page.waitForTimeout(3000)
   await page.getByRole('button',{name:"View All Applications"}).click()
   await page.waitForTimeout(8000)
   await page.getByPlaceholder("Search apps or items...").fill("Service")
   await page.waitForTimeout(5000)
   await page.locator("//a[@class='slds-text-heading_small']").nth(0).click()
   await page.waitForTimeout(3000)
   await page.locator(".slds-truncate").nth(6).click()
   await page.waitForTimeout(5000)
   await page.getByRole('button',{name:"New"}).click()
   await page.waitForTimeout(3000)
   await page.locator(".slds-input").nth(2).fill("Albert")
   await page.locator("//button[text()='Save']").click()

});