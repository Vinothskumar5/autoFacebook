
const logindata = JSON.parse(JSON.stringify(require("../testData/loginData.json")));
exports.loginPage = class login {

    constructor (page) {
        this.page = page;
        this.username = "//input[@id='email']";
        this.password = "//input[@id='pass']";
        this.loginbutton = "//button[@id='loginbutton']";
        this.fbImage = "//img[@alt='Facebook']";
        this.logintitle = "//div[@class='_9axz']";
        this.login = "//a[normalize-space()='Forgotten account?']";
        this.createNewButton = "//a[normalize-space()='Create new account']";

    }

    async gotoLogin(){

        await this.page.goto(logindata.loginURL);
    }

    async happyLogin(username, password){
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
    }


}