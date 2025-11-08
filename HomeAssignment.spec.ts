import test from '@playwright/test'

test("Handling alert and frame",async({page})=>{

    page.on('dialog',alertType=>{
        const type=alertType.type()
        console.log("Alert type is:"+type)
        console.log("Message from confirm dialog box:"+alertType.message())
        if(type==='confirm'){
            alertType.accept()
        }
        else{
    alertType.dismiss() 
        }
        
    })
     await page.waitForTimeout(3000)
     await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")  
     await page.frameLocator("(//iframe)[2]").locator("//button[text()='Try it']").click()
     console.log("InnerText value:"+await page.frameLocator("(//iframe)[2]").locator("//p[@id='demo']").innerText())

})

