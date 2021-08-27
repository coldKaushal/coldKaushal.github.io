var showbasic = true, showhtml = true, showcss = true, showbs = true, showjs = true, showajs = true, showdom = true, showadom = true, showjq = true, showc1 = true, showc2 = true, showc3 = true;
var basicinit = "In this tutorial we will cover the basics of the Internet and website and will have a look in the course.";
var basicMod = "Topics Covered: About the course, syllabus, internet, website, tips and tricks, word of advice";

var htmlinit = "This Tutorial covers the very beginning of the building block of a website and designing of the structure of the website.";
var htmlMod = "Topics Covered: introduction, objective, structure, tags, publishing website";

var cssinit = "In this tutorial we will learn about our color palletes to make our website more beautiful, and eye catching.";
var cssMod = "Topics Covered: introduction, objective, types, debugging, selectors, class vs id, box model, positioning, styles";

var bsinit = "This tutorial covers the very popular way of making our website more eye soothing materialistic design and making it more responsive.";
var bsMod = "Topics Covered: introduction, installation, objective, layout, containers, carousel, cards, Z index, media query, priority";

var jsinit = "In this Tutorial we will cover the basics of the programming language which can be used with the website.";
var jsMod = "Topics Covered: programming language, javascript, alerts, data types, variables, naming convention, strings, arithematic operations";


var ajsinit = "This Tutorial covers the higher order functions and methods which are very essential for our website to look more competitive with the real websites.";
var ajsMod = "Topics Covered: control statement, loops, functions, arrays, objects, comparators, random number";

var dominit = "This tutorial covers the begining of Data Object Modeling and how we can use the programming language in the website.";
var domMod = "Topics Covered: introduction, add Javascript to html, selectors, separation of concerns, text manipulation"

var adominit = "In this Tutorial we will learn about tracking the events and changing the content of the website while detecting the activity by the user.";
var adomMod = "Topics Covered: objective, event listeners, higher order functions, switch statements, objects, animations";

var jqinit = "The Final lesson includes the minification of our work in writing the Javascript and making the work much easier while using complicated methods.";
var jqMod = "Topics Covered: introduction, installation, minification, selecting/manipulation/event listeners/add or remove class with jquery, website animations";

var c1init = "Students will be creating a website incorporating what they have learned in previous lessons using the concepts of HTML, CSS and Bootstrap.";
var c1Mod = "<a href=" + "c1.rar"  + " >Download Starting files</a>";

var c2init = "Students will be developing a program using the concepts of Javascript and their own mental Ability to solve a real life problem using the programming language.";
var c2Mod = "<a href="+"c2.rar"+">Download Starting files</a>";

var c3init = "In the Final Challenge students will be using everything to develop a their own responsive and interactive portfolio website and deploying it to the world wide web.";
var c3Mod = "<a href="+"c3.rar"+">Download Starting files</a>";



$("#basic-btn").on("click", function () {
    if (showbasic) {
        showbasic = !showbasic;
        $("#basic-p").text(basicMod);
        $("#basic-btn").text("Overview>>");
    }
    else {
        showbasic = !showbasic;
        $("#basic-p").text(basicinit);
        $("#basic-btn").text("Topics Covered>>");
    }
});

$("#html-btn").on("click", function () {
    if (showhtml) {
        showhtml = !showhtml;
        $("#html-p").text(htmlMod);
        $("#html-btn").text("Overview>>");
    }
    else {
        showhtml = !showhtml;
        $("#html-p").text(htmlinit);
        $("#html-btn").text("Topics Covered>>");
    }
});

$("#css-btn").on("click", function () {
    if (showcss) {
        showcss = !showcss;
        $("#css-p").text(cssMod);
        $("#css-btn").text("Overview>>");
    }
    else {
        showcss = !showcss;
        $("#css-p").text(cssinit);
        $("#css-btn").text("Topics Covered>>");
    }
});

$("#bootstrap-btn").on("click", function () {
    if (showbs) {
        showbs = !showbs;
        $("#bootstrap-p").text(bsMod);
        $("#bootstrap-btn").text("Overview>>");
    }
    else {
        showbs = !showbs;
        $("#bootstrap-p").text(bsinit);
        $("#bootstrap-btn").text("Topics Covered>>");
    }
});


$("#js-btn").on("click", function () {
    if (showjs) {
        showjs = !showjs;
        $("#js-p").text(jsMod);
        $("#js-btn").text("Overview>>");
    }
    else {
        showjs = !showjs;
        $("#js-p").text(jsinit);
        $("#js-btn").text("Topics Covered>>");
    }
});

$("#ajs-btn").on("click", function () {
    if (showajs) {
        showajs = !showajs;
        $("#ajs-p").text(ajsMod);
        $("#ajs-btn").text("Overview>>");
    }
    else {
        showajs = !showajs;
        $("#ajs-p").text(ajsinit);
        $("#ajs-btn").text("Topics Covered>>");
    }
});

$("#dom-btn").on("click", function () {
    if (showdom) {
        showdom = !showdom;
        $("#dom-p").text(domMod);
        $("#dom-btn").text("Overview>>");
    }
    else {
        showdom = !showdom;
        $("#dom-p").text(dominit);
        $("#dom-btn").text("Topics Covered>>");
    }
});

$("#adom-btn").on("click", function () {
    if (showadom) {
        showadom = !showadom;
        $("#adom-p").text(adomMod);
        $("#adom-btn").text("Overview>>");
    }
    else {
        showadom = !showadom;
        $("#adom-p").text(adominit);
        $("#adom-btn").text("Topics Covered>>");
    }
});

$("#jq-btn").on("click", function () {
    if (showjq) {
        showjq = !showjq;
        $("#jq-p").text(jqMod);
        $("#jq-btn").text("Overview>>");
    }
    else {
        showjq = !showjq;
        $("#jq-p").text(jqinit);
        $("#jq-btn").text("Topics Covered>>");
    }
});

$("#c1-btn").on("click", function () {
    if (showc1) {
        showc1 = !showc1;
        $("#c1-p").html(c1Mod);
        $("#c1-p").addClass("course-material");
        $("#c1-btn").text("Overview>>");
    }
    else {
        showc1 = !showc1;
        $("#c1-p").text(c1init);
        $("#c1-p").removeClass("course-material");
        $("#c1-btn").text("Resources>>");
    }
});

$("#c2-btn").on("click", function () {
    if (showc2) {
        showc2 = !showc2;
        $("#c2-p").html(c2Mod);
        $("#c2-p").addClass("course-material");
        $("#c2-btn").text("Overview>>");
    }
    else {
        showc2 = !showc2;
        $("#c2-p").text(c2init);
        $("#c2-p").removeClass("course-material");
        $("#c2-btn").text("Resources>>");
    }
});

$("#c3-btn").on("click", function () {
    if (showc3) {
        showc3 = !showc3;
        $("#c3-p").html(c3Mod);
        $("#c3-p").addClass("course-material");
        $("#c3-btn").text("Overview>>");
    }
    else {
        showc3 = !showc3;
        $("#c3-p").text(c3init);
        $("#c3-p").removeClass("course-material");
        $("#c3-btn").text("Resources>>");
    }
});

