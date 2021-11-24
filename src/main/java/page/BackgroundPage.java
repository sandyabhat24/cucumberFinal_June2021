package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BackgroundPage {
	
	WebDriver driver;
	
	public  BackgroundPage(WebDriver driver) {
		this.driver=driver;
	}
	
		
	@FindBy (how=How.CSS, using="button[onclick='myFunctionSky()']") WebElement SET_BACKGROUNDSKY_BUTTON_ELEMENT;
	
	@FindBy (how=How.CSS, using="button[onclick='myFunctionWhite()']") WebElement SET_BACKGROUNDWHITE_BUTTON_ELEMENT;
	
	@FindBy (how=How.CSS, using="body:nth-of-type(1)") WebElement BODY_ELEMENT;
	
	
	public boolean checkBackgroundButtonExists(String button) {
		
		if(button.contains("sky")) 
			 return SET_BACKGROUNDSKY_BUTTON_ELEMENT.isDisplayed();
		else
			return SET_BACKGROUNDWHITE_BUTTON_ELEMENT.isDisplayed();
		
		
	}
	
	public void setBackgroundColor(String color) {
		
		if(color.equalsIgnoreCase("Sky"))  
			SET_BACKGROUNDSKY_BUTTON_ELEMENT.click();
		else
			SET_BACKGROUNDWHITE_BUTTON_ELEMENT.click();
	}
	
	public String getBackgroundColor() {
		return BODY_ELEMENT.getCssValue("background-color");
	
	}
 	

}
