"use strict";
class DarkMode{


        //CONSTRUCTOR
        constructor($base) {
            this.darkmode = false;
            this.doms = {
                button:       $base
            }

            this.initDarkmode();

        };

        initDarkmode(){
            //check if user has set preferences for darkmode
            if(localStorage.darkmode){
                if(localStorage.darkmode == "true"){
                    this.darkmode = true;
                    this.changeCssVars(true);
                }
            }else{
                console.log("else")
                //check if users has browser preferences for darkmode
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    this.darkmode = true;
                    this.changeCssVars(true);
                }
            }

            this.addInteraction();
        }

        addInteraction(){
            this.doms.button.on("click", () => {
                this.darkmode = !this.darkmode;
                this.changeCssVars(this.darkmode);
                this.changeLocalStorageProp(this.darkmode);
            });
        }

        changeCssVars(darkmode){
            if(darkmode){
                $(":root").css("--colorText", "#f8f9fa");
                $(":root").css("--colorBg", "#212529");
                this.doms.button.addClass("dark");
            }else{
                $(":root").css("--colorText", "#212529");
                $(":root").css("--colorBg", "#f8f9fa");
                this.doms.button.removeClass("dark");
            }
        }

        changeLocalStorageProp(changeVal){
            localStorage.darkmode = changeVal;
        }
    
}

const init = () => {
    if ($(".btn-darkmodeToggle").length > 0) {
        new DarkMode($(".btn-darkmodeToggle"));
    }
};
init();



