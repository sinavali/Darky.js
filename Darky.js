//------------------------------------------------------------------------------------------------------------------//
//written by sinavali
//email: sina1vali@gmail.com
//version: 1.02
//web: helloworlds.ir
//cdn =====>https://helloworlds.ir/cdn/Darky.js/dark_mode.js
//
//------------------------------------------------------------------------------------------------------------------//
//the first value is the ID of the <select> tag that is belong to the color mode selection
//the second value is your Default mode wich you should have it on your object below
color_modes("color_mode_toggle", "Light");

function color_modes(select, base) {
    //var select = "color_mode_toggle";
    var select;
    //setting function
    //I used a unction to set 
    function root(x, y) {
        document.documentElement.style.setProperty(x, y);
    }
    //color palettes
    var color_mode = {

        "modes": [
            //add your data about your color mode as the template ====> this will create <option> tags for your <select>


            //line above will create a <option value="Dark">Dark || تاریک</option>
            //and styling it with => color:white; background:black;

            //there is an example
            { name_en: "Light", name_fa: "روشن", color: "black", background: "white", id: "Light1" },
            { name_en: "Dark", name_fa: "تاریک", color: "white", background: "black", id: "Dark2" }
            //Unfortunately you cant add any other style right here (actully you can'y add anything less or extra here)
        ],

        //here is the modes just give a name to them and set the properties
        //the colors iset in the down are not good or even OK so just delete them i kept them for examples
        //from this line to the end of the code you should add a "modes" propertie too see the examples
        "Light": [
            //don't worry there is no sort i did this for my self
            //backgrounds
            //the name is the exact name of the variable you are using in your CSS and the property is the value it takes
            //the propertie could be anything and not just colors
            { name: "--main-background", prop: "#61a07b" },
            { name: "--data-background", prop: "linear-gradient(147deg, #f9fcff 0%, #e6eaef 74%)" },
            { name: "--nav-background", prop: "linear-gradient(90deg, #4d4855 0, #000000 76%)" },
            { name: "--scroll-background", prop: "#30473a" },
            //colors
            { name: "--font-color", prop: "#121212" },
            { name: "--border-color", prop: "#218095" },
            { name: "--gradient-style", prop: "#ffffff" },
            { name: "--gradient-shadow", prop: "#000000" },
            { name: "--scroll-thumb", prop: "#257283" },
            { name: "--nav-color", prop: "#c7c7c7" },
            { name: "--gradient-shadow", prop: "#000000" },
        ],
        "Dark": [
            //backgrounds
            { name: "--main-background", prop: "#111" },
            { name: "--data-background", prop: "#000" },
            { name: "--nav-background", prop: "#000" },
            { name: "--scroll-background", prop: "#222" },
            //colors
            { name: "--font-color", prop: "#333" },
            { name: "--border-color", prop: "#444" },
            { name: "--gradient-style", prop: "#555" },
            { name: "--gradient-shadow", prop: "#666" },
            { name: "--scroll-thumb", prop: "#777" },
            { name: "--nav-color", prop: "#888" },
            { name: "--gradient-shadow", prop: "#999" },
        ],
    };
    //append options
    //here is the place that the <option> tag is created by the "Modes" propertie of the upper object
    for (var i = 0; i < color_mode.modes.length; i++) {
        var object = color_mode.modes[i];
        element = '<option value="' + object.name_en + '" id="color_mode_id_' + object.id + '">' + object.name_fa + '</option>';
        $("#" + select).append(element);
        $("#" + select + " > #color_mode_id_" + object.id + "").css({
            "background": object.background,
            "color": object.color,
        });
    };
    //set a default color mode
    //here is were the default will set by the name you will give to the function
    var what_is_color_mode = localStorage.getItem("color_mode");
    if (what_is_color_mode === null) {
        for (var i = 0; i < color_mode[base].length; i++) {
            root(color_mode[base][i].name, color_mode[base][i].prop);
        }
        //selecting the right <option>
        $("#" + select + " option").each(function() {
            if ($(this).text() == what_is_color_mode) {
                $(this).attr("selected", "true");
                $(this).removeAttr(attributeName);
            }
        });
        //first time in page
        //if client was new to the page this part will create a key and value to local storage of the browser
        //to remember what color mode is should be seted and set the one
    } else {
        var name = localStorage.getItem("color_mode");
        for (var i = 0; i < color_mode[name].length; i++) {
            root(color_mode[name][i].name, color_mode[name][i].prop);
        }
        $("#" + select + " option").each(function() {
            if ($(this).val() == what_is_color_mode) {
                this.setAttribute("selected", "true");
            }
        })
    }
    //if your <select> changes the value this part will know and will change the apperiance
    $("#" + select).change((e) => {
        var name = $("#" + select).val();
        var object_name;
        for (var i = 0; i < color_mode[name].length; i++) {
            root(color_mode[name][i].name, color_mode[name][i].prop);
            object_name = color_mode[name];
        }
        localStorage.setItem("color_mode", name);
    });
}