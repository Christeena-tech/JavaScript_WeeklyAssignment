import test,{expect} from '@playwright/test'

test("Week3_Home Assignment 1",async({page})=>{
   await  page.goto("http://leaftaps.com/opentaps/control/main")
   await page.getByRole('textbox',{name:"Username"}).fill("Demosalesmanager")
   await page.getByRole('textbox',{name:"Password"}).fill("crmsfa")
   await page.getByRole('button',{name:"Login"}).click()
   await page.waitForTimeout(2000)
   await page.getByRole('link',{name:"CRM/SFA"}).click()
   await page.waitForTimeout(3000)
   await page.getByRole('link',{name:"Leads"}).click()
   await page.waitForTimeout(3000)
   await page.getByRole('link',{name:"Create Lead"}).click()
   await page.waitForTimeout(3000)
   //Hard Assertion
   const companyName=page.locator("//input[@id='createLeadForm_companyName']")
   await expect(companyName).toBeEnabled()
   await companyName.fill("Wipro")
   //Soft assertion
   await page.locator("#createLeadForm_firstName").fill("Azaliya")
   const actualFirstName=await page.inputValue("#createLeadForm_firstName")
   const expectedFirstName="Azaliya"
   expect.soft(actualFirstName).toEqual(expectedFirstName)
   console.log("FirstName matched")
   await page.locator("#createLeadForm_lastName").fill("Albert")
   await page.locator("#createLeadForm_personalTitle").fill("Student")
   await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("100000")
   await page.locator("#createLeadForm_departmentName").fill("IT")
   await page.locator("#createLeadForm_primaryPhoneNumber").fill("9400409371")
   await page.getByRole('button',{name:"Create Lead"}).click()
   await page.waitForTimeout(5000)
});