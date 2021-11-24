package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import page.BackgroundPage;
import page.BrowserFactory;

public class BackgroundStepDefinition extends BrowserFactory{
	WebDriver driver;
	BackgroundPage backgroundPage;
	
	/*@Before
	public void beforeRun() {
		driver=init();
		backgroundPage=PageFactory.initElements(driver, BackgroundPage.class);
	} */
	
	@Given("^Test page is open$")
	public void test_page_is_open() throws Throwable {
		driver=init();
		backgroundPage=PageFactory.initElements(driver, BackgroundPage.class);
	}

	@And("^\"([^\"]*)\" button exists$")
	public void button_exists(String arg1) throws Throwable {
       if(backgroundPage.checkBackgroundButtonExists(arg1))
    	   System.out.println("Button exists");
       else
    	   System.out.println("Button doesn't exists");  
	}

    @When("^I click on \"([^\"]*)\" color button$")
	public void i_click_on_the_button(String color) throws Throwable {
		backgroundPage.setBackgroundColor(color);
	} 
    @When("^I click on \"([^\"]*)\"  color button$")
    public void i_click_on_color_button(String color) throws Throwable {
    	backgroundPage.setBackgroundColor(color);
    }
	

	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() throws Throwable {
		Assert.assertEquals(backgroundPage.getBackgroundColor(),"rgba(135, 206, 235, 1)");

	}
	
	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white() throws Throwable {
		System.out.println(backgroundPage.getBackgroundColor());
		Assert.assertEquals(backgroundPage.getBackgroundColor(),"rgba(255, 255, 255, 1)");

	}
}
