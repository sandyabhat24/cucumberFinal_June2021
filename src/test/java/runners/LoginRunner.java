package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\sandh\\june2021-Selenium\\Final_cucumber\\src\\test\\java\\features\\TF_Final_BackGround.feature",
		glue="steps",
		//tags="@scenario1",
		monochrome=true,
		dryRun=false,
		plugin= {
				"pretty",
				"html:target/cucumber",
				"json:target/cucumber.json"
		}
		
		
		)

public class LoginRunner {

}
